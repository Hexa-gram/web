import { Socket } from '@/utils/socket';


export function WSApi(params) {
  console.log('ws:params', params);
  const io = Socket.connection;
  console.log('io', io);
  if (!io) {
    console.log('socket is not connect')
    return;
  }
  return new Promise((resolve, reject) => {
    io.send(params);
    io.on('message', function (data) {
      let info = JSON.parse(data);
      if (!(info.cmd_id === 'connected')) {
        console.log(data)
        io.off('message');//重复绑定问题
        resolve(info);
      }
    });

  })
}

  // if (!window.connected) {
    //   //未建立连接需要open一次
    //   io.on('open', function () {
    //     console.log('--------- ws:open ---------');
    //     window.connected = true;
    //     io.send(params)
    //     io.on('close', function () {
    //       console.log('--------- ws:close ---------');
    //     });
    //   });
    // } else {
    // io.send(params);
    // }



  //   // Socket.send(JSON.stringify({ cmd_id: 1000, page_index: 2, page_count: 10 }), (data) => {
  //   //   console.log('1000', data)
  //   // })
  //   // Socket.send(JSON.stringify({ cmd_id: 1001, page_index: 0, page_count: 10 }), (data) => {
  //   //   console.log('1001', data)
  //   // })
  //   // Socket.send(JSON.stringify({ cmd_id: 1010, page_index: 0, page_count: 10, device_uuid: "b1b3f94a216ce956fe150a234094d2250c6f9ffb2f6e4b4c87d5cab76539efe6 " }), (data) => {
  //   //   console.log('1010', data)
  //   // })
  //   Socket.send(JSON.stringify({ cmd_id: 1011, device_uuid: "b1b3f94a216ce956fe150a234094d2250c6f9ffb2f6e4b4c87d5cab76539efe6 ", sha256: "c9772e80eda95e7141cc15dcaa5577cb2c4916820163789d23928e448343b4e4" }), (data) => {
  //     console.log('1011', data)
  //   })

  //   // Socket.send(JSON.stringify({ cmd_id: 1020, page_index: 2, page_count: 10 }), (data) => {
  //   //   console.log('1020', data)
  //   // })
  //   // Socket.send(JSON.stringify({ cmd_id: 1030, device_uuid: "XS92-X029S-X029-KOSM" }), (data) => {
  //   //   console.log('1030', data)
  //   // })



  // switch (params.cmd_id) {
  //   case 1000:
  //     console.log(1000, params);
  //     break;
  //   case 1001:
  //     console.log(1001, params);
  //     break;
  //   default:
  //     return null;
  // }


