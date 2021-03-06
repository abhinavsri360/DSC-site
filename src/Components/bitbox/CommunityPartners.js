import React from 'react';
import { Typography, Button, Container, Box } from '@material-ui/core';
import CommunityCard from './CommunityCard';


export default function CommunityPartners(props) {

  return (
    <div className='sponsors'>
      <Typography
      data-aos="flip-down"
        variant='h3'
        component='p'
        className='dsc-font'
        align='center'
      >
        Community Partners
      </Typography>

      
      <div className="sponsor-container">
        <CommunityCard key="0" src={require('../../images/sponsors/dscLogo.png')} link="https://linktr.ee/developer_student_community" />
        <CommunityCard key="0" src={require('../../images/sponsors/codingculture.jpg')} link=" http://thecodingculture.com/" />
      </div>

      <a href="https://forms.gle/CexfaeJN6Mx6jQNr6" target="_blank" style={{color: "inherit", textDecoration: "none"}}> 
        <Button
            data-aos="fade-up"
            className='mt-9 hero-btn mentor-btn'
            variant='contained'
            color='primary'
            style={{ background: '#ec407a', margin: '4rem auto 4rem auto', display:'block' }}
        >
        Become a Community Partner
        </Button>
        </a>
    </div>
  );
}
