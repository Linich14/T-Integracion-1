import React, { Component } from 'react';

class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <img src={this.props.url} width='150px' height='183px' alt="display image" />

        );
    }
}

export default ImageComponent;