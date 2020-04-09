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
		sel: function(){
			return this.checked == `${this.name}`;
		}
	},
	created: function(){
		
	},
	template: `<li @click="labelClick" :class='{selected: sel}'>
	{{title}}
</li>`
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
			aList = this.data.find(el=>el.key==sKey).sub;
			return aList;
		},
		subsection: function() {
			let aList = [];
			let sKey = this.checked.section;
			if(!sKey || !this.section || !this.section.length) {
				return aList;
			}
			aList = this.section.find(el=>el.key==sKey).sub || [];
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
				return shuffle(aList);
		
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
				return shuffle(aList);
		
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
			
			return shuffle(aList);
		},
		
		showReult: function(){
			return (this.displayData && this.displayData.length>0)
		},
		
		random_result: function(){
			if(!this.displayData.length) {
				return "";
			}
			return this.displayData.pop().title;
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
		this.getHash();
		
		this.bAppIsReady = true;
	},
	methods: {
		
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