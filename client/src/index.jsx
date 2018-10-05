import React from 'react';
import ReactDOM from 'react-dom';
//import Starter from './components/starter.jsx';
import $ from 'jquery';


// const App = (props) => <Starter num={ props.number } />;
class App extends React.Component {
// constructor(props){
// 	super(props)
// 	this.state ={
// 		inputs: {
// 			name:'',
// 			types:'',
// 			imageUrl:'',
// 			filter: ''
// 	},
// 	number: 152,
// 	pokemon: []
// }
// }

// onchange(property, e){
// 	// console.log(property)
// 	var inputs = this.state.inputs
// 	// console.log(inputs)
// 	inputs[property] = e.target.value;
// 	// console.log(inputs)

// this.setState({inputs:inputs })
// }

insert(){
	//var number = this.state.number;

	$.ajax({
		method: 'POST',
		url: '/addStudent',
		data: {"studentId":7,"studentName":"xyz", "age":3, "courses": []},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}

// search(){
// 	var that = this;
// $.ajax({
// 		method: 'GET',
// 		url: '/api/pokemon',
// 		data: {number: this.state.number, name: this.state.inputs.name, types:this.state.inputs.types, imageUrl:this.state.inputs.imageUrl},
// 		success: function (data) {
// 			console.log("success",data)
// 			that.setState({pokemon : data})
// 		}
// 	})
// }
// filter(){
// 	var that = this;
// $.ajax({
// 		method: 'GET',
// 		url: '/api/pokemon',
// 		data: {number: this.state.number, name: this.state.inputs.name, types:this.state.inputs.types, imageUrl:this.state.inputs.imageUrl},
// 		success: function (data) {
// 			var arr = [], filter = that.state.inputs.filter;
// 			console.log("success",data)
// 			for (var i = 0; i < data.length; i++) {
// 				for (var j = 0; j < data[i].types.length; j++) {
// 					if(data[i].types[j].toLowerCase() === filter.toLowerCase()) arr.push(data[i])
// 				}
// 			}
// 			console.log(filter)
// 			console.log(arr)
// 			that.setState({pokemon : arr})
// 		}
// 	})
// }
// back(){
// 	this.setState({pokemon : []})
// }

render(){

		<button onClick = {this.insert.bind(this)}>ADD!</button>
		
}
}

ReactDOM.render(<App />, document.getElementById('app'));