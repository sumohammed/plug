module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

    conventions: {
    assets: function(path) {
      /**
       * Loops every path and returns path|true|false according what we need
       * @param   path    file or directory's path
       * @returns path    if it is a directory
       *          true    if it fit with the regular expression
       *          false   otherwise
       *
       */
      if( /\/$/.test(path) ) return path;
      // /^app\/.*\.html/.test(path) ||
      // RegExp for anything we need
      return /assets[\\/]/.test(path) 
            || /.*(?:\.eot|\.svg|\.ttf|\.woff|\.woff2)/.test(path); 
    }
  },

  plugins: {
    babel: {presets: ['es2015', 'react']},
    afterBrunch: [
     [
       'mkdir public/fonts -p',
       'mv public/bootstrap/dist/fonts/* public/fonts',
       'rm -r public/bootstrap',
     ].join(' && ')
  ]
  }
};
