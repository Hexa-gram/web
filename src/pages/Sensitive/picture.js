import React, { Component } from 'react';
import { connect } from 'dva';
import { Select, Pagination } from 'antd';
import Item from './components/picItem';
import styles from './picture.less';


@connect(({ picture, loading }) => ({
  picture,
  loading: loading.models.deviceList,
}))

class Picture extends Component {

  state = {
    page: 1,
  }

  componentDidMount() {
    this.refresh()
  }

  refresh() {
    console.log('fetchData')
    const { dispatch } = this.props;
    dispatch({
      type: 'picture/getData',
      payload: {
        cmd_id: 1020,
        // device_uuid: getSession('uuid'),
        page_index: this.state.page - 1,
        page_count: 12
      }
    })
  }


  sortPic(val) {
    val = val.split('_');
    console.log(`time selected ${val}`);
  }

  onChange(val) {
    console.log(val)
    this.setState({
      page: val
    })
  }

  render() {
    const { page } = this.state;
    const { records = [], total } = this.props.picture;

    return (
      <div className={styles.picture}>
        <div className={styles.container}>
          <div>
            <Select placeholder="排序规则" style={{ width: 160, margin: '0 20px 9px 16px' }} onChange={(val) => { this.sortPic(val) }}>
              <Select.Option value="risk_ascend">按危险等级正序</Select.Option>
              <Select.Option value="risk_descend">按危险等级倒序</Select.Option>
              <Select.Option value="time_ascend">按时间正序</Select.Option>
              <Select.Option value="time_descend">按时间倒序</Select.Option>
            </Select>
            <div className={styles.dashLine}></div>
          </div>
          <div className={styles.main}>
            {records.map(it => <Item picData={it} key={it._id} refresh={() => { this.refresh() }} dispatch={this.props.dispatch} />)}
          </div>
          <Pagination
            current={page}
            total={total}
            className={styles.pagination}
            onChange={(val) => { this.onChange(val) }}
          />
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

export default connect(mapStateToProps)(Picture); 
