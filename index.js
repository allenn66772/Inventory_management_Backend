// 1. import json server
const JSONServer = require('json-server')

// 2. create  server for running  json file
const  inventorypro = JSONServer.create()

//3. create middleware
const middleware =JSONServer.defaults()

//4.define port to run the server
const PORT =3000 || process.env.PORT

//5. use middleware
inventorypro.use(middleware)

//6. import db.json file
const router =JSONServer.router("db.json")

//7. use router
inventorypro.use(router)

//8 tell server to listen for client request
inventorypro.listen(PORT,()=>{
    console.log(`inventorypro started  at Port Number ${PORT}`);
    
})