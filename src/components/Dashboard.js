import React from 'react';
import webScrap from '../images/web-scraping-explain.mp4';
import arrow from '../images/arrow.png';
import bg2 from '../images/bg2.jpg'; // Make sure this is used correctly
import { Link } from 'react-router-dom';
import Chart from './chart';

function Dashboard() {
  return (
    <div>
      <div
        className='h-screen flex items-center justify-between px-12'
        style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='justify-center w-1/2 pr-10'>
          <h1 className='text-6xl text-wrap font-bold mb-4'>What is Web Scraping & Data Monitoring?</h1>
          <Link to={'/guide'}>
            <button className='text-lg flex items-center gap-2 rounded-3xl bg-emerald-500 text-white px-6 py-2 mt-32'>
              Learn More
              <img src={arrow} alt="arrow" className='w-8 h-8' />
            </button>
          </Link>
        </div>
        <div className='w-1/2'>
          <video src={webScrap} controls autoPlay muted className='w-full h-full object-cover rounded-lg'></video>
        </div>
      </div>

      <div className='h-screen text-white flex'>
        
        <Chart />
      </div>

      <div className='h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-3xl'>More Content</h1>
      </div>
      <div className='h-screen bg-gray-800 text-white flex items-center justify-center'>
        <h1 className='text-3xl'>Final Section</h1>
      </div>
    </div>
  );
}

export default Dashboard;
