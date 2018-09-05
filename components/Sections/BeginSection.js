import React, { Component } from 'react';
import section from './Section';


class BeginSectionContent extends Component {
    render() {

        return (
            <div className="grid-container fluid text-center">
                <div className="grid-x grid-padding-x">
                    <div className="cell medium-12 large-12">

                        <h3 className="primary-color">Quiz entrepreneur</h3>
                        <p>Ce quiz a été conçu pour révéler votre profil entrepreunarial.</p>
                        <p>Répondez aux 30 questions dès maintenant pour connaître votre profil.</p>
                        <a href="#" className="button navigate-right">Commencer le Quiz</a>

                    </div>
                </div>
            </div>
        );
    }
}


const BeginSection = section(BeginSectionContent);

export default BeginSection;
