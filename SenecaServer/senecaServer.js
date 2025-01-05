const seneca = require("seneca")();

seneca
    .use("seneca-entity")
    .use("seneca-mongo-store",{
        uri : "mongodb://127.0.0.1:27017/ishare"
    })
    .quiet()
    .use(require("./senecaOperationsPlugin"))
    .listen({ type: "http", port : 7000},()=>{
        console.log("Seneca Server running on port 7000...");
    });