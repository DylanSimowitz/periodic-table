var webpack = require('webpack');
module.exports = {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    entry: [
      './client/index.js',
      'webpack-hot-middleware/client'
    ],
    output:
    {
        filename: 'bundle.js',
        publicPath: '/',
        path: __dirname
    },
    resolve:
    {
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    },
    module:
    {
        preLoaders: [
        {
            test: /\.(js|jsx)$/,
            include: './src',
            loader: 'eslint-loader'
        }],
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.sass/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        },
        {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.styl/,
            loader: 'style-loader!css-loader!stylus-loader'
        },
        {
            test: /\.(png|jpg|gif|woff|woff2)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    devServer: {
      stats: 'minimal',
      historyApiFallback: true,
      contentBase: './client'
    }
}
