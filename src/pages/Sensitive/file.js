import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Button, Tooltip, Modal, message } from 'antd';
import { Format, bytesToSize, getSession } from '@/utils/utils';
import RiskSpan from '@/components/RiskNum';
import styles from './file.less';


@connect(({ file, loading }) => ({
  file,
  loading: loading.models.deviceList,
}))

class Sensitive extends Component {

  state = {
    selectedRowKeys: [],
    loading: false,
    page: 1
  }

  columns = [{
    title: '文件名称',
    dataIndex: 'file_name',
    sorter: (a, b) => a.file_name - b.file_name,
    render: val =>
      <Tooltip title={val}>
        <span className={styles.fileName}>{val}</span>
      </Tooltip>
  },
  {
    title: '路径',
    dataIndex: 'file_path',
    render: val =>
      <Tooltip title={val}>
        <span className={styles.filePath}>{val}</span>
      </Tooltip>
  },
  {
    title: '大小',
    dataIndex: 'size',
    sorter: (a, b) => parseFloat(b.sizeReal) - parseFloat(a.sizeReal),
    render: val => <span>{bytesToSize(val)}</span>
  },
  {
    title: '创建时间',
    dataIndex: 'create_at',
    sorter: (a, b) => +new Date(b.create_at) - +new Date(a.create_at),
    render: val => <span>{Format('yyyy-MM-dd hh:mm:ss', val)}</span>
  },
  {
    title: '最后修改时间',
    dataIndex: 'mtime',
    sorter: (a, b) => +new Date(b.mtime) - +new Date(a.mtime),
    render: val => <span>{Format('yyyy-MM-dd hh:mm:ss', val * 1000)}</span>
  },
  {
    title: '威胁等级',
    dataIndex: 'risk_level',
    sorter: (a, b) => a.risk_level - b.risk_level,
    render: val => <RiskSpan risk={val} />
  },
  {
    title: '操作',
    key: 'action',
    render: val =>
      <span>
        <Button icon="download" className={styles.action} onClick={() => { this.download(val) }} />
        <Button icon="delete" className={styles.action} onClick={() => { this.showDeleteConfirm(val) }} />
      </span>
  }];


  componentDidMount() {
    // this.props.getDevices();
    this.fetchData()
  }

  fetchData() {
    const { dispatch } = this.props;
    dispatch({
      type: 'file/getData',
      payload: {
        cmd_id: 1010,
        device_uuid: getSession('uuid'),
        page_index: this.state.page - 1,
        page_count: 10
      }
    })
  }
  // componentWillReceiveProps(nextProps) {
  // }


  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  actionAll(type) { // 下载||删除
    this.setState({ loading: true }, () => {
      if (type === 'download') {
        this.state.selectedRowKeys.forEach((item, key) => {
          this.download(this.props.file.records[key])
        })
      }
      if (type === 'delete') {
        this.state.selectedRowKeys.forEach((item, key) => {
          this.delete(this.props.file.records[key])
        })
      }
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    });
  }

  download(val) {
    console.log(val)
    // console.log(record.event)
    const { dispatch } = this.props;
    dispatch({
      type: 'file/download',
      payload: {
        cmd_id: 1011,
        device_uuid: val.device_uuid,
        sha256: val.sha256
      }
    })
  }

  showDeleteConfirm(val) {
    Modal.confirm({
      title: '确认要删除吗?',
      content: '删除后将无法恢复',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
        message.success('操作成功', 1);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const { records = [] } = this.props.file;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className={styles.container}>
        <div className={styles.maintable}>
          <Table
            rowSelection={rowSelection}
            columns={this.columns}
            dataSource={records}
            pagination={{  // 分页
              defaultPageSize: 12,
              style: { marginRight: 10 }
            }}
          />
          <div className={styles.download}>
            <Button
              className={styles.downloadBtn}
              type="primary"
              icon="download"
              onClick={() => { this.actionAll('download') }}
              disabled={!hasSelected}
              loading={loading}>下载</Button>
            <Button
              style={{ marginLeft: 20 }}
              className={styles.downloadBtn}
              type="primary"
              icon="delete"
              onClick={() => { this.actionAll('delete') }}
              disabled={!hasSelected}
              loading={loading}>删除</Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `已选择${selectedRowKeys.length}个文件` : ''}
            </span>

          </div>
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

export default connect(mapStateToProps)(Sensitive); 
