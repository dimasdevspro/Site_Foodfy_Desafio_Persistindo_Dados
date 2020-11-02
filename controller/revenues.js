const revenuesData = require("../data");
const newrevenuesData = require("../data.json")

//exportar admin

exports.home = function (req, res) {
    return res.render("home", {items: revenuesData})
}

exports.about = function (req, res) {
    return res.render("about");
  }

  // exports.revenues = function(req, res){
    //   return res.render("revenues", {items: revenuesData});
    // }
    
    // exports.revenue = function (req, res) {
    //   const revenues = [...revenuesData];
    
    //   const revenueIndex = req.params.index;
    
    //   const revenue = revenues[revenueIndex]
    
    //   return res.render("revenue", {item: revenue});
    // }  


//exportar admin


exports.index = function(req, res) {
    return res.render('revenues', {items: newrevenuesData})
}

exports.create = function(req, res) {
    return res.render("create")
}