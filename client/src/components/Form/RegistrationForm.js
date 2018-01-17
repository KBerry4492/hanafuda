import React from "react";

export const RegistrationForm = props =>
<div className="form-group">  
	<form action="/login" method="post">
	  <div>
	      <label>Email:</label>
	      <input type="text" name="email"/>
	  </div>
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