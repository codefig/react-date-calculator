import React from 'react';
import { ReactDom } from 'react-dom';
import moment from 'moment';
import Clock from './Clock'

class HomePage extends React.Component {

	constructor() {
		super()
		this.state = {
			pageTitle: "Countdown timer",
			deadline : "December 25, 2020",
			newDeadline : ''
			
		}
		this.onCalculateClicked = this.onCalculateClicked.bind(this);
	
		this.handleDateChange = this.handleDateChange.bind(this);
	}
	handleDateChange(event){
		// alert("Something clicked")
		this.setState({
			outputDate : event.target.value,
			countDownDate : event.target.value,
			newDeadline : event.target.value,
		})
	}

	onCalculateClicked(){
		// alert("clicked something")
		this.setState({
			deadline : this.state.newDeadline,
		})

	}


	render() {

		return (

			<div>
					<section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            CountDown to : {this.state.deadline}
                        </h1>

				<Clock deadline={this.state.deadline}></Clock>

				</div>
				</div>
				</section>
				<div className="container">
					<div className="field">
						<label className="label">Enter your Date of Choice</label>
						<div className="control">
							<input className="input" 
							// defaultValue={this.state.countDownDate.format("MMMM DD YYYY")} 
							onChange={this.handleDateChange}
							type="text" 
							placeholder="12-25-2020"/>
  							</div>
							<p className="help">{this.state.isValid ? "Valid Date ": "Invalid Date e.g (12-23-1990)"}</p>
						</div>

						<button className="button is-primary" onClick={this.onCalculateClicked}>Calculate</button>

						<div className="container">
							&nbsp;
						</div>
					</div>
				</div>
				)
		}
	}
	
export default HomePage;