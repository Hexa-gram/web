import React, { useState, useEffect } from 'react';
import withRouter from 'umi/withRouter';
import styles from './index.less';
import classNames from 'classnames/bind';
import router from "umi/router";


const cx = classNames.bind(styles);
function Header(props) {
  const path = window.location.pathname;
  const [active, setActive] = useState(
    props.tabs && props.tabs.filter(it => new RegExp(it.path).test(path))[0].name
  );

  useEffect(() => {
    setActive(props.tabs.filter(it => new RegExp(it.path).test(props.location.pathname))[0].name);
  }, [props.location.pathname, props.tabs]);

  function changeBar(tab) {
    setActive(tab.name);
    router.push(tab.path);
  }

  function goIndex() {
    router.push('/os/devicelist');
  }

  return (
    <div>
      <div className={styles.header}>

        <div className={styles.logo} onClick={() => { goIndex() }}>HULK</div>
        {props.tabs.map(it =>
          <div
            key={it.path}
            className={cx(styles.tabs, active === it.name ? styles.active : '')}
            onClick={() => { changeBar(it) }}
          >
            {it.name}
          </div>
        )}
      </div>
    </div >
  );
}
export default withRouter(Header);

