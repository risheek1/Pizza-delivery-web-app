import React,{useState} from 'react';
import history from "./history.js";
import axios from 'axios';
 function Checkout (props)
{
 const [state,setState]=useState({
  name:"N",
  address1:"N",
  lastname:"N",
  email:"N",
  city:"N",
  pincode:"N",
  phonenumber:"N",
  set:false
 });
 const o=(e)=>
 {
    e.preventDefault();
    const fd = new FormData();
    fd.append('first',state.firstName);
    fd.append('lastName',state.lastname);
    fd.append('email',state.email);
    fd.append('city',state.city);
    fd.append('pincode',state.pincode);
    fd.append('phonenumber',state.phonenumber);
    fd.append('address',state.address1);
  
      var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials":"true",
            "Access-Control-Allow-Headers":"content-type",
            "Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, PATCH, OPTIONS" 
        }
            axios.post('http://localhost/core.php', fd, headers
    ).then(res=>
    {
     alert(res.data.data);
       setState(prevState=>{ 
        return{...prevState,set:true} }); 
    }
    );    
 
     history.push('/ordercompletion')
     window.location.reload();
 }
 const c=()=>
 {

  window.location.href="https://www.paypal.com/in/signin";
 }

const name=(e)=>
{  
  setState(prevState=>{ 
        return{...prevState,name:e.target.value} }); 
      console.log(state.name)
}
const last=(e)=>
{

setState(prevState=>{ 
        return{...prevState,last:e.target.value} }); 
}
const mail=(e)=>
{
  setState(prevState=>{ 
        return{...prevState,email:e.target.value} }); 
}
const ad1=(e)=>
{
  setState(prevState=>{ 
        return{...prevState,address1:e.target.value} }); 
} 
const ad2=(e)=>
{
  setState(prevState=>{ 
        return{...prevState,city:e.target.value} }); 
  console.log(state)
}
const pin=(e)=>
{

   setState(prevState=>{ 
        return{...prevState,pincode:e.target.value} }); 
}
const phone=(e)=>
{

 setState(prevState=>{ 
        return{...prevState,phonenumber:e.target.value} }); 
}
const b=()=>
{
  document.getElementById("e").remove();
  document.getElementById("ee").remove();
}
  return(
<React.Fragment>
<div>
       <header>
         <div className="brand">
         <a href="index.html"><img src="https://1000logos.net/wp-content/uploads/2019/07/Pizza-Hut-logo-1999%E2%80%932014.jpg" width="130"/></a>
         </div>
         <nav>
  </nav>
  </header>
  <hr/>
  <div class="container">
    <div class="py-5 text-center">
     <h2>Checkout</h2>      
    </div>
    <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3 sticky-top">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Paneer Tikka Pizza</h6>
                        <small class="text-muted"></small>
                    </div>
                    <span class="text-muted">&#x20B9;150</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Chicken Supreme Pizza</h6>
                        <small class="text-muted"></small>
                    </div>
                    <span class="text-muted">&#x20B9;299</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Pepsi</h6>
                        <small class="text-muted"></small>
                    </div>
                    <span class="text-muted">&#x20B9;57</span>
                </li>
              <li class="list-group-item d-flex justify-content-between">
              <span>Tax(INR)</span>
              <strong>&#x20B9;45.25</strong>
              </li>
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total (INR)</span>
                    <strong>&#x20B9;506</strong>
                </li>
            </ul>
      
        </div>
        <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" class="form-control" id="firstName" onChange={(e)=>name(e)}/>
                    
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" onChange={(e)=>last(e)} />
                        <div class="invalid-feedback"> Valid last name is required. </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                        <label for="firstName">Phone Number</label>
                        <input type="text" class="form-control" id="firstName" onChange={(e)=>phone(e)}/>
                    
                    </div>
                <div class="mb-3">
                    <label for="email">Email <span class="text-muted">(Optional)</span></label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com" onChange={mail}/>
                    <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                </div>
                <div class="mb-3">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="" required="" onChange={(e)=>ad1(e)}/>
                    <div class="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                <div class="mb-3">
                    <label for="address2">City <span class="text-muted"></span></label>
                    <input type="text" class="form-control" id="address2" placeholder="" onChange={(e)=>ad2(e)}/>
                </div>
                <div class="mb-3">
                    <label for="address">Pin Code</label>
                    <input type="text" class="form-control" id="address" placeholder="" required="" onChange={(e)=>pin(e)}/>
                    <div class="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                                <hr class="mb-4"/>
                <hr class="mb-4"/>
                <h4 class="mb-3">Payment</h4>
                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input"  required=""/>
                        <label class="custom-control-label" for="credit">Credit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                        <label class="custom-control-label" for="debit">Debit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                        <label class="custom-control-label" for="paypal" onClick={c}>PayPal</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="cash" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                        <label class="custom-control-label" for="cash" onClick={b}>Cash</label>
                    </div>
                </div>
                <div class="row" id="e">
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback"> Name on card is required </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder=".... .... .... ...." required=""/>
                        <div class="invalid-feedback"> Credit card number is required </div>
                    </div>
                </div>
                <div class="row" id="ee">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="MM/YY" required=""/>
                        <div class="invalid-feedback"> Expiration date required </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="****" required=""/>
                        <div class="invalid-feedback"> Security code required </div>
                    </div>
                </div>
                <button class="bt"   type="Submit" onClick={(e)=>o(e)}>Continue to checkout</button>
            <hr/>
            </form>
        </div>
    </div>
  
</div>
  </div>
</React.Fragment>
);
}
export default Checkout;