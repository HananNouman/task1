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
		url: '/addStudent',
		data: {"studentId":7,"studentName":"xyz", "age":3, "courses": []},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}


render(){
return (

<button onClick = {this.insert.bind(this)}>ADD!</button>
)
		
		
}
}

ReactDOM.render(<App />, document.getElementById('app'));