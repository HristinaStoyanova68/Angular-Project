const cacheControl = (req, res, next) => {
    console.log('here1');
  if (req.url === "/login" || req.url === "/logout") {
      
      res.setHeader("Cache-Control", "no-cache");
      
      console.log(res);
  }
  next();
};

module.exports = cacheControl;
