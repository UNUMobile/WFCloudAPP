# WFCloudAPP
https://cloud.wf8266.com
# 教學
https://sites.google.com/view/wfcloud
# WF8266R.js API
物件名稱 wf8266r

login(email, password, callback)
<pre>使用 WFCloud 物聯雲帳號和密碼登入，回傳所有設備資訊</pre>
auth(key, callback)
<pre>使用 WFCloud 暫時的 TOKEN KEY 登入，回傳所有設備資訊</pre>
signOut()
<pre>登出</pre>
watchAll(callback)
<pre>建立監聽模型，任何設備異動資訊都會以 JSON 物件回傳</pre>

digitalWrite(deviceId, pin, value)
<pre>數位輸出</pre>
info(deviceId)
<pre>取得設備通用資訊</pre>

# 使用 WFCloud 帳號和密碼登入
<pre>
var myDevices;

wf8266r.login(this.user.email, this.user.password, function (data) {
          console.log(data);
          myDevices = data;
          bindDeviceEvent();
})

function bindDeviceEvent(){
  wf8266r.watchAll(function(data){
    myDevices.devices[data.index].online = true;

    if(data.type == "CONFIG")
      myDevices.devices[data.index].config = data;
  })
}
</pre>
