//Importing all files
const express= require('express');
const app= express();
const bodyParser= require('body-parser');
const http= require('http');
const axios= require('axios');
const port= 3001;
async function getPost(req,res){
    try{
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response;
    }catch(err){
        console.log(err);
    }
}
//Creating a Server
const server= http.createServer( (req,res)=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/3/comments').
    then(response=>{
        console.log(response);
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(response));
    })
    .catch(err=>{
        console.log(err);
    })
}
);
app.use(bodyParser.json());
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});