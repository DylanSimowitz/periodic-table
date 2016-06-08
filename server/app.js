var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);
var express = require('express');
var path = require('path')

var app = express();
let router = express.Router();

if (process.env.NODE_ENV === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static('public'))

router.route('/data')
  .get((req,res) => {
    res.sendFile(path.join(__dirname, '/static/database.json'))
  })
app.use('/api', router);
app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening on port 3000');
});
