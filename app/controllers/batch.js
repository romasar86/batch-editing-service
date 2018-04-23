

class BatchController {
    static batch(req, res) {
        console.log("/batch", req.body);
        res.status(200).send({test: "success"});
    }
}

module.exports = BatchController;