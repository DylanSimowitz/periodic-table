var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);
var express = require('express');
var path = require('path')

var app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

var db = require('./database/connect');
db.knex.schema.createTableIfNotExists('user', require('./tables/user')).then(console.log('created user table'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});
// app.get('/about', function(req, res) {
//   res.send(404)
// });

app.listen(process.env.PORT, function() {
    console.log('Example app listening on port 3000');
});
