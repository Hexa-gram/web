import Header from '@/components/Header';
import routes from '@config/router.config.js'


function BasicLayout(props) {
  const osPaths = routes[1].routes[1].routes;//对应 router.config.js/os所有路由

  const tabs = [];
  osPaths.forEach(it => {
    if (it.redirect) return;  //重定向和设置了hideInMenu属性的不展示
    if (it.hideInMenu) return;
    tabs.push({
      name: it.title,
      path: it.path
    })
  })

  return (
    <div>
      <Header tabs={tabs} ></Header>
      {props.children}
    </div>
  );
}

export default BasicLayout;
