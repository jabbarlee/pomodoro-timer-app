import React from 'react'

function SelectTimer({ firstTimer, secondTimer, thirdTimer, occasion, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
    }}>
      <select style={{
        backgroundColor: '#660708',
        color: 'white',
        border: 'none',
        borderRadius: '15px',
        padding: '10px'
      }} onChange={handleChange}>
        <option value={firstTimer}>{firstTimer} min</option>
        <option value={secondTimer}>{secondTimer} min</option>
        <option value={thirdTimer}>{thirdTimer} min</option>
      </select>
      <label style={{
        color: 'white'
      }}>{occasion}</label>
    </div>
  )
}

export default SelectTimer
