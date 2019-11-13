
## 进入目录 2010
```
request: 
{
    cmd_id: 2010,
    path: "C:\\Python27-x86"
}

response:
{
    'files': [{
        'uid': 0,
        'permission': '-rw-rw-rw-',
        'ts': '2019-03-04 01:43:20',
        'name': 'LICENSE.txt',
        'type': 'File',
        'size': '37.7 KiB'
    }, {
        'uid': 0,
        'permission': '-rw-rw-rw-',
        'ts': '2019-03-04 01:43:06',
        'name': 'NEWS.txt',
        'type': 'File',
        'size': '496.5 KiB'
    }],
    'dirs': [{
        'uid': 0,
        'permission': 'drwxrwxrwx',
        'ts': '2019-11-11 16:48:04',
        'name': 'DLLs',
        'type': 'Dir',
        'size': '4.0 KiB'
    }, {
        'uid': 0,
        'permission': 'drwxrwxrwx',
        'ts': '2019-11-11 16:48:04',
        'name': 'Doc',
        'type': 'Dir',
        'size': '0.0 B'
    }],
    'cmd_id': 2010,
    'error_code': 0
    'path': 'C:\\\u6d4b\u8bd5\u76ee\u5f55'            //浏览器需要记住当前路径
}
```

## 下载文件 2011
```
request:
{
    cmd_id: 2011,
    items: ["readme.txt"]
}

response:
{
    'cmd_id': 2011,
    'url': '/download?id=XXXXXXX',
    'error_code': 0
}
```

## 新建文件夹 2012
```
request:
{
    cmd_id: 2012,
    name: "wenjianjiamingzi"
}

response:
{
    'cmd_id': 2012,
    'name': "wenjianjiamingzi",
    'error_code': 0
}
```

## 删除文件或文件夹 2013
```
request:
{
    cmd_id: 2013,
    items: ["wenjian2", "mulu1"]
}

response:
{
    'cmd_id': 2013,
    items: ["wenjian2", "mulu1"],
    'error_code': 0
}
```

## 上传文件 2014
```
request:
{
    cmd_id: 2014,
    datalen: "文件长度",
	data: [ascii],
	sended_len: "已发送长度",
	path: "客户端需要上传的目录路径",
	file_name: "文件名称"
}

response:
{
    'cmd_id': 2014,
    'file_name': "xxxxx"
    'error_code': 0
}
```

## 文件重命名 2015
```
request:
{
    cmd_id: 2015,
    old_name: "oldname",
	new_name: "newname"
}

response:
{
    'cmd_id': 2015,
    'error_code': 0
}
```

## 浏览目录树 2016
```
request: 
{
    cmd_id: 2016,
    path: "C:\\Python27-x86"
}

response:
{
    'dirs': [{
        'path': 'C:\\Python27-x86\\DLLs',
        'have_dir': False
    }, {
        'path': 'C:\\Python27-x86\\Doc',
        'have_dir': False
    }, {
        'path': 'C:\\Python27-x86\\include',
        'have_dir': False
    }, {
        'path': 'C:\\Python27-x86\\Lib',
        'have_dir': True
    }, {
        'path': 'C:\\Python27-x86\\libs',
        'have_dir': False
    }, {
        'path': 'C:\\Python27-x86\\Scripts',
        'have_dir': False
    }, {
        'path': 'C:\\Python27-x86\\tcl',
        'have_dir': True
    }, {
        'path': 'C:\\Python27-x86\\Tools',
        'have_dir': True
    }],
    'cmd_id': 2016,
    'error_code': 0
}
```

## 文件执行 2019
```
request:
{
    cmd_id: 2019,
    name: "文件名称"
}

response:
{
    'cmd_id': 2019,
    'error_code': 0,
    'name': "文件名称"
}
```

## 文件压缩 2020
```
request:
{
    cmd_id: 2020,
    'items': ['NEWS.txt', '哈哈.txt'],
    'name': 'zzzz.zip'
}

response:
{
    'items': ['NEWS.txt', '哈哈.txt'],
    'error_code': '',
    'cmd_id': 2020,
    'name': 'zzzz.zip'
}
```

## 文件解压缩 2021
```
request:
{
    cmd_id: 2021,
    'name': 'zzzz.zip'
}

response:
{
    'error_code': '',
    'cmd_id': 2021,
    'name': 'zzzz.zip'
}
```

2018	filesystem/chmod.py     暂时不搞