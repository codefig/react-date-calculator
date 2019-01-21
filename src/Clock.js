import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            days : 0,
            hours: 0, 
            minutes: 0, 
            seconds : 0,

        }

        console.log(this.props )
    }
    componentWillMount(){
        console.log("it s moutned")
        this.getTimeUntil(this.props.deadline)
    }
    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.props.deadline), 1000)
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date())
        console.log("time", time);
        const seconds = Math.floor((time/1000) % 60);
        const  minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));
        
        this.setState({
            days:days,
            hours : hours,
            minutes:minutes,
            seconds:seconds
        })
    }
    render(){
   
        return(

			
                        <h2 className="subtitle">
                         <span>Days : {this.state.days}</span> &nbsp;
                         <span>Hours : {this.state.hours}</span> &nbsp;
                         <span>Minutes : {this.state.minutes}</span> &nbsp;
                         <span>Seconds : {this.state.seconds}</span>
            </h2>
             
        )
    }
}

export default Clock;