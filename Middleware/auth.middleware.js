const jwt = require("jsonwebtoken");
const { UserModel } = require("../Model/user.model");

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ msg: " No token provided" });
  }

  try {
    const decoded = jwt.verify(access_token, "masai");
    if (!decoded) {
      return res.status(403).send({ msg: "token is invalid" });
    }

    const user = await UserModel.findById({ _id: decoded.userID });
    if (!user || !user.isAdmin) {
      return res
        .status(403)
        .send({ msg: "Unauthorized, only admins can perform this action" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = {
  auth,
};