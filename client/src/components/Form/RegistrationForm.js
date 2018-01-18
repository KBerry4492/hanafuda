import React from "react";

export const RegistrationForm = props =>
<div className="form-group">  
	<form action="/register" method="post">
	  <div>
	      <label>Username:</label>
	      <input type="text" name="username"/>
	  </div>
	  <div>
	      <label>Password:</label>
	      <input type="password" name="password"/>
	  </div>
	  <div>
	      <input type="submit" value="Sign Up"/>
	  </div>
	</form>
</div>;