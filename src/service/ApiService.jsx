const call = async (api, method, request) => {

    const BASE_URL = process.env.REACT_APP_SERVER_IP;
    let options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: BASE_URL + api,
        method: method,
    };
    if (request) {
        // GET method
        options.body = JSON.stringify(request);
    }
    const response = await fetch(options.url, options);
    const json = await response.json();
    if (!response.ok) {
        // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
        return Promise.reject(json);
    }
    return json;
}

export default call;