import React, { Component } from 'react';
import axios from 'axios';
import './sliding.css';
import { Table } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,NavLink
} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import ImageGallery from 'react-image-gallery';
import ReactDOM from 'react-dom';




class Sliding extends Component {
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
  constructor(props){
    super(props);

    this.state = {};
    this.handleImageLoad=this.handleImageLoad.bind(this);
  }
  render(){
    const images = [
     {
       original: "https://image.ibb.co/daZbKQ/Apple_model_1.jpg",

     },
     {
       original: "https://image.ibb.co/daZbKQ/Apple_model_1.jpg",

     },
     {
       original: "https://image.ibb.co/daZbKQ/Apple_model_1.jpg",
       
     }
   ]
    return(
      <div>
        <ImageGallery
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
      </div>
    );
  }
}
  export default Sliding
