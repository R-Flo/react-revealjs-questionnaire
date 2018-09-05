import React, { Component } from 'react';


export default class Slide extends React.PureComponent {

    render() {
        const { children } = this.props;

        var childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { ...this.props }));

        return (
            <div className="slides">
                {childrenWithProps}
            </div>
        );
    }
};
