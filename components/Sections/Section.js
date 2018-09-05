import React, { Component } from 'react';


const section = (CompomentToSection) => {
    return class extends Component {
        render() {
            return (
                <section>
                    <CompomentToSection {...this.props} />
                </section>
            );
        }
    }
};


export default section;
