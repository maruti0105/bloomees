import React, {Component} from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import './tune.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {Container, Row, Col} from 'react-grid-system';

var lattitude;
var lngitude;
var id = 16;
const AnyReactComponent = ({text}) => (
  <div style={{
    position: 'relative',
    color: 'white',
    background: 'red',
    height: 40,
    width: 60,
    top: -20,
    left: -30
  }}>
    {text}
  </div>
);

class Tuneseventeen extends Component {
  componentWillMount() {
    this.getItems();

  }

  getItems() {
    axios.get('https://api.myjson.com/bins/6xz1l').then(res => {
      const posts = res.data.Laptop[id].img1;
      lattitude = res.data.Laptop[id].lat;
      lngitude = res.data.Laptop[id].lng;
      const city = res.data.Laptop[id].city;

      this.setState({posts: posts});
      this.setState({lattitude: lattitude});
      this.setState({lngitude: lngitude});
      this.setState({city: city});


    })
  }

  handleChange(date) {
    this.setState({startDate: date});
  }
  static defaultProps = {
    center: {
      lat: 40.4168,
      lng: 3.7038
    },
    zoom: 11
  };

  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      lattitude: '',
      lngitude: '',
      city: '',
      startDate: moment(),
      center:''
    };
    this.getItems = this.getItems.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  render() {
    return (
      <div  className='container'>
        <h1>Product Shipping Details</h1>
          <Row>
            <Col sm={6}>
          <div className="image">
            <h3>Product Image</h3>
            <img src={this.state.posts}/><br/>
          </div>
        </Col>
        <Col sm={6} id="map">
            <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
              <AnyReactComponent lat={this.state.lattitude} lng={this.state.lngitude} text={this.state.city}/>
            </GoogleMapReact>
          </Col>
            </Row>

        <br/>
          <Row>
            <Col sm={6}>
          <Button id='reserve' bsStyle="primary">Reserve</Button>
          <br/>
          <br/>
          <Button id='build' bsStyle="primary">Build for me</Button>
        <br/>
        <br/>
        </Col>
        <Col sm={6}>
          <a>Enable detection</a><br/>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
          <br/>
          <br/>
          <a>Install interstellar turbo boost</a><br/>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
          <br/>
          <br/>
          <a>Reservation date</a><br/>
          <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>;
          <label>
            <br/>
            <br/>
            Passanger:
            <br/>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          <br/><br/><br/>
</Col>
</Row>
</div>
    );
  }
}
export default Tuneseventeen
