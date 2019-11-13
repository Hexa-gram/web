import React from 'react';


import style from './index.less';

interface State {
    systemName: string, //操作系统名称
    computerName: string,//计算机名称
    userName: string, // 用户名
    publicIp: string, // 公网IP地址
    innerIp: string // 内网IP地址
}

export default class File extends React.PureComponent<{}, State>{
    state: State = {
        systemName: "-----",
        computerName: "-----",
        userName: "-----",
        publicIp: "-----",
        innerIp: "-------"
    }
    render() {
        const state = this.state;
        return (
            <div className={style.wrap}>
                {/**基本信息栏 */}
                <ol className={style.baseInfo}>
                    <li>
                        <i className="icon system"></i>
                        <h3>操作系统:</h3>
                        <span>{state.systemName}</span>
                    </li>
                    <li>
                        <i className="icon computer"></i>
                        <h3>计算机名:</h3>
                        <span>{state.computerName}</span>
                    </li>
                    <li>
                        <i className="icon user"></i>
                        <h3>用户名:</h3>
                        <span>{state.userName}</span>
                    </li>
                    <li>
                        <i className="icon public-ip"></i>
                        <h3>公网IP:</h3>
                        <span>{state.publicIp}</span>
                    </li>
                    <li>
                        <i className="icon inner-ip"></i>
                        <h3>内网IP:</h3>
                        <span>{state.innerIp}</span>
                    </li>
                </ol>
                {/**操作栏 */}
                <ol className={style.actionBar}>
                    <li>
                        <i className="icon file"></i>
                        <span>新建文件夹</span>
                    </li>
                    <li>
                        <i className="icon cope"></i>
                        <span>复制</span>
                    </li>
                    <li>
                        <i className="icon cup"></i>
                        <span>剪切</span>
                    </li>
                    <li>
                        <i className="icon paste"></i>
                        <span>粘贴</span>
                    </li>
                    <li>
                        <i className="icon upload"></i>
                        <span>上传</span>
                    </li>
                    <li>
                        <i className="icon download"></i>
                        <span>下载</span>
                    </li>
                    <li>
                        <i className="icon delete"></i>
                        <span>删除</span>
                    </li>
                    <li>
                        <i className="icon rename"></i>
                        <span>重命名</span>
                    </li>
                    <li>
                        <i className="icon permission"></i>
                        <span>权限</span>
                    </li>
                    <li>
                        <i className="icon execute"></i>
                        <span>执行</span>
                    </li>
                    <li>
                        <i className="icon zip"></i>
                        <span>压缩</span>
                    </li>
                    <li>
                        <i className="icon unzip"></i>
                        <span>解压缩</span>
                    </li>
                </ol>
                <div className={style.content}>123</div>
            </div>
        )
    }
}