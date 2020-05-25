
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name: 0
    }
    }
    plus=()=>
    {this.setState({name : this.state.name+1})}
    minnus=()=>
    {if(this.state.name > 0)
      {
      this.setState({name : this.state.name-1})}
    }
    reset = ()=>
    {
      this.setState({name : 0})
    }
  render() {
  return (
    <div>
      <Container fixed><AppBar style={{alignItems:"center",fontSize:"50px",backgroundColor:"pink"}}><h9>Counter</h9></AppBar>
      <container style={{position:"absolute",top:"100px",left:'600px',border:"solid",paddingTop:"50px",paddingLeft:"50px",paddingRight:"100px",width:"250px"}}>
      <br/>
      <Box style={{fontSize:"70px",position:"absolute",top:"10px",left:'175px',}}>{this.state.name}</Box><br/>
            <br/>
      <Button variant="contained" style={{  color:"white",backgroundColor:"orange",fontSize:"30px", left:"-50px"}} onClick={this.minus} >
        -</Button>
        <Button variant="contained" style={{ color:"white",position:"absolute",backgroundColor:"green",left:"130px",fontSize:"30px"}} onClick={this.reset}>
       reset</Button>
     <Button variant="contained" style={{position:"absolute",
     color:"white", backgroundColor:"blue",right:"1px",fontSize:"30px" }} onClick={this.plus}>
        +</Button>

     </container>
     </Container>
    </div>
  );
}
}
export default App;
