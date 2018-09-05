import React, { Component } from 'react';

export default class Answer extends Component {

    constructor(props){
        super(props);
    }

    handleClick(){
        //this.props.actions.updateChoice(this.props.id_question, this.props.answer.id);
        this.props.actions.updateScoreAndChoice(this.props.answer.points, this.props.weight, this.props.id_question, this.props.answer.id)
    }

    render() {
        

        return (
            <div className="answer">
                <input
                    type="radio"
                    name={"reponse_" + this.props.id_question}
                    value={this.props.answer.id}
                    id={"reponse_" + this.props.answer.id}
                    required
                />
                <label htmlFor={"reponse_" + this.props.answer.id} onClick={() => this.handleClick()}>
                    {this.props.answer.answer}
                </label>
            </div>
        );
    }

}
