

import { connect } from 'dva';
import React, { Component } from 'react';
// import router from 'umi/router';
// import styles from './index.less';
// import classNames from 'classnames/bind';


// const cx = classNames.bind(styles);
class DeviceList extends Component {

  state = {

  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData(params = {}) {
    // const { dispatch } = this.props;

  }


  render() {
    // console.log('props', this.props);

    return (
      <div>
        loginRecord
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('overview', state.overview)
  // const { bannerData, listData } = state.overview;
  return {
    // bannerData: bannerData,
    // listData: listData
  };
}

export default connect(mapStateToProps)(DeviceList); 