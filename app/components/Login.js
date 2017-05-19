import Head from 'next/head';
import React, { Component } from 'react';
import { Modal, Header, Button, List } from 'semantic-ui-react';
import Router from 'next/router';
import Link from 'next/link';


export class Login extends Component {
    constructor(props) {
        super(props);
        this.loginWindow = this.loginWindow.bind(this);       
    }
    loginWindow(e){
        e.preventDefault();
        const left = window.innerWidth/2 - 200;
        const top = window.innerHeight/2 - 200;
        const loginWindow = window.open("/auth/github?redirectTo=/login-window", "loginWindow", `width=400,height=400,left=${left},top=${top}`);
        const selfWindow = window;
        loginWindow.parentCallback = (data) => {
            this.props.userActions.setUser(data);
            loginWindow.close();
        }
    }

    render() {
        const { isServer } = this.props;
        const { user, lazydata } = this.props.userData;
        return (<div className="login-component">
            <p>isServer  - {isServer.toString()}</p>
            <p>lazydata - {lazydata}</p>
            {
                user ? 
                <h3>{user.name} - {user.authType}</h3> :
                null
            }    
            Login With: 
            <hr />
            <a href="/auth/github?redirectTo=/" className="ui github button" onClick={this.loginWindow}>
                <i className="github icon"></i>
                Github Loign in same window
            </a>
            <a href="/auth/github?redirectTo=/" className="ui github button">
                <i className="github icon"></i>
                Github and redirect Index
            </a>
            <a href="/auth/github?redirectTo=/dashboard" className="ui github button">
                <i className="github icon"></i>
                Github and dashboard
            </a>
            <hr />
            <a href="/auth/google" className="ui google plus button">
                <i className="google icon"></i>
                Google
            </a>
            <hr />
            <a href="/auth/twitter" className="ui twitter button">
                <i className="twitter icon"></i>
                Twitter
            </a>
            <hr />
            <a href="/auth/facebook" className="ui facebook button">
                <i className="facebook icon"></i>
                facebook
            </a>
            <hr />
            <a href="/auth/linkedin" className="ui linkedin button">
                <i className="linkedin icon"></i>
                linkedin
            </a>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>);
    }
}

export default Login;