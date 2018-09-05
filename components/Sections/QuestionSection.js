import React, { Component } from 'react';
import Question from "./QuestionSection/Question";
import Answer from "../../containers/Sections/QuestionSection/Answer";
import section from './Section';

class QuestionSectionContent extends Component {
    render() {

        return (
                <div className="grid-container fluid">
                    <div className="grid-x grid-padding-x">
                        <div className="question-wrapper cell medium-6 large-6">
                            <h3 className="text-center primary-color">Question {this.props.question.id}</h3>
                            <Question question={this.props.question.question} id={this.props.question.id}/>
                        </div>
                        <div className="answer-wrapper cell medium-6 large-6">
                            <h3 className="text-center">Réponse {this.props.question.id}</h3>
                            <fieldset>
                                {this.props.question.answers.map((answer, i) => {
                                    return <Answer answer={answer} key={i} id_question={this.props.question.id} weight={this.props.question.weight}/>
                                })}
                            </fieldset>
                        </div>
                    </div>
                </div>
        );
    }
}

const QuestionSection = section(QuestionSectionContent);

export default QuestionSection;