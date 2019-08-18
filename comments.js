import React from 'react';

import './App.css';

class Comments extends React.Component
{
  render()
  {
    return(
      <div style={{marginRight:"5px", marginLeft:"5px"}}>
            <p style={{fontWeight:"bold"}}> Comments </p>
            <br/>
            <input type="text" placeholder="Your Name" id="name" defaultvalue=" " style={{padding:"5px", float:"left", width:"250px"}}></input>
            <input type="text" placeholder="Your Comment" id="comment" defaultvalue=" " style={{padding:"5px", float:"right", width:"250px"}}></input>
            <br/> <br/>
          <div style={{float:"right"}}>
            <button style={{backgroundColor:"white", padding:"5px", width:"80px", marginRight:"20px"}} onClick="comment">Comment</button>
            <button style={{backgroundColor:"white", padding:"5px", width:"80px"}}>Cancel</button>
          </div>
          <br/>
      </div>
    );
    function comment(){
     let name = document.getElementsByTagName("input")[0].value;
      let comment = document.getElementsByTagName("input")[1].value;
      return(
        <div>
          <p style={{fontWeight:"bold"}}>{name}</p>
          <p>{comment}</p>

        </div>
      );
    }
  }
}

export default Comments;