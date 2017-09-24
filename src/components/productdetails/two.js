import React, { Component } from 'react';
import axios from 'axios';
import './one.css';
import { Table } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,NavLink
} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import Sliding from '../sliding';

var id=1;
class Two extends Component {
  componentWillMount(){
    this.getItems();
  }

handleImageLoad(event){
  console.log("image loaded",event.target )
}


getItems(){
  axios.get('https://api.myjson.com/bins/6xz1l')
  .then(res=>{
    const array=res.data.Laptop;
    const posts=res.data.Laptop[id].img1;
    const Ram=res.data.Laptop[id].Ram;
    const desc=res.data.Laptop[id].details;
    const titulo=res.data.Laptop[id].titulo;
    const storage=res.data.Laptop[id].storage;
    const lapcolor=res.data.Laptop[id].color;
    const price=res.data.Laptop[id].Price;
    const model=res.data.Laptop[id].model;


    this.setState({posts:posts});
    this.setState({Ram:Ram});
    this.setState({desc:desc});
    this.setState({titulo:titulo});
    this.setState({storage:storage});
    this.setState({lapcolor:lapcolor});
    this.setState({price:price});
    this.setState({model:model});




  })
}
//<img src={this.state.posts}/></section><br/>
constructor(props){
  super(props);

  this.state = {
    posts:'',
    Ram:'',
    desc:'',
    titulo:'',
    storage:'',
    lapcolor:'',
    price:'',
    model:''

  };
  this.getItems=this.getItems.bind(this);
  this.handleImageLoad=this.handleImageLoad.bind(this);
}
  render(){

    return(
      <div  className='container' id="main">
        <h1>Product Description </h1>

      <section>
<img src={this.state.posts}/>
 </section>
<h3>Product Details</h3>
        <div id='desc'>
<Row>
  <Col sm={8}>
        {this.state.desc}
</Col>
<Col sm={4}>
         <Table responsive>
      <tbody>
        <tr>
          <th>Ram</th>
          <td>{this.state.Ram}</td>
        </tr>
        <tr>
          <th>Model</th>
          <td>{this.state.titulo}</td>
        </tr>
        <tr>
          <th>Storage</th>
          <td>{this.state.storage}</td>
        </tr>
        <tr>
          <th>color</th>
          <td>{this.state.lapcolor}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>{this.state.price}</td>
        </tr>
      </tbody>
    </Table>
  </Col>
</Row>
       <br/>
       </div>
        <div id="linkbutton">
         <Link  className='button' to={'./tunningcomponents/'+this.state.model}>
           Select
         </Link>
       </div>
       </div>


    );
  }
}
export default Two
