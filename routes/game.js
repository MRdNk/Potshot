exports.shoot = function (req, res) {
  console.log('shoot: ', req.body);
  res.json({err: null, done: 1})
}