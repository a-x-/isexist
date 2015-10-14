var fs = require('fs');

module.exports = function(path) {

    try {

        fs.statSync(path);
        return true;

    } catch(e) {

        return false;

    }

};
