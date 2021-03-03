import express from 'express';
import data from "./data.js";
const app=express();
app.get('/a',(req,res)=>
{
	res.send(data);
});
app.get('/',(req,res)=>
{
	res.send('server is ready');
});
app.listen(5000,()=>
{
	console.log('Serve at http:');
});
