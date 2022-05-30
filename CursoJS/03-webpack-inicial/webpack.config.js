const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    
    mode: 'development',

    output:{
        clean:true
    },

    module :{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources:false
                }

            },

            {
                test: /\.css$/,
                exclude: /styles.css$/, 
                use: [ 'style-loader', 'css-loader']

            },

            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                
            }
        ]
    },

    optimization: {

    },

    plugins:[
        new HtmlWebPackPlugin({
            title: 'My WebPack',
            filename:'index.html',
            template:'../03-webpack-inicial/src/index.html'


        }),
        new MiniCssExtractPlugin({
            filename :'[name].[fullhash].css',
            ignoreOrder: false

        })

    
    ],

}