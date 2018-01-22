module.exports = (app)=>{
    //Splash Page
    app.get("/", (req, res)=>{
        res.render("index");
    });

    //User Signup Page
    app.get("/signup", (req, res)=>{
        res.send("Signup");
    });

    //User Login Page
    app.get("/login", (req, res)=>{
        res.render("index");
    });
};
