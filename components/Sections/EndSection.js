import React, { Component } from 'react';
import section from './Section';


class EndSectionContent extends Component {

    sendChoices() {
        this.props.actions.sendChoices(this.props.formatChoicesToExport)
    }

    render() {

        return (
            <div>
                <div className="grid-container fluid text-center">
                    <div className="grid-x grid-padding-x">
                        <div className="cell medium-12 large-12">

                            <h3 className="primary-color">Vous avez fini le Quiz!</h3>
                            <p>Vous pouvez relir vos réponses avant de visualiser votre résultat.</p>
                            <button className="button" onClick={() => this.sendChoices()}>Soumettre mes réponses</button>

                        </div>

                    </div>
                </div>
                <div className="padding-vertical-2">
                    {this.props.sendChoiceLoader &&
                    <div className="loader"></div>
                    }
                </div>
            </div>
        );
    }
}

const EndSection = section(EndSectionContent);

export default EndSection;
