import React, { Component } from 'react';
import { BrowserRouter,  NavLink } from "react-router-dom";
import { connect } from 'react-redux';


import Typography from '@material-ui/core/Typography';


import Player from './components/MusicPlayer/Player';
import Router from './Routes/Router/Router';

import { getAlbums } from './actions/albums';
import { getSongs } from './actions/songs';

// Css
import './App.css';
import Footer from './Layout/Footer';


class App extends Component {
  async componentDidMount() {
    this.props.getAlbums();
    this.props.getSongs();
  }

  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <div className = "row">
          <Typography variant="h5" color="inherit" noWrap className = "Typography">
                  <NavLink className="nav-link" activeClassName="active" exact to="/">Reactify Web</NavLink>
          </Typography>
          <nav className="col co-sm-10">
            <ul className="nav justify-content-around">
              <li className="nav-item">
              { this.props.user.signedIn ? 
                    <NavLink className="nav-link" activeClassName="active" to="/login"> Hola {this.props.user.name}</NavLink>
                  :  <NavLink className="nav-link" activeClassName="active" to="/login"> Login</NavLink>
                  }
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link active" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/albums">Albums</NavLink>
              </li>
            </ul>
          </nav>

        </div>
         
          <div>
            <Player />
            <Router user={this.props.user} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state/*, otherProps */) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSongs: () => dispatch(getSongs()),
  getAlbums: () => dispatch(getAlbums()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
