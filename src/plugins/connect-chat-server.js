// import something here
let instance = require('./client')({ url: "http://localhost:3000", userId: 'userid' });
let client = instance.defineClient();

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.prototype['$server-instance'] = instance;
  Vue.prototype['$server-client'] = client;
}
