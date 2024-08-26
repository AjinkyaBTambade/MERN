// ejs module can download using npm install
const ejs=require('ejs');

// trying to send index.ejs file at appropriate http request
// which is implementing hollywood rule{don't call me, i will call you}
exports.home=(req,res)=>{
    ejs.renderFile("./views/index.ejs",{},{},(err,template)=>{
       if(err)
        {
            throw err;
        }
        else
        {
            res.end(template);
        }
    });
};

// http request: /about
exports.about = (req, res) => {
  ejs.renderFile("./views/about.ejs", {}, {}, (err, template) => {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
};

// http request: /contact
exports.contactus = (req, res) => {
  ejs.renderFile("./views/contact.ejs", {}, {}, (err, template) => {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
};

// http request: /service
exports.services = (req, res) => {
  ejs.renderFile("./views/service.ejs", {}, {}, (err, template) => {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
};

// // ejs module can download using npm install
// const dal=require('../model/dal');

// // trying to send index.ejs file at appropriate http request
// // which is implementing hollywood rule{don't call me, i will call you}

// exports.index = (req, res) => {
//   let model = dal.getPersonalDetails();
//   res.render("../views/index.ejs", model);
// };