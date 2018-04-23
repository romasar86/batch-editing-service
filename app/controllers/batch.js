const models = require("./../models"),
    urlParse = require("url-parse");

class BatchController {
    static getModelName(url) {
        const {pathname} = urlParse(url, true);
        return pathname.split("/")[1];
    }

    static batch(req, res) {
        const url = req.body.endpoint.url, 
            modelName = BatchController.getModelName(url),
            method = req.body.endpoint.verb,
            data = req.body.payload,
            model = models.getModel(modelName);
        if(!model) return res.status(400).send("Bad request");
        model.process(url, method, data)
            .then( response => {
                res.status(200).send(response);
            })
            .catch( err => {
                console.log(err);
                res.status(500).send(err.message);
            });
        
    }
}

module.exports = BatchController;