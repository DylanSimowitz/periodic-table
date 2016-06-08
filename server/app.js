var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);
var express = require('express');
var path = require('path')
var Element = require('./models/element');

var app = express();
let router = express.Router();


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

var db = require('./database/connect');
// db.knex.schema.createTableIfNotExists('user', require('./tables/user'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

router.route('/elements')
  .get((req,res) => {
    Element.fetchAll()
      .then(model => {
        res.send(model.toJSON())
      })
    })
router.route('/data')
  .get((req,res) => {
    res.sendFile(path.join(__dirname, '/static/database.json'))
  })
router.route('/elements/:element')
  .get((req,res) => {
    Element.where('Element', req.params.element)
      .fetch()
      .then(model => {
        res.send(model.toJSON())
      })
  })
app.use('/api', router);
app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening on port 3000');
});
