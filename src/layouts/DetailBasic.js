import { useEffect } from 'react';
import { connect } from 'dva';
import { getSession } from '@/utils/utils'
import Header from '@/components/Header';
import routes from '@config/router.config.js'


function DetailBasicLayout(props) {
  const osPaths = routes[1].routes[2].routes; //对应 router.config.js/detail所有路由
  const tabs = [];
  osPaths.forEach(it => {
    if (it.redirect) return;  //重定向和设置了hideInMenu属性的不展示
    if (it.hideInMenu) return;
    tabs.push({
      name: it.title,
      path: it.path
    })
  })

  useEffect(() => {
    props.dispatch({
      type: 'base/titleInfo',
      payload: {
        "cmd_id": 1030,
        "uuid": getSession('uuid'),					//设备全局唯一id
      }
    })
  }, [props]);


  return (
    <div>
      <Header tabs={tabs} ></Header>
      {props.children}
    </div>
  );
}

function mapStateToProps(state) {
  // console.log('overview', state.overview)
  // const { bannerData, listData } = state.overview;
  return {
    // bannerData: bannerData,
    // listData: listData
  };
}

export default connect(mapStateToProps)(DetailBasicLayout);
