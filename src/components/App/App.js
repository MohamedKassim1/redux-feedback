import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Review/Review';
import Review from '../Review/Review';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <HashRouter>
          <Route exact path="/" render={(props)=><Feelings {...props} dispatch={this.props.dispatch}/>}/>
          <Route path="/understanding" render={(props)=><Understanding {...props} dispatch={this.props.dispatch}/>}/>
          <Route path="/support" render={(props)=><Support {...props} dispatch={this.props.dispatch}/>} />
          <Route path="/comments" render={(props)=><Comments {...props} dispatch={this.props.dispatch}/>}/>
          <Route path="/review" render={(props)=> <Review {...props} dispatch ={this.props.dispatch}/>}/>
        </HashRouter>
        {/* <Feelings /> */}
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) => ({reduxState});
export default connect(reduxStateToProps)(App);
