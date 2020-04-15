document.addEventListener('DOMContentLoaded', function(){

function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};
function shuffle(o){
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
    return o;
};

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
		}
	},
	created: function(){
		
	},
	template: `<li @click="labelClick" :class='[selected]'>
	{{title}}
</li>`
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
				
	},
	computed: {
		isVariants: function(){
			return this.variants && this.variants.list
		},

		_results: function(){
			if(this.results && this.results.length>0) {
				return this.results.map(el=>{
					let sLinks = el.links?el.links.join(" "):"";
					return `${el.title} ${sLinks}`
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
			<li v-for="item in _results" v-html="item">
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

	
var app = new Vue({
	el: '#app',
	data: {
		data: data,
		
		checked: {
			main: "",
			section: "",
			subsection: ""
		},
		smth: 1,
		
		oConfig: {},
		bAppIsReady: false,
		
		bModalWinShow: false,
		sModalWinCont: ""
	},

	computed: {
		section: function() {
			let aList = [];
			let sKey = this.checked.main;
			if(!sKey) {
				return aList;
			}
			let aFiltered = this.data.find(el=>el.key==sKey);
			aList = aFiltered.sub || aFiltered.data && aFiltered.data.moves || [];
			return aList;
		},
		subsection: function() {
			let aList = [];
			let sKey = this.checked.section;
			if(!sKey || !this.section || !this.section.length) {
				return aList;
			}
			let aFiltered = this.section.find(el=>el.key==sKey);
			let bMove = !!aFiltered.condition;
			aList = bMove? [] : aFiltered.sub;
			return aList;
		},
		
		displayData: function(){
			let aList = [];
			let sKey = this.checked.subsection;
			if(sKey && this.subsection && this.subsection.length>0) {
				aList = this.subsection.find(el=>el.key==sKey);
				if(aList.data && aList.data.list){
					aList = aList.data.list.map((el, i)=>({key:i, title: el.includes("|")?`<b>${el.split("|")[0].trim()}</b> ${el.split("|")[1].trim()}`: el}));
				} else {
					aList = [];
				}
				return shuffle(aList, this.smth);
		
			}
			
			//////////////
			sKey = this.checked.section;
			if(sKey && this.section && this.section.length>0) {
				aList = this.section.find(el=>el.key==sKey);
				if(aList.data && aList.data.list){
					aList = aList.data.list.map((el, i)=>({key:i, title: el.includes("|")?`<b>${el.split("|")[0].trim()}</b> ${el.split("|")[1].trim()}`: el}));
				} else {
					aList = [];
				}
				return shuffle(aList, this.smth);
		
			}
			
			//////////////
			sKey = this.checked.main;
			if(!sKey) {
				return aList;
			}
			aList = this.data.find(el=>el.key==sKey);
			if(aList.data && aList.data.list){
				aList = aList.data.list.map((el, i)=>({key:i, title: el.includes("|")?`<b>${el.split("|")[0].trim()}</b> ${el.split("|")[1].trim()}`: el}));
			} else {
				aList = [];
			}
			
			return shuffle(aList, this.smth);
		},
		
		showReult: function(){
			return (this.displayData && this.displayData.length>0)
		},
		
		random_result: function(){
			if(!this.displayData.length) {
				return "";
			}
			return this.displayData.pop().title;
		},
		
		displayMove: function(){
			sKey = this.checked.section;
			if(sKey && this.section && this.section.length>0) {
				aList = this.section.find(el=>el.key==sKey);
				if(aList){
					let bMove = !!aList.condition;
					return bMove? aList : {};
				}		
			}
			
			return {};
		},
		showMove: function(){
			let bMove = !!(this.displayMove && this.displayMove.condition);
			return bMove;
		},
		
		showInfo: function(){
			return !this.showMove && !this.showReult;
		}
	},
	mounted: function() {
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
		
		// this.updateHash();
		this._setMoveLinks();
		this.getHash();
		
		let oLoader = document.querySelector("#loader_overflow");
		if(oLoader) {
			oLoader.style.opacity = 0;
			setTimeout(function(){oLoader.remove()}, 600);
		}
		this.bAppIsReady = true;		
		
		window.addEventListener('hashchange',()=>{this.getHash();})
	},
	methods: {
		_random: function(){
			this.smth = -this.smth;
		},
		_setMoveLinks: function(){
			that = this;
			this.data.forEach(function(oEl){
				if(oEl.data && oEl.data.moves) {
					oEl.data.moves.forEach(function(oMove){
						that._translateMove(oMove)
						// oMove.results.forEach(function(oResult){
							// if(oResult.links && oResult.links.length>0) {
								
							// }
						// })
					})
				}
			});
		},
		_translateMove: function(oMove){
			//let oLinkedMove = Object.assign(oMove);
			oMove.results = oMove.results.map(res=>{
				if(res.links && res.links.length>0) {
					res.links = res.links.map(link=>{
						let sLinktitle = this._getLinkTitle(link);
						return `<a href="#${link}">${sLinktitle}</a>`
					}) || [];
				}
				
				return res;
			})
			return oMove;
		},
		_getLinkTitle: function(sPath){
			let sRet = sPath;
			let aPath = sPath.split("|");
			let sTitle = "";
			switch(aPath.length) {
				case 3: 
					let aSections = data.filter(el=>el.sub && el.sub.length>0);
					for (let i=0; i<aSections.length; i++ && !sTitle) {
						if(aSections[i].sub) {
							let aSec = aSections[i].sub;
							for(let j=0; j<aSec.length; j++) {
								if(aSections[i].sub[j].sub) {
									let oSub = aSections[i].sub[j].sub.find(el=>el.key == aPath[2]);
									if(oSub) {
										sTitle = oSub.title;
										break
									}
								}
							}
						}
					}
					break;
				case 2: 
					let aSections2 = data.filter(el=>el.sub && el.sub.length>0);
					for (let i=0; i<aSections2.length; i++) {
						if(aSections2[i].sub) {
							let oSub2 = aSections2[i].sub.find(el=>el.key == aPath[1]);
							if(oSub2) {
								sTitle = oSub2.title;
							}
						}
					}
					break;;
				case 1: break;
			}
			
			return sTitle || sRet;
		},
		dataClick: function({src, name}){
			this.checked.main = `${name}`;
			this.checked.section = "";
			this.checked.subsection = "";
			this.updateHash();
		},
		sectionClick: function({src, name}){
			this.checked.section = `${name}`;
			this.checked.subsection = "";
			this.updateHash();
		},
		subsectionClick: function({src, name}){
			this.checked.subsection = `${name}`;
			this.updateHash();
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
			}
			if(aHash[1]) {
				this.checked.section = aHash[1];
			}
			if(aHash[2]) {
				this.checked.subsection = aHash[2];
			}
			
		}
	}
});

});