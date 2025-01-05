module.exports = function ishare(options){


    //============================= Display article service ==========================
    this.add({ component: "getdata", by : "all"},(args,respond)=>{
        console.log("Display article  micro-service hit...");
        const articles = this.make("articles");

        articles.list$({}, ( err,articlelist)=>{
            
            if(err){
                console.log("Some error = ",err);

            }
            else{
                let result = {};
                console.log("Retrived article data = ",articlelist);
                if(articlelist.length == 0)
                {
                    result = "Data not Found";
                }

                else
                {
                    result = articlelist;
                }
                respond(null,{ data : result });
            }
            
        })
    
    })

     //============================= Display article service Ends here =====================
}
