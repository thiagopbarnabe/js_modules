const path = require('path'); //it is going to be handled by the node.js runtime
//webpack runs inside nodejs enviroment
//so we can make use of any piece of node.js

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config ={
    entry:'./src/index.js', //relative path
    //whenever webpack runs save the file called bundle.js
    //indide of a path of our project directory in a folder called build
    output:{
        path:path.resolve(__dirname,'build'),//absolute path(helper from nodejs)
        //__dirname is a constant on node.js is a reference to the current working directory        
        filename:'bundle.js',
        publicPath: 'build/'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/ //babel will be applyed only to js files
            },
            {
                loader: ExtractTextPlugin.extract({
                    loader:'css-loader'
                }),
                test:/\.css$/
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{limit:40000}//tamanho max antes de virar arquivo
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;