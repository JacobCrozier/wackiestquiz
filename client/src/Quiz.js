import React from 'react';

class quiz extends React.Component {
    constructor() {
        this.state = {
            question: ''
        }
    }

    handleClick1() {
        alert("THEN YOU WANT ELLIOT!!")
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
                <button className="btn btn-success" onClick={handleClick1}> Are you looking for a Cyclist? </button>
                <button className="btn btn-success" onClick={handleClick2}> In need of an Experimental Baker? </button>
                <button className="btn btn-success" onClick={handleClick3}> How about a Semi Professional Mini golfer? </button>
                <button className="btn btn-success" onClick={handleClick4}> Are you thinking about a Gym Enthusiast? </button>
                <button className="btn btn-success" onClick={handleClick5}> Are searching for that Aspiring Artist? </button>
                <button className="btn btn-success" onClick={handleClick6}> Are you Makeup Mad? </button>
            </div>
        );
    }
}

export default quiz;