const { getUser } = require("../Models/UserModel");

exports.loginPage = (req, res, next) => {
    res.render("login")
}

exports.dashboard = (req, res, next) => {
    const user = getUser(req.query.email);
    res.render("dashboard",{
        user: user
    });
}

exports.loginProcess = (req, res, next) => {
    const user = getUser(req.body.email)
    // console.log("Input email",req.body.email);

    if( user !==null && user.password === req.body.password){
        res.redirect("/dashboard?email="+req.body.email);
    }else if(user === null){
        res.render("error", {
            message: "No user found with this email"
        })
        //console.log(user)
    }
    else{
        res.render("error", {
            message: "Invalid user name and password"
        })
    }
}