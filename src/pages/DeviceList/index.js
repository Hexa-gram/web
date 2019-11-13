

import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Icon, Input } from 'antd';
import router from 'umi/router';
import { bytesToSize, setSession } from '@/utils/utils';
import RiskSpan from '@/components/RiskNum';
import styles from './index.less';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
@connect(({ deviceList, loading }) => ({
  deviceList,
  loading: loading.models.deviceList,
}))

class DeviceList extends Component {

  state = {
    page: 1,
  }

  componentDidMount() {
    this.fetchData();
  }

  columns = [
    {
      title: 'No.',
      dataIndex: 'key',
    },
    {
      title: '操作系统',
      dataIndex: 'os',
      sorter: true
    },
    {
      title: '计算机名',
      dataIndex: 'hostname',
      sorter: (a, b) => a.hostname - b.hostname,
    },
    {
      title: '用户名',
      dataIndex: 'user',
      sorter: (a, b) => a.user - b.user,
    },
    {
      title: '公网IP',
      dataIndex: 'public_ip',
      sorter: (a, b) => a.public_ip - b.public_ip,
    },
    {
      title: '内网IP',
      dataIndex: 'private_ip',
      sorter: (a, b) => a.private_ip - b.private_ip,
    },
    {
      title: '物理地址',
      dataIndex: 'macaddr',
      sorter: (a, b) => a.macaddr - b.macaddr,
    },
    {
      title: 'QQ',
      key: 'qq',
      render: val => <div> {
        val.qq_list && val.qq_list.map(it => {
          return (<div key={it}>{it}</div>)
        })
      }</div>
    },
    {
      title: '微信',
      key: 'wx',
      render: val => <div> {
        val.wechat_list && val.wechat_list.map(it => {
          return (<div key={it}>{it}</div>)
        })
      }</div>
    },
    {
      title: '威胁等级',
      key: 'risk_level',
      sorter: (a, b) => a.risk_level - b.risk_level,
      render: val => <div onClick={() => { setSession('uuid', val.uuid); router.push('/detail/sensitive') }} ><RiskSpan risk={val.risk_level} /></div>
    },
    {
      title: '最后上线时间',
      dataIndex: 'last_conn_ts',
      sorter: (a, b) => a.last_conn_ts - b.last_conn_ts,
    },
    {
      title: '状态',
      key: 'online',
      sorter: (a, b) => b.online - a.online,
      render: val => <span className={cx(styles.status, val.online ? styles.online : '')}></span>
    },
    {
      title: '',
      key: 'action',
      width: 30,
      render: val => <span className={cx(styles.goDetail, val.online ? styles.allow : '')} onClick={() => { this.goDetail(val) }}>
        {val.online ? <Icon type="right-circle" /> : null}
      </span>
    },
  ];

  fetchData() {
    const { dispatch } = this.props;
    dispatch({
      type: 'deviceList/getData',
      payload: { cmd_id: 1000, page_index: this.state.page - 1, page_count: 10 }
    })
  }


  handleTableChange(pagination, filters, sorter) {
    console.log(pagination, filters, sorter)
    // const pager = { ...this.state.pagination };
    // pager.current = pagination.current;
    // this.setState({
    //   pagination: pager,
    // });
    // this.fetch({
    //   results: pagination.pageSize,
    //   page: pagination.current,
    //   sortField: sorter.field,
    //   sortOrder: sorter.order,
    //   ...filters,
    // });
  }


  goDetail(val) {
    console.log(val)
    setSession('uuid', val.uuid);
    val.online && router.push('/detail/index');
  }

  ChangePage(page) {
    console.log(page)
    this.setState({
      page: page
    }, () => { this.fetchData() })
  }



  render() {
    console.log('props', this.props);
    const { devices, overview = {}, total } = this.props.deviceList;

    const paginationProps = {
      // showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 10,
      onChange: (page) => { this.ChangePage(page) },
      current: this.state.page,
      total: total
    }
    return (
      <div className={styles.deviceList}>
        <div className={styles.main}>
          <div className={styles.search}>
            <Input
              prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)', fontSize: 18 }} />}
              size="large"
              placeholder="IP/用户名/用户名/操作系统/物理地址" />
          </div>
          <div className={styles.statistical}>
            <div className={styles.title}>攻击者概览</div>
            <div className={styles.dashLine}></div>
            <div className={styles.totalData}>
              <div>
                <div>捕获攻击总数：<span className={styles.bold}>{overview.hacker_count || 0}</span> 台</div>
                <div>今日新增：<span className={styles.bold}>{overview.today_inc || 0}</span> 台</div>
              </div>
              <div>
                <div>在线中：<span className={cx(styles.bold, styles.color1)}>{overview.online || 0}</span> 台</div>
                <div>昨日新增：<span className={styles.bold}>{overview.yesterday_inc || 0}</span> 台</div>
              </div>
              <div>
                <div>高危：<span className={cx(styles.bold, styles.color2)}>{overview.high_risk || 0}</span> 台</div>
                <div>本周新增：<span className={styles.bold}>{overview.week_inc || 0}</span> 台</div>
              </div>
              <div>
                <div>中危：<span className={cx(styles.bold, styles.color3)}>{overview.medium_risk || 0}</span> 台</div>
                <div>本月新增：<span className={styles.bold}>{overview.month_inc || 0}</span> 个</div>
              </div>
              <div>
                <div>低危：<span className={cx(styles.bold, styles.color4)}>{overview.low_risk || 0}</span> 台</div>
                <div>捕获样本容量：<span className={styles.bold}>{bytesToSize(overview.sample_capacity || 0)}</span></div>
              </div>
            </div>
          </div>
          <Table
            pagination={paginationProps}
            dataSource={devices}
            columns={this.columns}
            onChange={(pagination, filters, sorter) => { this.handleTableChange(pagination, filters, sorter) }}
          />
        </div>
      </div>
    )
  }
}


export default DeviceList; 