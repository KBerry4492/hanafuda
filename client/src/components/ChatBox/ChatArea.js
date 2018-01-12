import React from "react";

export const ChatArea = props =>
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props}/>
  </div>;