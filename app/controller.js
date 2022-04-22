const Solution = require('./model');

module.exports = {
    viewIndex: async(req, res) => {
        await Solution.find({}).exec((err, response) => {
          console.log(response)
          res.send(response[0].string);
        })
    }
}