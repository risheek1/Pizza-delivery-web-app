import React from 'react';
import Login from './login.js'
import { Route } from 'react-router-dom'

function Loginpage()
{
	return(
	  <React.Fragment>
	        <Route exact path="/login">

      <Login />
      </React.Fragment>
	)
}
export default Loginpage;