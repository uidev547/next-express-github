import React, { Component } from 'react';
import { Modal, Header, Button, List } from 'semantic-ui-react';

export class LoginWindow extends Component {
    static async getInitialProps(props) {
        return {
            user: props.req.user
        };
    }
    constructor(props){
        super(props);
        if(typeof window === 'object') {
            window.parentCallback(this.props.user);
        }
    }
    render(){
        return null
    }
}

export default LoginWindow;