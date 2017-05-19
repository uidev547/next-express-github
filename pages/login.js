import Head from 'next/head';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Modal, Header, Button, List } from 'semantic-ui-react';
import * as userActions from '../app/actions/user';
import store from '../app/store/configureStore';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import LoginComponent from '../app/components/Login';


export class Login extends Component {
    static async getInitialProps ({store, isServer, req}) {
        if(isServer) {
            store.dispatch(userActions.setUser(req.user));
            await store.dispatch(userActions.getApiData());
        } else {
            store.dispatch(userActions.getApiData());
        }
        return { 
            isServer: isServer
        };
    }
    constructor(props) {
        super(props);
    }
    
    render() {
        return (<LoginComponent 
            userActions={this.props.userActions} 
            isServer={this.props.isServer} 
            userData={this.props.userData} 
        />)
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

const mapStateToProps = (state) => ({ 
    userData: state.userData
});

export default withRedux(store, mapStateToProps, mapDispatchToProps )(Login);
