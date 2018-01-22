module.exports = (app)=>{
    //Splash Page
    app.get("/", (req, res)=>{
        res.render("splash");
    });

    //User Signup Page
    app.get("/signup", (req, res)=>{
        res.render("signup");
    });

    //User Login Page
    app.get("/login", (req, res)=>{
        res.render("login");
    });
};
