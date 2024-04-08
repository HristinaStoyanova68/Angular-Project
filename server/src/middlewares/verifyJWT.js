const jwt = require("../lib/jwt");

const verifyJWT = async (req, res, next) => {

  const token = req.cookies[process.env.AUTH_COOKIE_NAME] || "";

  if (!token) {
    delete req.headers["Authorization"] || delete req.headers["authorization"];
    res.clearCookie(process.env.AUTH_COOKIE_NAME);

    console.log("Token is missing!");

    return res.status(401).json({ message: "Token is missing!" });
  }

  try {
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.user = decoded.UserInfo; // req.user = {_id, username, email}
    req.user.accessToken = token; //Now req.user = {_id, username, email, accessToken}

    next();
  } catch (error) {
    delete req.headers["Authorization"] || delete req.headers["authorization"];

    if (error.name === "TokenExpiredError") {
      res.clearCookie(process.env.AUTH_COOKIE_NAME);

      return res.status(401).json({ message: "Token has expired!" });
    } else {
      console.log(error.name);
      console.log("Problem with token verification!");

      res.clearCookie(process.env.AUTH_COOKIE_NAME);

      return res
        .status(403)
        .json({ message: "Problem with token verification!" });
    }
  }
};

module.exports = verifyJWT;
