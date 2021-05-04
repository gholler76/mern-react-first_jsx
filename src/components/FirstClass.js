import React, { Component } from 'react';


class FirstClass extends Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
            <div>
                <h1>
                    My name is {this.props.firstName} {this.props.lastName}
                </h1>
            </div>
        );
    }
}

export default FirstClass;
