import express from "express";

const app= express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})

app.get("/", (req, res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Hello World</h1>")
})
app.get("/about", (req, res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Welcome this is Thania's webpage </h1>")
})
app.get("/contact", (req, res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Phone no: 7979352887 </h1>")
})
