const urlParse = require("url-parse"),
    request = require("request-promise-native");

class User {

    buildOptions(url, method, body) {
        let options = {
            method: method,
            uri: url,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            json: true
        };
        if(body) Object.assign(options, {body});
        return options;
    }

    makeRequest(url, method, body) {
        console.log(url, method, body);
        const parsedUrl = urlParse(url, true);
        let builtUrl = "",
            [, path, ...params] = parsedUrl.pathname.split("/");

        if(params.length === 0) {
            builtUrl = `${parsedUrl.protocol}/${parsedUrl.host}/${path}`;
        } else {
            params = params.map(param => {
                param = param.replace("{", "");
                param = param.replace("}", "");
                return body.path[param];
            }).join("/");
            builtUrl = `${parsedUrl.protocol}//${parsedUrl.host}/${path}/${params}`;
        }
        const options = this.buildOptions(builtUrl, method, body.data);
        return request(options).then(response => {
            return {status: response.statusCode};
        }).catch(err => {
            return {status: err.statusCode};
        });
    }


    process(url, method, data) {
        if(!data) return this.makeRequest(url, method);
        const promises = data.map(item => this.makeRequest(url, method, item));
        return Promise.all(promises);
    }
}

module.exports = User;
