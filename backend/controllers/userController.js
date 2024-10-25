const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//CREATE TOKEN
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//LOGIN USER
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password);
    
        //CREATE SIGNUP TOKEN
        const token = createToken(user._id);
    
        res.status(200).json({
          email,
          token,
        });
      } catch (error) {
        res.status(400).json({
          error: error.message || error,
        });
      }

};

//SIGNUP USER
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    //CREATE SIGNUP TOKEN
    const token = createToken(user._id);

    res.status(200).json({
      email,
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || error,
    });
  }
};

module.exports = { loginUser, signupUser };
