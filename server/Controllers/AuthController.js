const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const local_storage = require("local-storage");
const nodelailer = require("nodemailer");

// method : post
// route : api/auth/login
// acces : Public
const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send(" please enter email or name or password ");
  }
  const { body } = req;
  User.findOne({ email: body.email }).then((e) => {
    const user = e;
    if (e) {
      bcrypt
        .compare(body.password, e.password)
        .then((e) => {
          if (e) {
            
              const token = jwt.sign({ user }, process.env.SECRET, {
                expiresIn: "120m",
              });
              local_storage("token", token);
              res.json({ token: local_storage("token") });
            
          } else {
            res.status(401).send("passsord invalid // unauthorized");
          }
        })
        .catch(() => {
          res.send("not hashed");
        });
    } else {
      res.status(404).send("user not found");
    }
  });
};



//verify email
//route: api/auth/verify-email/:token
const verifyEmail = async (req, res) => {
  const token = req.params.token;
  const userf = await User.findOne({ token: token });
  if (token == userf.token) {
    userf.status = "valid";
    await userf.save();
    res.json({ message: "email is verified" });
  } else {
    res.status(400).send("email not verified");
  }
};

// method : post
// route : api/auth/Register
// acces : Public
const register = (req, res) => {
  if (!req.body.email || !req.body.name || !req.body.password) {
    res.status(400).send(" please enter email or name or password ");
  }
  if (req.body.password != req.body.password2) {
    res.status(400).send(" password not match");
  }

  const { body } = req;
  User.findOne({ email: body.email }).then((e) => {
    // console.log('user=> '+e)
    if (!e) {
     
          const token = jwt.sign({ id: User._id }, process.env.SECRET);
          body.token = token;
          bcrypt
            .hash(body.password, 10)
            .then((hashPassword) => {
              body.password = hashPassword;

            
              User.create({ ...body })
                .then(() => {
                  res.status(201).send("created");
               
                })
                .catch(() => {
                  res.status(400).send("not created // something woring ");
                });
            })
            .catch(() => {
              res.send("error in hash");
            });
      
    
    } else {
      res.status(400).send("can not create // email déja existe");
    }
  });
};

//update Password
//route: /api/auth/updatePassword/:token
const updatePassword = async (req, res) => {
  const token = req.params.token;
  const tokens = jwt.verify(token, process.env.SECRET);
  const newpassword = await bcrypt.hash(req.body.password, 10);
  const userf = await User.findOneAndUpdate(
    { _id: tokens.user._id },
    { password: newpassword }
  );
  res.send(userf);
};

// method : post
// route : api/auth/ForgetPassword
// acces : Public
const forgetPassword = (req, res) => {
  if (!req.body.email) {
    res.status(400).send(" please enter email ");
  }
  const { body } = req;
  User.findOne({ email: body.email }).then((e) => {
    const user = e;
    if (e) {
      const token = jwt.sign({ user }, process.env.SECRET, {
        expiresIn: "30m",
      });
      local_storage("token", token);
      const mailOptions = {
        from: "meryemelhajouji.99@gmail.com",
        to: body.email,
        subject: "Forget Password",
        html: `<a href="http://localhost:${process.env.PORT_CLIENT}/VerifyEmailforgPass/${body.token}">update  your password </a>`,
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) console.log(err);
        else res.send(info);
      });
    } else {
      res.send("user not found");
    }
  });
};

// method : post
// route : api/auth/resetpassword/:token
// acces : Public
const resetPassword = (req, res) => {
  res.json(" reset Password function of");
};

// method  : get
// url     : api/auth/logout
// acces   : Public
const Logout = async (req, res) => {
  // res.clearCookie('token');
  localStorage.clear();
  res.send("Logout");
};

module.exports = {
  login,
  register,
  forgetPassword,
  resetPassword,
  verifyEmail,
  updatePassword,
  Logout,
};
