const User = require("./user");

class Models {
    static getModel(modelName) {
        switch(modelName) {
            case "user":
                return new User();
            default:
                return null;
        }
    }
}

module.exports = Models;