import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair color: {this.props.hairColor}</p>
            </>
        )
    }
}

export default PersonCard;