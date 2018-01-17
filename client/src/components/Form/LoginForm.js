import React from "react";

export const LoginForm = props =>
<div className="form-group"> 
	  <form action="/login" method="post">
	    <div>
	        <label>Username:</label>
	        <input type="text" name="username"/>
	    </div>
	    <div>
	        <label>Password:</label>
	        <input type="password" name="password"/>
	    </div>
	    <div>
	        <input type="submit" value="Log In"/>
	    </div>
	</form>
</div>;
  