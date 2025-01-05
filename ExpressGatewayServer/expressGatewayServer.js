const express = require("express");
const axios = require("axios");
const cors = require("cors");

const server = express();
server.use(cors());

//=========================== Display All Articles Service =====================
server.get("/fetchall", (req,res)=>{
    console.log("Display article  service running...");
    let component = "getdata";
    let by = "all";
    let url = "http://localhost:7000/act?component="+component+"&by="+by;

    console.log('Url sent to Seneca = ',url);

    axios.get(url)
        .then((responcefromseneca)=>{

        res.send(responcefromseneca.data.data);
        res.end();
        })
        .catch((err)=>{
            console.log("Some error occurred = ",err);
        })
})
//=========================== Display All Articles Service ends here =====================

server.listen(3000,()=>{
    console.log("Express Server listening on port 3000...")
})