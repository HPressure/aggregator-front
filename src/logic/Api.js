import news_json from "../TestData/Test29.json";
import theatre_json from "../TestData/ArhDrama.json";
const Api = {
  requestTimeout: async controller => {
    setTimeout(() => {
      controller.abort();
    }, 5000);
  },
  get29: async function() {
    let abortController = new AbortController();
    await this.requestTimeout(abortController);
    return await fetch("/api/news", {
      signal: abortController.signal
    })
      .then(data => data.json())
      .catch(async () => {
        return news_json;
      });
  },
  getArhDrama: async function() {
    let abortController = new AbortController();
    await this.requestTimeout(abortController);
    return await fetch("/api/theatre", {
      signal: abortController.signal
    })
      .then(data => data.json())
      .catch(async () => {
        return theatre_json;
      });
  }
};
export default Api;
