const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {

    entry:'./src/js/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'js/main.js',
    },

    devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
        },
        // compress: true,
        port: 5722,
        hot:false,
        liveReload:true,
        open:true,
        devMiddleware:{
            writeToDisk:true,
        },
        
    },
//-----------plugins
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
    }),
    new HtmlWebpackPlugin({
      template:'./src/login.html',
      filename:'login.html',
    }),
    new HtmlWebpackPlugin({
      template:'./src/gallery-egypt.html',
      filename:'gallery-egypt.html',
    }),
    new HtmlWebpackPlugin({
      template:'./src/gallery-ist.html',
      filename:'gallery-ist.html',
    }),
    new HtmlWebpackPlugin({
      template:'./src/sign-in.html',
      filename:'sign-in.html',
    }),

    new MiniCssExtractPlugin({
        filename:"css/style.css"
    }),
  ],
//-----------loaders
  module: {
    rules: [
        // html-loader
      {
            test: /\.html$/i,
            loader: "html-loader",
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          
            MiniCssExtractPlugin.loader,
          
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

    //   img-loader
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath:"images"
          },
        },
      ],
    },

    //   font-loader
        {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                options:{
                    name:'[name].[ext]',
                    outputPath:"fonts"
                },
              },
            ],
        },
        // jquerry-loader
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },
};