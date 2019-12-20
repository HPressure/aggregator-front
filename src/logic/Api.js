"use strict";

// class Api {
//   async requestTimeout(controller) {
//     setTimeout(() => {
//       controller.abort();
//       console.log(controller.signal.aborted);
//     }, 5000);
//   }
//   static async get29() {
//     let abortController = new AbortController();
//     await this.requestTimeout(abortController);
//     return await fetch("/api/", {
//       signal: abortController.signal
//     }).then(data => data.json());
//   }
// }

const Api = {
  requestTimeout: async controller => {
    setTimeout(() => {
      controller.abort();
    }, 10000);
  },
  get29: async function get29() {
    let abortController = new AbortController();
    await this.requestTimeout(abortController);
    return await fetch("/api/", {
      signal: abortController.signal
    }).then(data => data.json());
  }
};
export default Api;
