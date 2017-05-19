import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestRedux extends Component {
  constructor(props) {
    super(props);
    console.log('called....Testredux......');
  }
  render () {
    const { index } = this.props
    return (
      <div>
        testPage -
        {index.testdata}
        hi
        -
        {index.anothertestdata}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
    index: state.index
});

export default connect(mapStateToProps)(TestRedux)
