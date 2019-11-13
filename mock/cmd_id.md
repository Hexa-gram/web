
## 调用号对应
```
浏览器：
	1000	查看设备列表
	1001	查看登录记录
	1002	搜索设备

	1010	查看敏感文件列表
	1011	下载敏感文件
	1012	删除文件
	
	1020	查看截图列表
	1021	修改截图威胁等级
	1022	删除截图
	
	1030	获得设备title
客户端：
	2000	公钥交换
	2001	basic/get_info.py
	2002	basic/overview.py
	2003	basic/system_status.py
	
	2010	filesystem/open_dir.py
	2011	filesystem/download_files.py
	2012	filesystem/mkdir.py
	2013	filesystem/delete_file_or_folder.py
	2014	filesystem/upload.py
	2015	filesystem/rename.py
	2016	filesystem/list_directory.py
	2017	filesystem/paste.py
	2018	filesystem/chmod.py
	2019	filesystem/execute.py	
	2020	filesystem/compress.py
	2021	filesystem/decompress.py

	2030	status/service_status.py
	2031	status/process_detail.py
	2032	status/network_status.py
	2033	status/cpu_status.py
	2034	status/ram_status.py
	2035	status/disk_status.py
	2036	status/user_status.py
	
	2040	terminal/new_pty.py
	2041	terminal/write_pty.py
	2042	terminal/resize_pty.py
	2043	terminal/kill_pty.py

	2050	vnc/init_vnc.py

	2060	sample/file_run.py	#ask client to start file capture
	2061 for query whether need to upload file
	2062	sample/file_upload.py
	2063	ask client to start screenshot capture
	2064	screenshot upload
	2065	adjust screenshot param
```

## 错误代码
```
0: 		成功
-1: 	账号密码错误
-2:		未登录
-3:		文件ID错误
-4:		文件未找到
-5:		截图未找到
-6:		参数错误
-10:	客户端发生错误
```