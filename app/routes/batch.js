const batchController = require("./../controllers/batch");

module.exports = app => {
    app.route("/batch")
        .post(batchController.batch);
};