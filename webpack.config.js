module.exports = {
  entry: './src/main.ts',
  output: {
    filename: './dist/public/bundle.js',
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
    name: 'img-[hash].[ext]',
    outputPath : 'dist/public/data/images/',
    publicPath : '.'
    }
  }
  ]
}
}
