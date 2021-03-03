import React, { useState } from 'react'
import history from "./history.js";
import {Link} from 'react-router-dom'
import data from './data.js'
import Pop from './pop.js'
var s=0;
const ss=[];
const sss=[];

 function HomeScreen()
{
	  const [isOpen, setIsOpen] = useState(false);
	const [
	state,setState]=useState
    ({ s:"", 
      results:[], 
      selected:{} 
    }); 
	var items=0;
	
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
  var index=0;
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
    var size;
    if(z.innerHTML=="90" || z.innerHTML=="199")
     size="Small"
    else if(z.innerHTML=="150" || z.innerHTML=="299")
     size="Medium"
    else if(z.innerHTML=="57")
    	size="Regular"
    else if(z.innerHTML=="250" || z.innerHTML=="399")
    	size="Large"
    else
    size="Nope"
    var x=q[iq].innerHTML
    var e=document.createElement("H4")
    if(size=="Small" || size=="Medium" || size=="Large"||size=="Regular")
    e.innerHTML=x+"&nbsp;"+'('+size+')'+':'+z.innerHTML+"&#x20B9;";
    else
    e.innerHTML=x+"&nbsp;"+':'+z.innerHTML+"&#x20B9;";
    e.className="pizzap"
    document.getElementById("acx").innerHTML="";
    var bb=document.createElement("button")
    bb.innerHTML='x';
    bb.class="delete"
  
    document.getElementById("items").appendChild(e)

    console.log(amt)
    var h=document.getElementById("Final")
    h.innerHTML="TOTAL AMOUNT:"+" "+amt+"&#x20B9;";
    var t=document.getElementById("Tax")
    t.innerHTML="Tax:"+tax+"&#x20B9;";
    var bbr=document.getElementById("dh");
    bbr.innerHTML=amt+tax+"&#x20B9;";
    ss[s]=x;
    sss[s]=z.innerHTML;
    s++;
    console.log(data)
    console.log(state.selected)
  }
 const pp=(id)=>
 {
 	console.log('fuxk')
 }

const handleclick=()=>
  {
     if(amt>200)
     {
       history.push('/Checkout');
       window.location.reload();
     }
     else
     {
     	alert("MINIMUM AMOUNT:200 RUPEES")
     }
  }
const popup=(id)=>
{
	data.pizzas.map((pizza)=>
		pizza.id==id?state.selected=pizza:console.log(""));
	console.log(state.selected.name);
		    setIsOpen(!isOpen);
}
const closepop = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
    setIsOpen(!isOpen);
    state.isOpen=false;
  }
	return(
		<React.Fragment>
		<div class="Basket" id="basket">
   <h2 id="b">Your Basket</h2>
   <div id="items">
    <h4 id="acx">Your basket looks a little empty. Why not check out some of our unbeatable deals</h4>
   </div>
   <div id="Final"></div>
    <div id="Tax"></div> 
<button id="button" class="buy" onClick={handleclick}>Checkout<span id="dh"></span></button>
  </div>
    <div className="App">
       <header>
         <div className="brand">
         <a href="/"><img src="https://1000logos.net/wp-content/uploads/2019/07/Pizza-Hut-logo-1999%E2%80%932014.jpg" width="130"/></a>
         </div>
         <nav>
  </nav>
  </header>
  <hr/>
  <div className="cat">
       <div id="choice">
       <ul>
       <li><a href="#veg">PIZZAS</a></li>
       <li><a href="#side">SIDES</a></li>
       <li><a href="#bb">DRINKS</a></li>
       <li><a href="#des">DESERTS</a></li>
       </ul>
 
       <hr className="right"/>
       </div>
       </div>
  <main>
       <div className="veg">
<h2 ><a name="vege"><hr class="f"/><br/><span class="center">Vegetarian</span></a></h2><hr className="right"/>
      <div class="piz">
     <div class="card">
  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.8105f31ea64f783f185a36497159d5fc.1.jpg?width=300" alt="Avatar" id="500" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">
    <h4 class="pizzanames"><b>Paneer Tikka Pizza</b></h4>
    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <p>Select your size and crust</p>
    <select class="select" onChange={(e)=>price(e.target.value,e.target.id)}  id="0">
    <option>SMALL</option>
    <option>MEDIUM</option>
    <option>LARGE</option>
    </select>
    <button className="buy" onClick={(e)=>p(e.target.id)} id="9">PRICE:<span class="v" id="99">90</span>&#x20B9;</button>
  </div>
</div>
<div class="card">

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtzVt7fDzPCHXnjeWl3Hsh4wXPs6a35JKZTw&usqp=CAU" id="501" onClick={(e)=>popup(e.target.id)}/>                                       
  <div class="container">

    <h4 class="pizzanames"><b>CHEESE PIZZA</b></h4>

    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <p>Select your size and crust</p>
    <select class="select" onChange={(e)=>price(e.target.value,e.target.id)} id="1">
    <option>SMALL</option>
    <option>MEDIUM</option>
    <option>LARGE</option>
    </select>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="10">PRICE:<span class="v" id="100">90</span>&#x20B9;</button>
  </div>
  </div>
  <div class="card">

  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.6e298cc5e6afc158c2f9fdda4fa02e0c.1.jpg?width=300" id="502" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 class="pizzanames"><b>Veggie Supreme Pizza</b></h4>

    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <p>Select your size and crust</p>
    <select class="select" onChange={(e)=>price(e.target.value,e.target.id)} id="2">
    <option>SMALL</option>
    <option>MEDIUM</option>
    <option>LARGE</option>
    </select>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="11">PRICE:<span class="v" id="101">90</span>&#x20B9;</button>
  </div>
  </div>
<div class="card">

  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.6e298cc5e6afc158c2f9fdda4fa02e0c.1.jpg?width=300" id="503" onClick={(e)=>popup(e.target.id)}/>

  <div class="container">

    <h4 class="pizzanames"><b>MUSHROOM PIZZA</b></h4>

    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <p>Select your size and crust</p>
    <select class="select" onChange={(e)=>price(e.target.value,e.target.id)} id="3">
    <option>SMALL</option>
    <option>MEDIUM</option>
    <option>LARGE</option>
    </select>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="12">PRICE:<span class="v" id="102">90</span>&#x20B9;</button>
  </div>
  </div>
   </div>
</div>     
<div className="nonveg">
<hr/><h2><a name="nonv">Non-Vegetarian</a></h2><hr/>
 <div class="piz">
   <div class="card">

  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-sausage.a39e18cbe864a62a695229d1ab976801.1.jpg?width=300" id="504" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 class="pizzanames"><b>Chicken Sausage</b></h4>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsNOENdNsWdiIEaDAwwOOwCSBWjiS8GFPbiA&usqp=CAU" id="vegs"/>
    <p>Select your size and crust</p>
    <select class="select" onChange={(e)=>price2(e.target.value,e.target.id)} id="4">
    <option>SMALL</option>
    <option>MEDIUM</option>
    <option>LARGE</option>
    </select>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="13">PRICE:<span class="vv" id="103">199</span>&#x20B9;</button>
  </div>
  </div>
     <div class="card">

  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.d73ce7daceb1eb12aec885204006d524.1.jpg?width=300" id="505" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 class="pizzanames"><b>Chicken Supreme Pizza</b></h4>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsNOENdNsWdiIEaDAwwOOwCSBWjiS8GFPbiA&usqp=CAU" id="vegs"/>
    <p>Select your size and crust</p>
    <select class="select" onChange={(e)=>price2(e.target.value,e.target.id)} id="5">
    <option>SMALL</option>
    <option>MEDIUM</option>
    <option>LARGE</option>
    </select>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="14">PRICE:<span class="vv" id="104">199</span>&#x20B9;</button>
  </div>
  </div>
  <div class="card">

  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka-supreme.9987daa529583e656f054b340ad219c5.1.jpg?width=300" id="506" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 className="pizzanames"><b>Chicken Supreme Tikka</b></h4>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsNOENdNsWdiIEaDAwwOOwCSBWjiS8GFPbiA&usqp=CAU" id="vegs"/>
    <p>Select your size and crust</p>
    <select c
    lass="select" onChange={(e)=>price2(e.target.value,e.target.id)} id="6">
    <option>SMALL</option>
    <option>MEDIUM</option>
    <option>LARGE</option>
    </select>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="15">PRICE:<span class="vv" id="105">199 </span>&#x20B9;</button>
  </div>
  </div>
  <div class="card">

  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.d07f1534fcf73c9bad1db0ebc946c34a.1.jpg?width=300" id="507" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 className="pizzanames"><b>Triple Chicken Feast</b></h4>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsNOENdNsWdiIEaDAwwOOwCSBWjiS8GFPbiA&usqp=CAU" id="vegs"/>
    <p>Select your size and crust</p>
    <select class="select" onChange={(e)=>price2(e.target.value,e.target.id)} id="7">
    <option>SMALL</option>
    <option>MEDIUM</option>
    <option>LARGE</option>
    </select>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="16">PRICE:<span class="vv" id="106">199</span>&#x20B9;</button>
  </div>
  </div>
 </div>
 <div className="Sides">
  <hr/><h2><a name="side">Sides</a></h2><hr/>
  <div class="piz">
  <div class="card">

  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/side/garlic-bread-stix.db6d962de8b8941a5defcb2219f3f77f.1.jpg?width=300" id="508" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 className="pizzanames"><b>Garlic Bread Stick</b></h4>

    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="17">PRICE:<span class="vv" id="107">99</span>&#x20B9;</button>
  </div>
  </div>
   <div class="card">

  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/side/zesty-veg-pocket.a76f88307c075e1632281c6f26564c04.1.jpg?width=300" id="509" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 className="pizzanames"><b>Zesty Paneer Pocket</b></h4>

    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <button class="buy"  onClick={(e)=>p(e.target.id)} id="18">PRICE:<span class="vv" id="108">99</span>&#x20B9;</button>
  </div>
  </div>
 </div>
 </div>
 <div className="Beverages">
     <hr/><h2><a name="bb">Beverages</a></h2><hr/>
     <div class="piz">

       <div class="card">
  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi.2f67e39765579157227070eea5747e3b.1.jpg?width=300" id="510" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 class="pizzanames"><b>Pepsi</b></h4>

    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <br/>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="19">PRICE:<span class="vv" id="109">57</span>&#x20B9;</button>
  </div>
  </div>
  <div class="card">
  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/mirinda.318cc1f5619049ddb2635002c1386d44.1.jpg?width=300" id="511" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 class="pizzanames"><b>Mirinda</b></h4>

    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <br/>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="20">PRICE:<span class="vv" id="110">57</span>&#x20B9;</button>

  </div>
  </div>
     <div class="card">
  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/7-up.a9d875c96647c5eb48039d0473ab4158.1.jpg?width=300" id="512" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 class="pizzanames"><b>7-UP</b></h4>

    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <br/>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="21">PRICE:<span class="vv" id="111">57</span>&#x20B9;</button>

  </div>
  </div>
   <div class="card">

  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-black.acdc8e650b85044c65fbdeb386b859c6.1.jpg?width=300" id="513" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 class="pizzanames"><b>Pepsi Black</b></h4>

    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <br/>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="22">PRICE:<span class="vv" id="112">57</span>&#x20B9;</button>
</div>

  </div>
  </div>
  </div>
  <div class="Deserts">
  <hr/><h2><a name="des">Deserts</a></h2><hr/>
  <div class="piz">
  <div class="card">

  <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.b201f6f1676180a0e9d523d872a77705.1.jpg?width=300" id="514" onClick={(e)=>popup(e.target.id)}/>
  <div class="container">

    <h4 className="pizzanames"><b>Choco Lava Cake</b></h4>

    <img src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png" id="vegs"/>
    <br/>
    <button class="buy" onClick={(e)=>p(e.target.id)} id="23">PRICE:<span class="vv" id="113">99</span>&#x20B9;</button>
</div>
  </div>
  </div>
  </div>
  {isOpen && <Pop selected={state.selected} closepop={closepop}/>}
</div>
</main>
      <footer></footer>
    </div>
</React.Fragment>

		);}
export default HomeScreen;
