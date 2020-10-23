const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

const modeDev = process.env.NODE_ENV === 'development';
const modeProd = !modeDev;
console.log(modeDev);

const optimization = () => {
    const config = {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                            calc: {precision: 2},
                            normalizeWhitespace: false,
                            normalizeString: {preferredQuote: 'single'}
                        },
                    ],
                },
                sourceMap: true
            }),
        ]
    }

    if (modeProd) {
        config.minimizer = [
            new TerserPlugin(),
            new OptimizeCssAssetPlugin()
        ]
    } 

    return config
}

const cssLoaders = extra => {

    const loaders = [ 
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: modeDev,
                    reloadAll: true
                }
            },
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            autoprefixer({
                                overrideBrowserslist:['ie >= 8', 'last 4 version']
                            })
                        ]
                    },
                    sourceMap: true
                }
            },
        ]
    
    if (extra) {
        loaders.push(extra)
    }
    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {        
        alias: {
            '@sass': path.resolve(__dirname, 'src/sass'),
            '@': path.resolve(__dirname, 'src'),
        }
    },
    optimization: optimization(),
    devtool: modeDev ? 'source-map' : 'eval',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080
    },
    plugins: [        
        new HTMLWebpackPlugin({            
            template: './pug/index.pug',
            filename: 'index.html', 
            minify: {
                collapseWhitespace: modeProd
            }
        }), 
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
              { from: './img', to: './img' },
              { from: './fonts', to: './fonts' },            
            ]
          }),
        new MiniCssExtractPlugin({
            filename: './css/style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                  }
                }
              },
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'                
              },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}
