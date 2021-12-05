import Vue from 'vue'

let vm = new Vue({
	el:"#app",
	data(){
		return {
			title:"titile1",
			classNum:1,
			teacher:[1,2],
			total:2,
			info:{
				a:{
					b:{
                       name:"hello"
					}
				}
			},
			students:[
			{
             name:"admin",
             a:[1,2,3,4]
			},
			{
             name:"test"
			}]
		}
	}
})

console.log(vm.students)