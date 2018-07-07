You should:
1. create package.json (write in the console): -> npm init -y
2. add to file package.json: "start": "webpack ./app.js --output app.bundle.js"
where: input:(./app.js) and output: (app.bundle.js)
3. add packages (write in the console):
-> npm install --save -dev babel-preset-latest
-> npm install --save -dev babel-cli
-> npm install --save -dev babel-preset-react
-> npm install webpack webpack-cli --save-dev
4. write in the console:
-> npm start
-> node app.bundle.js
------------------------------------------------------------------------------
5. add the Webpack configuration file: webpack.config.js
6. fill in the webpack.config.js configuration code
7. change to file package.json: "start": "webpack"
(Webpack will look for a configuration file named webpack.config.js)

(if you had a configuration file named: myAwesomeConfig.js, you should use: -> "start": "webpack --config myAwesomeConfig.js")

8. 4. write in the console:
-> npm start
-> node build/app.bundle.js
