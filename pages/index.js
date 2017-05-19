import React from 'react';
import { bindActionCreators } from 'redux';
import * as userActions from '../app/actions/user';
import withRedux from 'next-redux-wrapper';
import store from '../app/store/configureStore';
import IndexComponent from '../app/components/Index';

class Index extends React.Component {
  static getInitialProps ({store, isServer, req}) {
      if(isServer) {
        store.dispatch(userActions.setUser(req.user));
      }
      return { 
        isServer: isServer
      };
  }
  constructor(props) {
    super(props);
  }
  render () {
    return (<IndexComponent isServer={this.props.isServer} user={this.props.user} />);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

const mapStateToProps = (state) => ({ 
    user: state.userData.user
});

export default withRedux(store, mapStateToProps, mapDispatchToProps )(Index);
