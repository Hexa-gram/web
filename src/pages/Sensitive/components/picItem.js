import React, { Component, Fragment } from 'react';
import { Icon, Popover, Input, message, Modal } from 'antd';
import { Format } from '@/utils/utils'
import RiskSpan from '@/components/RiskNum';
import styles from './picItem.less';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

class PicItem extends Component {

  state = {
    maskVisible: false,
    picVisible: false,
    confirmLoading: false,
    menuVisible: false,
    risk_Level: '',
    randomId: Math.random().toString(36).substr(2)
  }

  handleMenuBar(val) {// 与tooltip一起显示
    this.setState({ menuVisible: val })
  }

  showMenu() {// 右键模拟点击效果
    window.document.getElementById(this.state.randomId).click();
  }

  // 放大
  showBig() {
    this.setState({
      picVisible: true,
    });
  }

  hidePicModal() {
    this.setState({
      picVisible: false,
    });
  }


  //修改
  showModal() {
    this.setState({
      maskVisible: true,
      risk_Level: ''
    });
  };

  handleOk() {
    if (!(this.state.risk_Level && this.state.risk_Level > 0 && this.state.risk_Level <= 100)) {
      message.error('请输入一个正确的值');
      return;
    }
    this.setState({
      confirmLoading: true,
    });

    // send dispatch
    this.props.dispatch({
      type: 'picture/setRisk',
      payload: {

      }
    }).then(res => {
      this.setState({
        maskVisible: false,
        confirmLoading: false,
      });
      this.props.refresh()
    })
  };

  handleCancel() {
    console.log('Clicked cancel button');
    this.setState({
      maskVisible: false,
    });
  };


  //删除
  delPic() {
    const that = this;
    Modal.confirm({
      title: '确认要删除吗?',
      content: <Fragment><div>2019-10-28 13:34:45</div><div>等级 <RiskSpan risk={this.props.picData.risk_level} /></div></Fragment>,
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        // send dispatch
        console.log('that', that);
        that.props.dispatch({
          type: 'picture/delPic',
          payload: {
            "cmd_id": 1022,
            "device_uuid": that.props.picData.device_uuid,
            "sha256": that.props.picData.sha256
          }
        }).then(res => {
          if (res) that.props.refresh();
          else message.error('删除失败');
        })
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  }


  render() {
    const { picData } = this.props;
    const { maskVisible, picVisible, confirmLoading, risk_Level, menuVisible } = this.state;
    // 图片
    const IMG = 'data:image/png;base64,' + new Buffer(picData.content.data).toString('base64');

    return (
      <div className={cx(styles.picItem, menuVisible ? styles.visible : '')} onContextMenu={(e) => { e.preventDefault(); this.showMenu() }}>
        <div className={styles.pic}
          style={{ backgroundImage: `url('${IMG}')` }}
        >
          <div className={styles.riseLevel}>
            威胁等级：<RiskSpan risk={picData.risk_level} />
          </div>
        </div>
        <div className={styles.time}>{Format('yyyy-MM-dd hh:mm:ss', picData.create_at)}</div>
        <div className={styles.menuBtn} onClick={() => { this.showMenu() }} >
          <Popover
            placement="bottomRight"
            trigger="click"
            onVisibleChange={(visible) => { this.handleMenuBar(visible) }}
            content={
              <Fragment>
                <div onClick={() => { this.showBig() }} className={styles.actionBtn} ><Icon type="zoom-in" />放大</div>
                <div onClick={() => { this.showModal() }} className={styles.actionBtn} ><Icon type="form" />修改威胁等级</div>
                <div onClick={() => { this.delPic() }} className={styles.actionBtn, styles.deleteIcon} ><Icon type="delete" />删除</div>
              </Fragment>
            }
          >
            <Icon type="compass" theme="twoTone" id={this.state.randomId} />
          </Popover>
        </div>
        <Modal
          title="修改威胁等级"
          visible={maskVisible}
          onOk={() => { this.handleOk() }}
          confirmLoading={confirmLoading}
          onCancel={() => { this.handleCancel() }}
          okText="确定"
          cancelText="取消"
        >
          <p>威胁等级：<RiskSpan risk={picData.risk_level} /></p>
          <p>重新输入：
            <Input placeholder="请输入"
              style={{ width: 160 }} value={risk_Level}
              onChange={(e) => this.setState({ risk_Level: e.target.value })} />
          </p>
        </Modal>

        <Modal
          visible={picVisible}
          onCancel={() => { this.hidePicModal() }}
          width={980}
          bodyStyle={{ padding: 10 }}
          closable={false}
          centered={true}
          footer={null}
        >
          <div className={styles.bigPic} style={{ backgroundImage: `url('${IMG}')` }}></div>
        </Modal>
      </div>
    )
  }

}


export default PicItem;
