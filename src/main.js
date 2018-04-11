// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// eslint-disable-next-line no-unused-vars
import Foundation from 'foundation-sites';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false;
Vue.use(VueScrollTo);

class Client {
  constructor() {
    // eslint-disable-next-line no-undef
    $(document).foundation();
    this.rootElement = '#app';
    this.launch();
  }

  launch() {
    this.vm = new Vue({
      el: this.rootElement,
      router,
      data: {
        loggedIn: false,
      },
      methods: {
        login() {
          this.loggedIn = true;
        },
        logout() {
          this.loggedIn = false;
        },
      },
      components: { App },
      template: '<App/>',
    });
  }
}

// eslint-disable-next-line no-unused-vars
const instance = new Client();
