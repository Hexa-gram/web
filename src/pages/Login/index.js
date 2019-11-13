

import { connect } from 'dva';
import React, { Component } from 'react';
import router from 'umi/router';
import { Input, Icon, Button, message } from 'antd';
import styles from './index.less';
// import classNames from 'classnames/bind';


// const cx = classNames.bind(styles);
class Login extends Component {

  state = {
    userName: '', // SCSRJZD@163.com
    passWord: '', // 9SS902NS9SHJ37DX
    veriCode: ''
  };

  componentDidMount() {
    // this.fetchData();
  }

  fetchData(params = {}) {
    // const { dispatch } = this.props;

  }

  checkLogin() {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/getLogin',
      payload: {
        userName: this.state.userName,
        passWord: this.state.passWord
      }
    }).then(res => {
      switch (res.error_code) {
        case 0:
          router.push('/');
          break;
        case -1:
          message.error('账号或密码错误');
          break;
        case -2:
          message.error('sessionID错误');
          break;
        default: break;
      }
    });

  }

  render() {
    // console.log('props', this.props);
    const { userName, passWord, veriCode } = this.state;

    return (
      <div className={styles.login}>
        <table></table>
        <div className={styles.main}>
          <div className={styles.title}>
            <span className={styles.leftLine}></span>
            <div>溯源反制系统<i></i></div>
            <span className={styles.rightLine}></span>
          </div>
          <Input
            className={styles.input}
            placeholder="账号"
            prefix={<Icon type="user" style={{ color: 'rgba(255,255,255,1)' }} />}
            value={userName}
            onChange={e => this.setState({ userName: e.target.value })}
          />
          <Input.Password
            className={styles.input}
            placeholder="密码"
            prefix={<Icon type="lock" style={{ color: 'rgba(255,255,255,1)' }} />}
            value={passWord}
            onChange={e => this.setState({ passWord: e.target.value })}
          />
          <Input
            className={styles.input}
            placeholder="验证码"
            prefix={<Icon type="safety" style={{ color: 'rgba(255,255,255,1)' }} />}
            value={veriCode}
            onChange={e => this.setState({ veriCode: e.target.value })}
          />
          <Button
            type="primary" size="large" style={{ marginTop: 40 }} block
            onClick={() => { this.checkLogin() }}
          >立即登录</Button>
        </div>
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

export default connect(mapStateToProps)(Login); 