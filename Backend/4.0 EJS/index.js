import express from "express";

const app= express();
const port = 3000;

const dayOfWeek = new Date().getDay();

app.get("/",(req, res)=>{

    let dayOfWeek = new Date("23 March, 2024 11:13:00").getDay();
    let dayType = "a weekday";
    let advice = "it's time to work hard"

    if(dayOfWeek===0 || dayOfWeek ===6){
        dayType = "the weekend";
        advice = "it's time to have some fun"
    }

   res.render("index.ejs",{
    dayType: dayType,
    advice: advice
   });
});

app.listen(port,()=>{
    console.log("Listening on port "+port);
})