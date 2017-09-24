import React, { Component } from 'react';
import axios from 'axios';
import './item.css';
import {
  BrowserRouter as Router,
  Route,
  Link,NavLink
} from 'react-router-dom';


class Itemlist extends Component {
componentWillMount(){
  this.getItems();
}

getItems(){
  axios.get('https://api.myjson.com/bins/6xz1l')
  .then(res=>{
    const posts=res.data.Laptop;
    console.log(posts);
    this.setState({posts:posts})
  })
}

constructor(props){
  super(props);
  this.state = {
    posts:[],
    id:''
  };
  this.getItems=this.getItems.bind(this);

}

  render(){
    return(
      <div className='container'>
      <h1>Item List </h1>
      <h5>Click on image to select</h5>
      <div id='list' width = "device-width">
      {this.state.posts.map(post=>
         <Link key={post.id} className='button' to={'/'+post.model}>
           <img src={post.img0} />
         </Link>

        )}
      </div>
    </div>
    );
  }
}
export default Itemlist
