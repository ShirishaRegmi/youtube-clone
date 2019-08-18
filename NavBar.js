import React from 'react';

class NavBar extends React.Component {
   
  state={
    term: 'upGrad'
  };
  handleChange = (event) => {
    this.setState({term: event.target.value});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleButtonSubmit(this.state.term);
  };
  render(){
  return (
    <div style={{backgroundColor: "#FFFFFF",
    padding: "11px",
    paddingUp: "4px",
    textAlign: "center",
    webkitBoxShadow: "0 8px 6px -6px #D7D7D7",
    mozBoxShadow: "0 8px 6px -6px #D7D7D7",
    boxShadow: "0 8px 6px -6px #D7D7D7"}}>
      <input onChange={this.handleChange} type="text" placeholder="Search" style={{marginRight: "2px", padding: "2px", width: "300px" }}/>
      <button onClick={this.handleSubmit} value={this.state.term} style={{ marginLeft: "2px", padding: "3px", width: "70px", backgroundColor: "#FFFFFF", border: "1px solid #A9A9A9"}}>Search</button>
   </div>
  );
  }
}

export default NavBar;
