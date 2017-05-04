var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var currentStack;
var myDevices;

//watch device events
function bindDeviceEvent(){
  wf8266r.watchAll(function(data){
    myDevices.devices[data.index].online = true;

    if(data.type == "CONFIG")
      myDevices.devices[data.index].config = data;
  })
}

const customToolbar = {
  template: '#custom-toolbar',
  props: ['backLabel']
};

const mainPage = {
  template: '#mainPage',
  props: ['pageStack'],
  data(){
    
    return { devices: myDevices.devices };
  }
};

const controlPage = {
  template: '#controlPage',
  props: ['pageStack'],
  components: { customToolbar }
};

const loginPage = {
  template: '#loginPage',
  computed: {
    validation: function () {
      return {
        email: emailRE.test(this.user.email),
        password: !!this.user.password
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  methods: {
    login() {
      if (this.isValid) {
        currentStack = this.pageStack;
        wf8266r.login(this.user.email, this.user.password, function (data) {
          console.log(data);
          myDevices = data;
          bindDeviceEvent();
          currentStack.push(mainPage);
        })
      }
    }
  },
  props: ['pageStack'],
  data() {
    return {
      user: { email: '', password: '' }
    };
  },
};

new Vue({
  el: '#app',
  template: '#main',
  data() {
    return {
      pageStack: [loginPage]
    };
  }
});