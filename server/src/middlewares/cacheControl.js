const cacheControl = (req, res, next) => {
  if (req.url === "/login" || req.url === "/logout") {
    res.setHeader("Cache-Control", "no-cache");
  }
  next();
};

module.exports = cacheControl;
