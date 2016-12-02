var webpack = require('webpack');
var path = require('path');

module.exports = {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    entry: [
        './client/index.js', 'webpack-hot-middleware/client'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public')
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                include: './src',
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
            }, {
                test: /\.sass/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            }, {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            }, {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.styl/,
                loader: 'style-loader!css-loader!stylus-loader'
            }, {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    postcss: [require('autoprefixer')({browsers: ['last 2 versions']})],
    devServer: {
        stats: 'minimal',
        historyApiFallback: true,
        contentBase: './client'
    }
}
