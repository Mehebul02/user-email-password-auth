import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const [typingStatus, setTypingStatus] = useState('Initializing');
    return (
        <div className='min-h-[calc(100vh-160px)] flex justify-center items-center text-6xl font-bold text-yellow-700'>
            {/* <h1 className='border-2 border-red-800 min-h-[calc(100vh-160px)] text-6xl font-bold  flex justify-center items-center'>Mehebul Alif</h1> */}
            <TypeAnimation
  sequence={[
    1500,
    () => {
      setTypingStatus('Typing...');
    },
    'Mehebul Alif',
    () => {
      setTypingStatus('Done Typing');
    },
    1000,
    () => {
      setTypingStatus('Deleting...');
    },
    '',
    () => {
      setTypingStatus('Done Deleting');
    },
  ]}
  repeat={Infinity}
/>;
        </div>
    );
};

export default Home;