import React from 'react';

import Person from './Person';

class quiz extends React.Component {
    constructor() {
        super();
        this.state = {
            question: '',
            person: ''

        }

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this);
        this.handleClick6 = this.handleClick6.bind(this);
    }

    handleClick1() {
        alert("THEN YOU WANT ELLIOT!!")
        this.setState({person: 'ELLIOT'});

    }
    handleClick2() {
        alert("THEN YOU WANT NATALIE!!")
    }
    handleClick3() {
        alert("THEN YOU WANT JACOB!!")
    }
    handleClick4() {
        alert("THEN YOU WANT HAMZA!!")
    }
    handleClick5() {
        alert("THEN YOU WANT JAY!!")
    }
    handleClick6() {
        alert("THEN YOU WANT LEILA!!")
    }

    render() {
        return(
            <div>
                <div>
                    <button className="btn btn-success" onClick={this.handleClick1}> Are you looking for a Cyclist? </button>
                    <button className="btn btn-success" onClick={this.handleClick2}> In need of an Experimental Baker? </button>
                    <button className="btn btn-success" onClick={this.handleClick3}> How about a Semi Professional Mini golfer? </button>
                    <button className="btn btn-success" onClick={this.handleClick4}> Are you thinking about a Gym Enthusiast? </button>
                    <button className="btn btn-success" onClick={this.handleClick5}> Are searching for that Aspiring Artist? </button>
                    <button className="btn btn-success" onClick={this.handleClick6}> Are you Makeup Mad? </button>
                </div>
                <Person person={this.state.person}/>
            </div>
        );
    }
}

export default quiz;