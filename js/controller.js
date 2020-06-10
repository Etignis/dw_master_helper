var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var is_android = navigator.platform.toLowerCase().indexOf("android") > -1;
if(is_firefox && is_android){
	alert ('Мобильный firefox не отображает все это великолепие')
}

document.addEventListener('DOMContentLoaded', function(){

function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};
function shuffle(o, bRand){
	if(bRand){
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
	}
  return o;
};

function parseDie(sDie){
	// nDn+n
	let oDice = sDie.match(/(\d+)?d(\d+)([+-]\d+)?/i); // 1,2,4,5
	
	let nDie = Number(oDice[2]);
	let nCount = Number(oDice[1]);
	let nMod = Number(oDice[3]);
	
	let nResult = 0;

	if(nDie) {
		nResult = randd(1,nDie);
	}
	if(nCount) {
		nResult = nResult*nCount;
	}
	if(nMod) {
		nResult = nResult+nMod;
	}
	return nResult;
}

	////////////////////
	
Vue.component('item', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		src: {
			type: String,
			default: ""
		},	
		name: {
			type: String,
			default: ""
		},
		checked: {
			type: String,
			default: ""
		},
		ico: {
			type: String,
			default: ""
		},
		color: {
			type: String,
			default: ""
		},
		style_class: {
			type: String,
			default: ""
		},
	},
	data: function(){
		return {};
	},
	methods: {
		labelClick: function(oEvent){
			let o = {
				src: this.src, 
				name: this.name
			};
			this.$emit('lclick', o);
		},
		
	},
	computed: {
		id: function(){
			return "ch_"+this.val;
		},
		selected: function(){
			return this.checked == this.name? `selected_${randd(1,6)}`: "";
		},
		additional: function(){
			return this.style_class || ""
		}
	},
	created: function(){
		
	},
	template: `<li @click="labelClick" :class='[selected, additional]'>
	{{title}}
</li>`
});

Vue.component("move_link", {
	props: {
		
	},
	
	data: function(){
		return {}
	},
	methods: {
		
	},
	
	computed: {
		
	},
	
	template: ``
});

Vue.component('move', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		src: {
			type: String,
			default: ""
		},	
		name: {
			type: String,
			default: ""
		},
		condition: {
			type: String,
			default: ""
		},
		results: {
			type: Array,
			default: function(){return []}
		},
		variants: {
			type: Object,
			default: function(){return {}}
		},
		
	},
	data: function(){
		return {};
	},
	methods: {
		show_fail: function(oEvent){
	
			this.$emit('fail', oEvent);
		}		
	},
	computed: {
		isVariants: function(){
			return this.variants && this.variants.list
		},

		_results: function(){
			if(this.results && this.results.length>0) {
				return this.results.map(el=>{
					//let sLinks = el.links?el.links.join(" "):"";
					//debugger;
					let oInnerList = el.list? el.list.data.map(el=>el.title) : [];
					return {text: el.title, links: el.links , list: oInnerList}//`${el.title} ${sLinks}`
				})
			}
			return [];
		},
		_condition: function(){
			if(this.condition.includes("●")) {
				let aLines = this.condition.split(/●/);
				let sStart = aLines.shift();
				let aList = aLines.map(el=>`<li>${el.trim()}</li>`);
				return `${sStart} <ul>${aList.join("")}</ul>`;
			}
			return this.condition;
		}
	},
	created: function(){
		
	},
	template: `<article class='move'>
		<h1 class='title'>{{title}}</h1>
		<div class='condition' v-html="_condition"></div>
		<ul>
			<li v-for="item in _results">
				<span v-html="item.text" data-text="1"></span>
				<ul>
					<li v-for="el in item.list" >
						<span v-html="el" data-list="2"></span>
					</li>
				</ul>
				
				<ul class='fail_links'>
					<li v-for="el in item.links" >
						<a :href="el.href" class='move_link' @click.stop.prevent="show_fail(el)">{{el.title}}</a>
					</li>
				</ul>
			</li>
		</ul>
		<div v-if="isVariants">
			<div>{{variants.title}}</div>
			<ul>
				<li v-for="item in variants.list">
				{{item.title}}
				</li>
			</ul>
		</div>
		
</article>`
});

Vue.component('card', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		tags: {
			type: Array,
			default: function(){return []}
		},	
		cost: {
			type: String,
			default: ""
		},
		weight: {
			type: String,
			default: ""
		},
		hold: {
			type: String,
			default: ""
		},
		description: {
			type: String,
			default: ""
		}
		
	},
	data: function(){
		return {};
	},
	methods: {
		show_fail: function(oEvent){
	
			this.$emit('fail', oEvent);
		}		
	},
	computed: {
		_tags: function(){
			return this.tags.map(el=>`<span class='tag'>${el[0].toUpperCase() + el.slice(1)}</span>`).join(", ");
		},
		_description: function(){
			return this.description.split("|").map(el => `<p>${el}</p>`).join("\r\n");
		}
	},
	created: function(){
		
	},
	template: `<article class='card'>
		<h1 class='title'>{{title}}</h1>
		<div class='row tag_row' v-if="tags.length > 0">
			<div v-html="_tags"></div>
		</div>
		<div class="row" v-if="String(cost).length > 0">
			<div>Цена:</div>
			<div>{{cost}} монет</div>
		</div>
		<div class="row" v-if="String(weight).length > 0">
			<div>Вес:</div>
			<div>{{weight}}</div>
		</div>
		<div class="row" v-if="String(hold).length > 0">
			<div>Запас:</div>
			<div>{{hold}}</div>
		</div>
		<div v-if="String(description).length > 0">
			<div class='description' v-html="_description"></div>
		</div>
</article>`
});

Vue.component('chooser', {
	props: {		
		title: {
			type: String,
			default: ""
		},	
		type: {
			type: String,
			default: ""
		},	
		name: {
			type: String,
			default: ""
		},
		val: {
			type: [String, Number]
		},
		selected: {
			type: Boolean,
			default: false
		}
		
	},
	data: function(){
		return {};
	},
	methods: {
		check: function(oEvent){
			let bChecked = !this.selected;
			let o = {
				key: this.name, 
				value: this.val,
				checked: bChecked
			};
			this.$emit('iclick', o);
		}
	},
	computed: {
		
	},
	created: function(){
		
	},
	template: `<li class='no_offset'>
		<span :class='{checkboxer: true, selected: selected }' v-if="type=='checkbox'" @click="check">{{title}}</span>
	</li>`
});

Vue.component('lister', {
	props: {		
		title: {
			type: String,
			default: ""
		},		
		subtitle: {
			type: String,
			default: ""
		},	
		content: {
			
		},
		
	},
	data: function(){
		return {};
	},
	methods: {
		
	},
	computed: {
		_title: function(){
			if(Array.isArray(this.content)) {
				return this.content[0];
			} else if(typeof this.content == 'object') {
				return this.content.title || "";
			} else{
				return this.content;
			}
			
		},
		_subtitle: function(){
			if(Array.isArray(this.content)) {
				return this.content[1];
			} else if(typeof this.content == 'object') {
				return this.content.subtitle || "";
			} 
			return ""
		},
		
	},
	created: function(){
		
	},
	template: `<li class='no_offset lister item'>
		<div v-html="title"></div>
		<div v-html="subtitle" v-if="subtitle.length > 0" style="font-style: italic"></div>
	</li>`
});

	
var app = new Vue({
	el: '#app',
	data: {
		data: {},
		menu: {},
		
		structure: {},
		section: [],
		subsection: [],
		checked: {
			main: "",
			section: "",
			subsection: ""
		},
		
		showPreloader: true,
		
		section_actions: [{
			title: "Случайный монстр",
			key: "random_monster",
			from: "frankenstein",
			action: "get_random_monster",
			visible: false,
			showResult: false,
			
			list: [
				{
					key: "",
					title: "Свойства",
					value: "",
					params: `frankenstein/props`
				},
				{
					key: "",
					title: "Тактика",
					value: "",
					params:`frankenstein/tactics`
				},
				{
					key: "",
					title: "Ход",
					value: "",
					params: `frankenstein/moves`
				},
				{
					key: "",
					title: "Сокровище",
					value: "",
					params: `frankenstein/treasure`
				}
			]
		},{
			title: "Случайный персонаж",
			key: "random_character",
			from: "character_randoms",
			action: "get_random_character",
			visible: false,
			showResult: false,
			
			list: [
				{
					key: "",
					title: "Имя",
					value: "",
					params: `character_randoms/names`
				},
				{
					key: "",
					title: "Инстинкт",
					value: "",
					params: `character_randoms/instinct`
				},
				{
					key: "",
					title: "Тактика",
					value: "",
					params:`character_randoms/way`
				}
			]
		}
		],
		
		random: {
			monster: {
				list: []
			},
			person: {
				list: []
			}
		},
		
		libPathValue: {},
		list_data: {},
		random_list: [],
		options: [],
		enlarge_menu: false,
		smth: 1,
		
		move_fails: [],
		
		dm_helper: {
			active: false,
			show_sources: false,
			sources: [],
			show_prompt: false,
			prompt: "",
			timer: null 
		},
		
		
		oConfig: {},
		bAppIsReady: false,
		bDebug: location.href.includes("debug=true"),
		
		bModalWinShow: false,
		sModalWinCont: ""
	},

	computed: {		
		_libContent: function(){
			
		},
		_random_set_result: function (){
			let oItem = this.section_actions.find(el=> el.showResult == true);
			if(oItem){
				return oItem.list;
			}
			return [];
		},
		_random_set_title: function(){
			let oItem = this.section_actions.find(el=> el.showResult == true);
			if(oItem){
				return oItem.title;
			}
			return "";
		},
		displayData: function(){
			let oContent = {};
			let sPre = "";
			let aList = [];
			let o = {list: [], pre: ""};
			
			let sKey = this.checked.subsection;
			//oContent = this.list_data; //lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			oContent = this.libPathValue; //lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			this.options = [];

			let bRand = true;
			if(oContent && oContent.type=='list' /* && oContent.data && oContent.data.list && oContent.data.list.data*/){
				bRand = (oContent.list && oContent.list.meta && oContent.list.meta.bShuffle) !==false;
				aList = oContent.list.data.map((el, i)=>{
					if(typeof el == 'string'){
						return {
							key:i, 
							title: el.includes("|")?`<b>${el.split("|")[0].trim()}</b> ${el.split("|")[1].trim()}`: el
						}
					} else {
						return el
					}
				});
					
				o.list = aList;
			}
						
			if(oContent && oContent.pre){
				sPre = oContent.pre;
				o.pre = sPre;
			}
			if(oContent && oContent.list && oContent.list.meta && oContent.list.meta.options){
				let aOpts = aOptions = oContent.list.meta.options;
				o.options = aOpts;
				this.options = aOpts;
			}
			
			return o
		},
		
		displayItem: function(){
			let oData ={};
			//et oContent = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			let oContent = this.libPathValue;
			if(oContent && oContent.type=='item' ){
				oData = oContent.item.data;
				return oData;
			}
			
			return {};
		},
		
		showItem: function(){
			return !!(this.displayItem.title);
		},
		
		showReult: function(){
			return (this.displayData.list && this.displayData.list.length>0)
		},
		
		random_result: function(){
			if(!this.displayData.list.length || !this.random_list) {
				return "";
			}
			
			return this.random_list.map(el=> { 
				if(typeof el == 'string') {
					let aParts = el.split("|"); return aParts.length>1?`<b>${aParts[0]}</b><br> ${aParts[1]}`:el					
				} else {
					return el.title;
				}
				
			}).join("<hr>");
		},
		
		displayMove: function(){
			let oData = [];
			let sKey = this.checked.subsection;
			//oContent = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			let oContent = this.libPathValue;
			
			if(oContent && oContent.type=='move'){
				oData = oContent.move.data;
				return oData;
			}
			
			return {};
		},
		showMove: function(){
			let bMove = !!(this.displayMove && this.displayMove.condition);
			return bMove;
		},
		
		showInfo: function(){
			return !this.showMove && !this.showReult && !this.showItem && !this.showRandomSet;
		},
		
		section_action_list: function(){
			return this.section_actions.filter(el=>el.visible != false);
		},
		
		showRandomSet: function(){
			return this._random_set_result.map(el=>el.value).filter(el=>!!el).length>0
		},
		
		listCompact: function(){
			if(this.displayData && this.displayData.list && this.displayData.list.length>0) {
				let nAvr = this.displayData.list.reduce((a, b, i, arr) => a + b.title.length / arr.length, 0);
				if(nAvr<24){
					return true;
				}
			}
			return false;
		}
	},
	mounted: function() {
		if(this.bDebug) {
				alert('mount start');
			}
		// this.loadConfigData();			
		// this.sModalWinCont = $("#info_text").html();
		
		// let bInfoIsRead = this.getConfig("infoIsRead");
		// if(bInfoIsRead) {
			// this.hideInfo();
			// this.showCards();
		// }
		
		// this.getHash();			
		
		// this.$refs.PactTypeCombobox.toggle(null, this.bPactTypesOpend);
		// this.$refs.SourceCombobox.toggle(null, this.bSourcesOpend);
		if(this.bDebug) {
			alert('lib version: '+lib_DW.version)
		}
		this.structure = lib_DW.getStructure();
		if(this.bDebug) {
			alert('structure length: '+this.structure.length)
		}
		
		
		this.dm_helper.sources = this.structure[0].sub;
		
		if(this.bDebug) {
			alert('sources length: '+this.dm_helper.sources.length)
		}
		
		this.dm_helper.sources.forEach(el=>{el.active = el.key=='common'});
		
		// this.updateHash();
		//this._setMoveLinks();
		this.getHash();
		
		// let oLoader = document.querySelector("#loader_overflow");
		// if(oLoader) {
			// oLoader.classList.add("hidden");
			// setTimeout(function(){oLoader.remove()}, 600);
		// }
		setTimeout(function(){
			this.showPreloader=false; this.bAppIsReady = true;
			if(this.bDebug) {
				alert('redy: '+this.bAppIsReady);
			}
		}.bind(this), 300);
		
		//this.bAppIsReady = true;		
		
		if(this.bDebug) {
			alert('redy: '+this.bAppIsReady);
		}
		
		window.addEventListener('hashchange',()=>{this.getHash();})
		
		this._random();
	},
	methods: {
		_random: function(){
			this.random_list = lib_DW.getResult(
				`${this.checked.main}/${this.checked.section}/${this.checked.subsection}`, 
				{
					options: this.options
										.filter(el => el.checked)
										.map(el=>el.key)
				}
			);
			
			//this.list_data = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			this.libPathValue = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
		},
		menu_priority: function(bMax){
			this.enlarge_menu = !!bMax;
		},
		_switchSectionAction: function(sKey){
			for (let i=0; i < this.section_actions.length; i++) {
				this.section_actions[i].visible = this.section_actions[i].from == sKey;
			}
		},
		dataClick: function({src, name}){
			this.checked.main = `${name}`;
			this.checked.section = "";
			this.checked.subsection = "";
			this.section = lib_DW.getStructure(this.checked.main);
			this.subsection = [];
			//this.list_data = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			this.libPathValue = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			this.updateHash();
			
			this.move_fails = [];
			this._random();
			
			/// actions
			
			this._switchSectionAction(this.checked.main);
			this.section_actions.forEach(oAction => {oAction.list.forEach(oListItem => {oListItem.value = ""})});
			this.libPathValue = {};
		},
		sectionClick: function({src, name}){
			this.checked.section = `${name}`;
			this.checked.subsection = "";
			this.subsection = lib_DW.getStructure(this.checked.main, this.checked.section);
			//this.list_data = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			this.libPathValue = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			this.updateHash();
			
			this.move_fails = [];
			this._random();
			
			
			this.section_actions.forEach(oAction => {oAction.list.forEach(oListItem => {oListItem.value = ""})});
			this.libPathValue = {};
		},
		section_actionClick: function({src, name}){
			this.checked.section = "";
			this.checked.subsection = "";
			this.libPathValue = {};
			
			this.section_actions.forEach(oAction => {oAction.showResult = false; oAction.list.forEach(oListItem => {oListItem.value = ""})});
			let oSelected = this.section_actions.find(el=>el.key == name);
			oSelected.showResult=true;
			//this.updateHash();
			if(oSelected && oSelected.list){
				//this[oSelected.action].call(this, oSelected);
				
				oSelected.list.forEach(oItem => {
					let sVal =  lib_DW.getResult(
					oItem.params, {}
					);
					
					oItem.value = this._formatTitle(sVal[0]);
				});
			}
		},
		subsectionClick: function({src, name}){
			this.checked.subsection = `${name}`;
			//this.list_data = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			this.libPathValue = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			this.updateHash();
			
			this.move_fails = [];
			this._random();			
			
			this.section_actions.forEach(oAction => {oAction.list.forEach(oListItem => {oListItem.value = ""})});
			this.libPathValue = {};
		},
		
		
		_formatTitle: function(sText){
			let aParts = sText.split("|");
			return aParts.length>1? `<b>${aParts[0]}</b> ${aParts[1]}` : aParts[0];
		},
		
		get_random_monster: function(){
			let aProps = this.random_list = lib_DW.getResult(
				`frankenstein/props`, {}
				);
			let aTactics = this.random_list = lib_DW.getResult(
				`frankenstein/tactics`, {}
				);
			let aMoves = this.random_list = lib_DW.getResult(
				`frankenstein/moves`, {}
				);
			let aTreasure = this.random_list = lib_DW.getResult(
				`frankenstein/treasure`, {}
				);
				
				
				this.section_actions.find(el=> el.key == "random_monster").list = [
					{
						key: "",
						title: "Свойства",
						value: this._formatTitle(aProps[0]),
						params: `frankenstein/props`
					},
					{
						key: "",
						title: "Тактика",
						value: aTactics[0],
						params:`frankenstein/tactics`
					},
					{
						key: "",
						title: "Ход",
						value: aMoves[0],
						params: `frankenstein/moves`
					},
					{
						key: "",
						title: "Сокровище",
						value: aTreasure[0],
						params: `frankenstein/treasure`
					}
				];
				
		},
		
		_onRandomGeneratedClick: function(oData){
			//debugger;
			let aVals = this.random_list = lib_DW.getResult(
				oData.params, {}
				);
			let oItem = this.section_actions.find(el=> el.showResult == true);
			if(oItem){				
				oItem.list.find(el=>el.params == oData.params).value = this._formatTitle(aVals[0]);
			}
		},
		//moves
		
		onChoose: function({key, value, checked}){
			let oContent = {};			
			let sKey = this.checked.subsection || this.checked.section || this.checked.main;			
			let oOption = this.options.find(el=>el.key==key);
			oOption.checked = checked;
			
			this._random();
		},
		
		show_move_fail: function (oLink){
			let aParts = oLink.href.replace("#", "").split("|");
			let sResult = lib_DW.getResult(`${aParts[0]}/${aParts[1]}/${aParts[2]}`, {});
			if(this.move_fails.length > 4) {
				this.move_fails.pop();
			}
			this.move_fails.unshift(sResult[0]);
		},
		
		// helper
		_restart_prompt_animation: function(){
			this.dm_helper.active = false;
			setTimeout(function(){this.dm_helper.active = true;}.bind(this), 10);
		},
		get_prompt: function(){
			let aSelected = this.dm_helper.sources.filter(el=>el.active).map(el=>el.key);
			if(aSelected.length>0){
				this._restart_prompt_animation();
				let sStart = "master_moves";
				let sKey = shuffle(aSelected, true)[0];
				//this.list_data = lib_DW.getByPath(sStart, sKey);
				console.log(sStart, sKey);
				let aResult = lib_DW.getResult(`${sStart}/${sKey}`, {});
				let aParts = aResult[0].split("|");
				return aParts.length>1? `<b>${aParts[0]}</b><br>${aParts[1]}` : aParts[0];
			}
		},
		switch_prompt: function(bShow){
			this.dm_helper.show_prompt = bShow;
			if(bShow) {
				this.dm_helper.prompt = this.get_prompt();//"ewr wer wwerwer wer wer ";				
			}
		},
		switch_helper: function(){			
			this.dm_helper.active = !this.dm_helper.active;
			
			this.switch_prompt(this.dm_helper.active);
			
			if(this.dm_helper.active) {
				this.dm_helper.timer = setInterval(function(){
					this.switch_prompt(this.dm_helper.active);
				}.bind(this), 1000*60);				
			} else {
				clearInterval(this.dm_helper.timer);
			}
			
			this.dm_helper.show_sources = false;
		},
		onPressHelperSrc: function(oOpt){
			//debugger;
			let aOptions = [];
			this.dm_helper.sources.forEach(el=>{
				aOptions.push(el);
				if(el.key == oOpt.key) {
					el.active = !el.active;
				}
			});
			this.dm_helper.sources = aOptions;
		},
		next_prompt: function(){
			this.dm_helper.prompt = this.get_prompt();
		},
		
		
		show_start: function(){
			this.checked.main="";
			this.checked.section="";
			this.checked.subsection="";
			this.updateHash();
			this.getHash();
		},
		

		
		updateHash: function() {
			var aHash = [];
			if(this.checked.main) {
				aHash.push(this.checked.main);
			}
			if(this.checked.section) {
				aHash.push(this.checked.section);
			}
			if(this.checked.subsection) {
				aHash.push(this.checked.subsection);
			}
			
			if(aHash.length>0) {
				window.location.hash = aHash.join("|");
			} else {
				this.removeHash();
			}
		},
		removeHash: function(){
			history.pushState("", document.title, window.location.pathname + window.location.search);
			return false;
		},
		getHash: function() {
			var sHash = window.location.hash.slice(1); // /archive#q=Item_name
			sHash = decodeURIComponent(sHash);
			var oHash = {};
			
			let aHash = sHash.split("|");
			if(aHash[0]) {
				this.checked.main = aHash[0];
				this.section = lib_DW.getStructure(this.checked.main);
				this._switchSectionAction(this.checked.main);
				this.section_actions.forEach(oAction => {oAction.list.forEach(oListItem => {oListItem.value = ""})});
				this.libPathValue = {};
			} else {
				// this.checked.main = "";
			}
			
			if(aHash[1]) {
				this.checked.section = aHash[1];
				this.subsection = lib_DW.getStructure(this.checked.main, this.checked.section);
			} else {
				// this.checked.section = "";
				// this.section = [];
			}
			
			if(aHash[2]) {
				this.checked.subsection = aHash[2];
			} else {
				// this.checked.subsection = "";
				// this.subsection = []
			}
			
			//this.list_data = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			this.libPathValue = lib_DW.getByPath(this.checked.main, this.checked.section, this.checked.subsection);
			
		}
	}
});

});