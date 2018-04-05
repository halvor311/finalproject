import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import Nav from "../Nav";
import GoogleSuggest from '../../GooglePlaces';
import Input from './Input.js';
import axios from 'axios';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";

// class based component
class Home extends React.Component {
	// defines the state. Give value of "text". 
	state= {
		text: "",
		submit: "",
		hobbies:[<GoogleSuggest/>]
	}
	// handleChange sets the state of "text" to the event. The event is what the user is typing
	handleChange = (event) => {
		console.log (event.target.value)
		this.setState({text: event.target.value})
	}
	// take the value of this.state.text and put it in this.state.submit before it clears
	handleSubmit = (event) => {
		const hobbyArray = this.state.hobbies;
		hobbyArray.push(this.state.text);
		this.setState({
			hobbies: hobbyArray,
			text: ""
		});


		event.preventDefault();
	};
	render(){
	return (
		
		<div className='row'>
			{/* <Nav /> */}
			<div className='col' >
				<h1 style ={{color: "white"}}>So what is it that you like to do!!</h1>
				<label>Input a hobby!!!</label>
				<form onSubmit= {this.handleSubmit}>
					<input type = "text"
					value = {this.state.text}
					onChange = {this.handleChange}/>
					<button type = "Submit" value = "submit" className= "activities">Click here for some activities</button>
				</form>
				{/* User clicks this button after typing an interest and a list of places that might do that appear */}
			
				<p>{this.props.auth.username}</p>
				<button onClick = {this.props.handleLogout}>Log Out</button>
			</div>
			<div className='col' >
				{this.state.hobbies.map( (hobby) => {
					return <p className='whiteFont'>{hobby}</p>
				})}
			</div>
		</div>
	);
	
}
}
// ReactDOM.render(<Home />, document.getElementById('app'))

export default Home;