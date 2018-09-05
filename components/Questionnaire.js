import React, { Component } from 'react';
import Reveal from 'reveal.js';
import Slide from './Slide';
import BeginSection from './Sections/BeginSection';
import QuestionSection from './Sections/QuestionSection';
import EndSection from '../containers/Sections/EndSection';
import '../../../../node_modules/reveal.js/css/reveal.css';
import '../../../../node_modules/reveal.js/css/theme/white.css';



export default class Questionnaire extends Component {

    renderSlide(question){
        return (
            <Slide key={question.id} question={question}>
                <QuestionSection />
            </Slide>
        );
    }

    renderSlides(questions){
        return questions.map((question) => {
            return this.renderSlide(question)
        })
    }

    render() {
        return (
            <div className="questionnaire reveal">
                <div className="floating-menu"></div>
                <Slide><BeginSection /></Slide>
                {this.renderSlides(this.props.questions)}
                <Slide><EndSection /></Slide>
            </div>
        );
    }

    componentDidMount(){
        this.props.actions.fetchQuestions().then( () =>  {
            Reveal.initialize();
            Reveal.configure({ slideNumber: 'c/t' });
        });
    }
}
