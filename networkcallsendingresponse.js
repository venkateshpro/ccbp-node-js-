const express = require("express");
const app = express();

app.get("/", (Request, Response) =>{
Response.send("hai vebdbck");
});


/* Here we are sending date as a response*/
app.get("/date", (request, response) => {
    let date = new Date();
    response.send(`Today's date is ${date}`);
  });

/*Here we are sending response as a HTML image */

app.get("/page", (request, response) => {
    response.sendFile("./page.html", { root: __dirname });
  });
  
  
app.listen(8088);
