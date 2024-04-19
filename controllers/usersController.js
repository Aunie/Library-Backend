const UserSchema = require("../models/UserSchema");
const JsonWebToken = require("jsonwebtoken");

const userRegisterController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //  console.log( {email,password});

    const savedUser = await new UserSchema({ email, password }).save();
    // console.log(savedUser);
    res.json({ message: "user resigtserd successfully" });
  } catch (error) {}
};

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email);

    const uEmail = await UserSchema.findOne({ email });
    if (!uEmail) {
      return res.json({ flag: false, message: "Incorrect email" });
    }

    const uPassword = await UserSchema.findOne({ password });
    if (!uPassword) {
      return res.json({ flag: false, message: "incorrect password" });
      }
                                                                                                             
    const secret = process.env.KEY;
    const token =  JsonWebToken.sign({ userId: uEmail._id }, secret);
    // console.log(token);
    res.cookie("token", token, { httpOnly: true, path: "/",maxAge:60*60 });

    if (uEmail && uPassword) {
        return res.json({ flag: true, message: "Login Success" });
    }

    // console.log( uPasswrod );
  } catch (error) {}
};

module.exports = { userRegisterController, loginUserController };
