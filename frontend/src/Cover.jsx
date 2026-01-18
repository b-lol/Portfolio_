import { useState } from 'react'

function Cover() {

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragDistance, setDragDistance] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const distance = e.clientX - startX
    if (distance > 0) {
      setDragDistance(distance)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }


  const coverStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width:'100vw',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:1000,
  }

  const textStyle = {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '0.5rem',
  }

  return (
    <div 
      style={coverStyle}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}

    >
      <p>Help the figure</p>
      <p style={{...textStyle, color: '#666', fontSize: '1rem'}}>(click and drag)</p>
      
      <svg 
        width="100" 
        height="150"
        viewbox = "0 0 250 120" 
        style={{
          marginTop: '2rem', 
          cursor: isDragging ? 'grabbing' : 'grab',
          transform: `translateX(${dragDistance}px)`,
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Rope */}
        <line x1="0" y1="50" x2="55" y2="50" stroke="#333" strokeWidth="3"/>
        
        {/* Purple ball */}
        <circle cx="10" cy="10" r="10" fill="#4A2C6A" stroke="#333" strokeWidth="2"/>
      </svg>
      <p style={{marginTop: '1rem', color: '#999'}}>Drag distance: {dragDistance}px</p>
    </div>
  )
}

export default Cover