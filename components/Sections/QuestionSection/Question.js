import React, { Component } from 'react';

export default class Question extends Component {
    render() {
        return (
            <div className="question">
                <p className="lead text-center">{this.props.question}</p>
            </div>
        );
    }
}
