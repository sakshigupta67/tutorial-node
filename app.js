//❤️❤️NPM -> node package manager , npx --> node package execute


//npm --version

// local dependency like lodash - use it only in this particular project
// npm i <packageName>


//global dependency like nodemon - use it in any project
// npm install -g <packageName> 
// sudo npm install -g <packageName> (mac)

// in react , we use npx create-react-app shopping  ---> then this npx can run the cli tool(create-reacta-app) without creting it globally

// package.json - manifest this file (stores important info about project/package)
// manual approach (create package.json in the root , create properties etc)
//npm init (step by step  press enter to skip)
// npm init -y(everythimg by default)

// npm i nodemon --save-dev or npm i nodemon -D , D is dev dependency

// unistall ----> npm uninstall packageName OR npm remove packageName
// there is a nuclear approach also --> delete the node modules & package.loock.json , remove the package from pakage.json then npm i


const _ = require('lodash')


const items = [1, [2, [3, [4]]]]

const newItems =_.flattenDeep(items)
console.log(newItems)
console.log('helloo word')

// if i change anything in the hello word , the devdependency nodemon restarts the  app automatically , no need to write npm run dev or npm start again

