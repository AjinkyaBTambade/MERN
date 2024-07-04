// ejs module can download using npm install
const dal = require('../model/dal');

// trying to send index.ejs file at appropriate http request
// which is implementing hollywood rule{don't call me, i will call you}

exports.index = (req, res) => {
    let model = dal.getPersonalDetails();
    res.render("../views/index.ejs", model);
};