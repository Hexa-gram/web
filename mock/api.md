## 设备列表 1000
```
request:
{
	"cmd_id": 1000,
	"page_index": 0,					//当前页索引
	"page_count": 10,					//每页个数
	"sort": {
		"key": "",
		"order": "ascend"
	},
	"search": []						//搜索字段没想好
}

response:
{
	"cmd_id": 1000,
	"page_index": 0,				//第一页
	"page_count": 10,				//每页数量
	"total": 100,					//设备总数
	"search": [],					//搜索内容原路返回
	"overview": {
		"hacker_count": 30,	  //捕获攻击者总数
		"online": 3,					//在线数
		"high_risk": 1,			  //高危
		"medium_risk": 2,				//中危
		"low_risk": 5,					//低位
		"today_inc": 4,					//今日新增
		"yesterday_inc": 4,				//昨日新增
		"week_inc": 4,					//本周新增
		"month_inc": 4,					//本月新增
		"sample_capacity": 1024000,		//样本容量 以字节为单位,自行换算
	},
	"devices": [{
		"uuid": "XS92-X029S-X029-KOSM",						//设备全局唯一
		"public_ip": "1.2.3.4",								//公网ip
		"private_ip": "192.168.1.1",						//内网ip
		"mac_addr": "00:00:00:00:AA:CC",						//MAC地址
		"hostname": "xxxx",									//计算机名
		"user": "xxxxx",									//用户名
		"os": "Windows 10 Pro",								//操作系统
		"last_conn_ts": 14029293929,						//最后上线时间
		"online": false,									//是否在线
		"qq_list": ["qqhao1", "qqhao2"],					//qq号
		"wechat_list": ["weixinhao1", "weixinhao2"],		//微信号
		"risk_level": 99									//威胁等级
	}]
}
```

## 查看登录记录 1001
```
request:
{
	"cmd_id": 1001,
	"page_index": 0,					//当前页索引
	"page_count": 10,					//每页个数
	"sort": {
		"key": "",
		"order": "ascend"
	},
	"search": []						//搜索字段没想好
}

response:
{
	"cmd_id": 1001,
	"page_index": 0,				//第一页
	"page_count": 10,				//每页数量
	"total": 100,						//记录总数
	"search": [],					//搜索内容原路返回
	"records": [{
		_id: 5dbd61adea6ee068db2ff273,
		uuid: null,
		action: 1,
		mac_addr: '00:0C:29:CF:68:F4',
		hostname: 'Win7x64-PC',
		distro: 'Windows 7 Ultimate',
		platform: 'Windows-7-6.1.7601-SP1',
		user: 'Win7x64',
		os: 'windows',
		version: 'v0.2',
		public_ip: '123.123.123.123',
		private_ip: '192.168.1.1',
		ts: 2019-11-02T10:59:57.448Z,
		__v: 0
	}]
}
```

## 查看敏感文件列表 1010
```
request
{
	"cmd_id": 1010,
	"device_uuid": "xxxx",
	"page_index": 0,					//当前页索引
	"page_count": 10,					//每页个数
	"sort": {
		"key": "",
		"order": "ascend"
	}
}

response
{
	cmd_id: 1010,
	page_index: 0,
	page_count: 10,
	total: 100,							//记录总数
	records: [{
		_id: 5dbd61b2ea6ee068db2ff274,
		sha256: '50b4fba0c3986f70b05cb3e16d734e9c147af32f7c8dfb23cc7e3c8e5457f209',
		date: 2019-11-02T11:00:02.048Z,
		device_uuid: null,
		downloads: 0,
		file_name: 'xxxxxx.docx',
		file_path: 'c:\\asdadsad\\xxxxxx.docx',
		size: 347915,
		upload_ts: 1572692400
	}]
}
```

## 下载敏感文件 1011
```
request
{
	"cmd_id": 1011,
	"device_uuid": "id of device",
	"sha256": "sha256"
}

response
{
	cmd_id: 1011,
	port: 8080,
	uri: "path"
}
```

## 删除敏感文件 1012
```
request
{
	"cmd_id": 1012,
	"device_uuid": "id of device",
	"sha256": "sha256"
}

response
{
	cmd_id: 1012,
	error_code: 0
}
```

## 查看敏感截图列表 1020
```
request
{
	"cmd_id": 1020,
	"page_index": 0,					//当前页索引
	"page_count": 10,					//每页个数,
	"sort": {
		"key": "",
		"order": "ascend"
	}
}

response
{
	cmd_id: 1020,
	page_index: 0,
	page_count: 10,
	total: 100,						//记录总数
	records: [{
		_id: 5dbd61b2ea6ee068db2ff274,
		sha256: '50b4fba0c3986f70b05cb3e16d734e9c147af32f7c8dfb23cc7e3c8e5457f209',
		date: 2019-11-02T11:00:02.048Z,
		device_uuid: null,
		downloads: 0,
		name: '20191102190000',
		size: 347915,
		upload_ts: 1572692400
	}]
}
```

## 修改截图威胁等级 1021
```
request
{
	"cmd_id": 1021,
	"device_uuid": "id of device",
	"sha256": "sha256",
	"risk_level": 99					// 0 - 99 整形
}

response
{
	cmd_id: 1021,
	error_code: 0
}
```

## 删除敏感截图 1022
```
request
{
	"cmd_id": 1022,
	"device_uuid": "id of device",
	"sha256": "sha256"
}

response
{
	cmd_id: 1022,
	error_code: 0
}
```

## 基本信息Title 1030
## 系统概况、文件系统、性能监控、终端、远程桌面、样本分析都需要，显示在页面的上方
```
request:
{
	"cmd_id": 1030,
	"uuid": "XS92-X029S-X029-KOSM",					//设备全局唯一id
}

response:
{
	cmd_id: 1030,
	distro: "Windows 7",
	hostname: "xxxxx",
	user: "xxxxx",
	public_ip: "1.2.3.4",
	private_ip: "192.168.1.1"
}
```

## 系统概况
```
request:
{
	"cmd_id": 2002,
	"uuid": "XS92-X029S-X029-KOSM",					//设备全局唯一id
}

response:
{
	"cmd_id": 2002,
	"hardware": {
		"cpu": ["Intel Core i7"],								
		"disk": ["xxxxx"],
		"motherboard": "xxxx",
		"graphics_card": ["XXXX"],
		"network_card": ["xxxxx"]
	},
	"system": {
		"virtualization": "XXXX",					//虚拟化
		"platform": "XXXXX",						//平台
		"distro": "xxxxx",							//发行版
		"architecture": "AMD64",					//架构
		"uac_level": "Level 0 of 3",				//uac等级,
		"integrity": "High",						//完整性,
		"boot_time": "xxxx",						//开机时间
		"local_time": "xxxx"						//本地时间
	},
	"usage": {
		"cpu": 50, 									//百分比
		"memory": 50,								//百分比
		"disk": [{
			"mountpoint" : "C:",
			"percent" : 60							//百分比
		},{
			"mountpoint" : "D:",
			"percent" : 30							//百分比
		}]
	}
}
```
