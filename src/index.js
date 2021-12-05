import Vue from 'vue'

let vm = new Vue({
	el:"#app",
	data(){
		return {
			title:"titile1",
			classNum:1,
			teacher:[1,2],
			total:2,
			students:[
			{
             name:"admin"
			},
			{
             name:"test"
			}]
		}
	}
})
