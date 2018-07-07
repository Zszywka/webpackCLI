const path = require('path');

module.exports = {
  //zaczynamy kompilacje od:
    entry: './src/app.js',
    output: {
      // sciezka kompilacji
        path: path.resolve(__dirname, 'build'),
        // plik wyjsciowy
        filename: 'app.bundle.js'
    }
};
