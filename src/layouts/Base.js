

import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';


class Base extends Component {

  state = {
    flag: false
  };

  componentDidMount() {

    const { dispatch } = this.props;
    dispatch({
      type: 'base/getIpAndPort',
    }).then(res => {
      if (!res) {
        this.setState({ flag: false }, () => {
          router.push('/login')
        })
      } else {
        this.setState({ flag: true })
      }
    });
  }

  render() {
    // console.log('props', this.props);

    return (
      <div>
        {this.state.flag ? this.props.children : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('base', state.base)
  return {};
}

export default connect(mapStateToProps)(Base); 