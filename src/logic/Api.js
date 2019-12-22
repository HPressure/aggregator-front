const Api = {
  requestTimeout: async controller => {
    setTimeout(() => {
      controller.abort();
    }, 10000);
  },
  get29: async function() {
    let abortController = new AbortController();
    await this.requestTimeout(abortController);
    return await fetch("/api/news", {
      signal: abortController.signal
    }).then(data => data.json());
  },
  getArhDrama: async function() {
    let abortController = new AbortController();
    await this.requestTimeout(abortController);
    return await fetch("/api/theatre", {
      signal: abortController.signal
    }).then(data => data.json());
  }
};
export default Api;
