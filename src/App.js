
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import HomeScreen from './homescreen.js'
import history from "./history.js";
import Checkout from './checkout.js'
import { Redirect } from 'react-router'
import Ordercompletion from './order.js'
import ss from './homescreen.js'
import data from './data.js'
var sel=0;
function App() {
  var items=0;
  var checkout=false;
  const [state,setState]=useState
    ({
      selected:[],
      selectedprice:[]
    }); 
  const price=(val,id)=>
  { 
     var x=document.getElementsByClassName("v")
     const i=parseInt(id)
     if(val=="SMALL")
      x[i].innerHTML=90;
     else if(val=="MEDIUM")
      x[i].innerHTML=150;
    else
      x[i].innerHTML=250;
    console.log(id)
  }
  const price2=(val,id)=>
  {
    var x=document.getElementsByClassName("vv")
    const i=parseInt(id)-4
    if(val=="SMALL")
      x[i].innerHTML=199;
     else if(val=="MEDIUM")
      x[i].innerHTML=299;
    else
      x[i].innerHTML=365;
  }
  const price3=(val)=>
  {
    if(val=="SMALL")
      document.getElementById("vvv").innerHTML=90;
     else if(val=="MEDIUM")
      document.getElementById("vvv").innerHTML=150;
    else
      document.getElementById("vvv").innerHTML=250;
  }
  var amt=0;
  var tax=0;
  const p=(id)=>
  {
    items+=1;
    const b=parseInt(id);
    const iq=b-9;
    const r=99+iq;
    var q=document.getElementsByClassName('pizzanames')
    var z=document.getElementById(parseInt(r))
    amt+=parseInt(z.innerHTML);
    tax+=amt*0.05;
    var x=q[iq].innerHTML
    var e=document.createElement("H4")
    e.innerHTML=x+"&nbsp;"+z.innerHTML;
    e.className="pizzap"
    document.getElementById("acx").innerHTML="";
    document.getElementById("items").appendChild(e)
    console.log(amt)
    var h=document.getElementById("Final")
    h.innerHTML="TOTAL AMOUNT:"+" "+amt+"&#x20B9;";
    var t=document.getElementById("Tax")
    t.innerHTML="Tax:"+tax+"&#x20B9;";
    var bbr=document.getElementById("dh");
    bbr.innerHTML=amt+tax+"&#x20B9;";
    
  }
  const pp=(id)=>
 {
  console.log('fuxk')
 }
 var w="/"
  const handleclick=()=>
  {
     history.push('/Checkout');
     w="/ch"
     window.location.reload();
  }

  return (
    <React.Fragment>
    <BrowserRouter>
 <Route path="/Checkout"  component={()=><Checkout/>} exact></Route> 
 <Route path="/" component={HomeScreen} exact/>  
 <Route path="/ordercompletion" component={Ordercompletion} exact/>    
    </BrowserRouter>
    </React.Fragment>
  );
}  
export default App;

