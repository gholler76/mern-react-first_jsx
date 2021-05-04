import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 45
        }
    }

    addYear = () => {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair color: {this.props.hairColor}</p>
                <button onClick={this.addYear}>Birthday Button</button>
            </>
        )
    }
}

export default PersonCard;