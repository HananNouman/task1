import React from 'react';
import ReactDOM from 'react-dom';
//import Starter from './components/starter.jsx';
import $ from 'jquery';


// const App = (props) => <Starter num={ props.number } />;
class App extends React.Component {

insert(){
	//var number = this.state.number;

	$.ajax({
		method: 'POST',
		url: '/api/users/',
		data: {"id":7,"name":"xyz", "age":3,"role": "ADMIN"},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}


put(){
	//var number = this.state.number;

	$.ajax({
		method: 'PUT',
		url: '/api/users/7',
		data: {"id":7,"name":"xyz1", "age":333333,"role": "ADMIN"},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}
delete(){
	//var number = this.state.number;

	$.ajax({
		method: 'DELETE',
		url: '/api/users/7',
		data: {"id":7,"name":"xyz", "age":333,"role": "ADMIN"},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}
render(){
return (
	<div>
<button onClick = {this.insert.bind(this)}>ADD!</button>
<button onClick = {this.put.bind(this)}>PUT! </button>
<button onClick = {this.delete.bind(this)}>DELETE! </button>

</div>
)
		
		
}
}

ReactDOM.render(<App />, document.getElementById('app'));