


import React, { Component } from 'react';
import { connect } from 'dva';
import { getSession } from '@/utils/utils'
import styles from './index.less';
import { Progress, Tooltip } from 'antd'


@connect(({ base, overview, loading }) => ({
  base,
  overview,
  loading: loading.models.overview,
}))

class Overview extends Component {

  deviceDetail = {
    "cmd_id": 102,
    "hardware": {
      "cpu": ["Intel Core i7"],
      "disk": ["xxxxx", "xxxxxxx"],
      "motherboard": "xxxx",
      "graphics_card": ["xxxxx", "xxxxxxx"],
      "network_card": ["xxxxx", "xxxxxxx"]
    },
    "system": {
      "virtualization": "XXXX",				//虚拟化
      "platform": "XXXXX",						//平台
      "distro": "xxxxx",							//发行版
      "architecture": "AMD64",				//架构
      "uac_level": "Level 0 of 3",		//uac等级,
      "integrity": "High",						//完整性,
      "boot_time": "xxxx",						//开机时间
      "local_time": "xxxx"						//本地时间
    },
    "usage": {
      "cpu": 50, 									    //百分比
      "memory": 30,								    //百分比
      "disk": [{
        "mountpoint": "C:",
        "percent": 60							    //百分比
      }, {
        "mountpoint": "D:",
        "percent": 30							    //百分比
      }]
    }
  }

  baseInfo = {
    "cmd_id": 101,
    "user": "xxxxx",								//用户名
    "public_ip": "1.2.3.4",							//公网ip
    "private_ip": "192.168.1.1",					//内网ip
    "hostname": "xxxx",
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'overview/getData',
      payload: {
        "cmd_id": 2002,
        "uuid": getSession('uuid'),					//设备全局唯一id
      }
    })
  }


  render() {
    const { hardware, system, usage } = this.deviceDetail;
    const { user, public_ip, private_ip, hostname } = this.baseInfo;
    console.log('------------------------');
    console.log(this.props)
    console.log('------------------------');

    return (
      <div className={styles.overview}>
        <div className={styles.item}>
          {/* 1 */}
          <div>
            <div className={styles.title}>基本信息</div>
            <div className={styles.row}>
              <div className={styles.name}>用户名:</div>
              <div className={styles.value}>{user}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>计算机名:</div>
              <div className={styles.value}>{hostname}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>公网IP:</div>
              <div className={styles.value}>{public_ip}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>内网IP:</div>
              <div className={styles.value}>{private_ip}</div>
            </div>
          </div>
          {/* 2 */}
          <div>
            <div className={styles.title}>硬件信息</div>
            <div className={styles.row}>
              <div className={styles.name}>处理器:</div>
              <div className={styles.value}>
                {hardware.cpu.map((it, key) => <div key={key}>{it}</div>)}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>硬盘:</div>
              <div className={styles.value}>
                {hardware.disk.map((it, key) => <div key={key}>{it}</div>)}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>主板:</div>
              <div className={styles.value}>{hardware.motherboard}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>显卡:</div>
              <div className={styles.value}>
                {hardware.graphics_card.map((it, key) => <div key={key}>{it}</div>)}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>网卡:</div>
              <div className={styles.value}>
                {hardware.network_card.map((it, key) => <div key={key}>{it}</div>)}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          {/* 3 */}
          <div>
            <div className={styles.title}>系统信息</div>
            <div className={styles.row}>
              <div className={styles.name}>虚拟化:</div>
              <div className={styles.value}>{system.virtualization}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>平台:</div>
              <div className={styles.value}>{system.platform}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>发行版:</div>
              <div className={styles.value}>{system.distro}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>架构:</div>
              <div className={styles.value}>{system.architecture}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>UAC等级:</div>
              <div className={styles.value}>{system.uac_level}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>完整性:</div>
              <div className={styles.value}>{system.integrity}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>开机时间:</div>
              <div className={styles.value}>{system.boot_time}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>本地时间:</div>
              <div className={styles.value}>{system.local_time}</div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          {/* 4 */}
          <div>
            <div className={styles.title}>处理器使用率</div>
            <div style={{ padding: '80px' }}>
              <Tooltip title={usage.cpu}>
                <Progress percent={usage.cpu} type="circle" status="active" />
              </Tooltip>
            </div>
          </div>
          {/* 5 */}
          <div>
            <div className={styles.title}>内存使用率</div>
            <div style={{ padding: '0 39px 60px 18px' }}>
              <Progress percent={usage.memory} status="active" />
            </div>
          </div>
          {/* 6 */}
          <div>
            <div className={styles.title}>硬盘使用率</div>
            <div style={{ padding: '0 39px 60px 18px' }}>
              <Progress percent={usage.memory} status="active" />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Overview;