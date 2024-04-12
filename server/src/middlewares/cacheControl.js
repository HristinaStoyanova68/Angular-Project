const cacheControl = (req, res, next) => {
    console.log('here1');
  if (req.url === "/login" || req.url === "/logout") {
    console.log('here2');

    res.setHeader("Cache-Control", "no-cache");

  }
  next();
};

module.exports = cacheControl;
