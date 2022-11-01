import React, { Component } from 'react';

class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <img src={this.props.url}  alt="cargando imagen..." />

        );
    }
}

export default ImageComponent;