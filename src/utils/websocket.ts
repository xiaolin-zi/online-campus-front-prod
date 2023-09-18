// const ws_uri = 'ws://192.168.43.144:7002/campusMessage/websocket/1';

let ws: WebSocket;
export const openWebSocket = (uri: string) => {
  if (typeof WebSocket === 'undefined') {
    console.log('你的浏览器暂不支持websocket... >_<');
    return;
  }

  ws = new WebSocket(uri);
  ws.onopen = function(evt: any) {
    // console.log('新ws', ws);
    if (ws.readyState === ws.OPEN) {
      console.log('创建新ws成功');
    }
  }
  ws.onclose = function(evt: any) {
    console.log('onClose: ', evt);
  }
  ws.onerror = function(evt: any) {
    console.log('onError: ', evt);
  }
  ws.onmessage = function(evt: any) {
    console.log('onMessage: ', evt, JSON.parse(evt.data));
  }
}

export const closeWebSocket = () => {
  if (typeof WebSocket === 'undefined') {
    console.log('你的浏览器暂不支持websocket... >_<');
    return;
  }
  if (ws != null || ws !== undefined) {
    console.log('原有ws: ', ws);
    if (ws.readyState === ws.OPEN) {
      ws.close();
      // console.log('关闭原有ws成功!');
    }
    
  } else {
    // console.log('关闭原有ws失败!');
  }
}

export const wsSendMsg = (agentData: any, cb: any) => {
  if (ws && ws.readyState === ws.OPEN) {
    console.log('sendMsg');
    ws.send(JSON.stringify(agentData));
    cb(agentData);
  }
}

export const listenMsg = (cb: any) => {
  if (ws && ws.readyState === ws.OPEN) {
    ws.onmessage = function(evt: any) {
      cb(JSON.parse(evt.data));
    }
  }
}
