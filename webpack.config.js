var path = require('path');
module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: 'bundle.js',
      devtoolModuleFilenameTemplate: function(info){
          console.log('absoluteResourcePath', info.absoluteResourcePath);
          return info.absoluteResourcePath;
        }
  },
// Enable sourcemaps for debugging webpack's output.
devtool: "source-map",  
externals: [
    // Don't bundle pixi.js, assume it'll be included in the HTML via a script
    // tag, and made available in the global variable PIXI.
    {"pixi.js": "PIXI"}
],
module:{
  rules:[
    {
  test: /\.(jpg|png|svg)$/,
  loader: 'file-loader',

  options: 
    {
    name: 'data/images/img-[hash].[ext]'
    }
  }
  ]
}
}
