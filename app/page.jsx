'use client'

import Link from 'next/link'
import SelectTimer from './components/SelectTimer'
import { useState, useEffect } from 'react'

export default function Home() {
  const [workTimer, setWorkTimer] = useState();
  const [breakTimer, setBreakTimer] = useState();

  const handleWorkChange = (e) => {
    setWorkTimer(e)
    localStorage.setItem('workTimer', workTimer);
  }

  const handleBreakChange = (e) => {
    setBreakTimer(e);
    localStorage.setItem('breakTimer', breakTimer);
  }

  return (
    <div className="main-page">
      <p style={{
        color: 'white',
        fontSize: '24px'
      }}>Welcome to Pomodoro timer</p>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        alignItems: 'center'
      }}>
        <SelectTimer 
          firstTimer={25}
          secondTimer={45} 
          thirdTimer={60} 
          occasion='Work'
          onChange={handleWorkChange}
        />
        <SelectTimer 
          firstTimer={5}
          secondTimer={10} 
          thirdTimer={15} 
          occasion='Break'
          onChange={handleBreakChange}
        />
      </div>
      <Link href='/timer'>
        <button className="buttons">
            Let's start!
        </button>
      </Link>
    </div>
  );
}
