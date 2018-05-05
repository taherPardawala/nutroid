let instance = require('./client')({url:"http://localhost:3000",userId:'userid'});
let client = instance.defineClient();

export default ({ Vue }) => {
    Vue.prototype['$server-instance'] = instance;
    Vue.prototype['$server-client'] = client;
  }