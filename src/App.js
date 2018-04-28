import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {zoom: 17};

  zoomIn = () => this.setState({zoom: this.state.zoom + 1});

  render() {
    const { zoom } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.zoomIn}>Zoom In</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Map
          zoom={zoom}
          isMarkerShown={true}
          location={{lat: 24.828797, lng: -107.441531}}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    zoom={props.zoom}
    defaultZoom={17}
    defaultCenter={{lat: 24.828797, lng: -107.441531}}
    center={props.location}
    defaultOptions={{ disableDefaultUI: true, gestureHandling: 'none' }}
  >
    {props.isMarkerShown && <Marker position={props.location} />}
  </GoogleMap>
));
