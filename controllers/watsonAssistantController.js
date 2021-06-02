//const watson = require('ibm-watson');

const postMessage = async(req, res) => {
    res.send({
        message: '/watson/assistant/message',
    });
}

module.exports = {
    postMessage
}