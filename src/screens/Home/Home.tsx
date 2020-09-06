import React, { useEffect } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as HomePin } from '../../assets/images/icons/pin.svg';
import { ReactComponent as HomeWriting } from '../../assets/images/icons/writing.svg';
import { ReactComponent as HomeCheck } from '../../assets/images/icons/check.svg';
import axios from 'axios';

interface Home {

}

const Home: React.FC<Home> = () => {

  useEffect(() => {
    const request = axios.get(`https://gifi.carl.rightbrain.cloud/api/v1/permitApplicationKeyValues/`, {
      'headers': {
        'Content-Type': 'application/json',
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudF9pZCI6MSwiYXV0aG9yaXplZCI6dHJ1ZSwiZXhwIjoxNTgzODI0MDQzfQ.ZKPas_MwULoe4fgut2hlSaqEj_raWcmJm43xX7bqiSk'
      }
    })
    .then(response=>console.log(response))
  });


  return (
    <div className="home-wrapp">
      <div className="home-overlay"></div>
      <Container className="container">
        <h1>Local Council Permits <br /> in 3 easy steps</h1>
        <div className="row">
          <Grid sm={12} md={12} className="home-box">
            <div className="wrapp">
              <HomePin />
              <h2>Pick Your Locality</h2>
            </div>
          </Grid>
          <Grid sm={12} md={12} className="home-box">
            <div className="wrapp">
              <HomeWriting />
              <h2>Choose Permit Type</h2>
            </div>
          </Grid>
          <Grid sm={12} md={12} className="home-box">
            <div className="wrapp">
              <HomeCheck />
              <h2>Review</h2>
            </div>
          </Grid>
        </div>
        <div className="row">
          <Link to="permits/application" className="home-btn">
            <span>Start Application</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
