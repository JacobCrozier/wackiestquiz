import React from 'react';

class person extends React.Component {
    constructor(){
        super();
        this.state = {
            personA: ''
        }
    }
    render() {
        return (
            <div>
                <p>You need {this.state.personA}</p>
            </div>
        );
    }
    
}

export default person;