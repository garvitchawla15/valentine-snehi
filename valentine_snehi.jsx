import React, { useState } from 'react';

export default function ValentinePage() {
  const [yesSize, setYesSize] = useState(1);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [noButtonStyle, setNoButtonStyle] = useState('relative');

  const handleNoHover = () => {
    setYesSize(prev => prev + 0.2);
    setAttempts(prev => prev + 1);
    
    setNoButtonStyle('fixed');
    
    // Random position anywhere on screen
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = 150;
    const buttonHeight = 50;
    
    const randomX = Math.random() * (windowWidth - buttonWidth - 40) + 20;
    const randomY = Math.random() * (windowHeight - buttonHeight - 40) + 20;
    
    setNoPosition({
      x: randomX,
      y: randomY
    });
  };

  const handleYesClick = () => {
    setShowCelebration(true);
    
    // Create confetti
    const newConfetti = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        color: ['#ff1493', '#ff69b4', '#ff85c1', '#ffc0cb'][Math.floor(Math.random() * 4)]
      });
    }
    setConfetti(newConfetti);
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #ffeef8 0%, #ffe0f0 100%)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating background hearts */}
      {[
        { left: '10%', top: '20%', delay: '0s', emoji: '💖' },
        { left: '80%', top: '30%', delay: '1s', emoji: '💕' },
        { left: '15%', top: '70%', delay: '2s', emoji: '❤️' },
        { left: '85%', top: '60%', delay: '1.5s', emoji: '💗' },
        { left: '50%', top: '10%', delay: '0.5s', emoji: '💝' },
        { left: '30%', top: '85%', delay: '2.5s', emoji: '💓' },
        { left: '70%', top: '80%', delay: '3s', emoji: '💞' }
      ].map((heart, i) => (
        <div key={i} style={{
          position: 'fixed',
          left: heart.left,
          top: heart.top,
          fontSize: '30px',
          opacity: 0.6,
          pointerEvents: 'none',
          animation: `float 6s ease-in-out infinite ${heart.delay}`
        }}>
          {heart.emoji}
        </div>
      ))}

      {/* Confetti */}
      {confetti.map(c => (
        <div key={c.id} style={{
          position: 'fixed',
          left: `${c.left}%`,
          top: '-10px',
          width: '10px',
          height: '10px',
          background: c.color,
          animation: `fall 3s linear ${c.delay}s`
        }} />
      ))}

      <div style={{
        textAlign: 'center',
        padding: '40px',
        background: 'white',
        borderRadius: '30px',
        boxShadow: '0 20px 60px rgba(255, 105, 180, 0.3)',
        maxWidth: '500px',
        margin: '20px',
        position: 'relative'
      }}>
        {!showCelebration ? (
          <div>
            <h1 style={{
              color: '#ff1493',
              fontSize: '2.5em',
              marginBottom: '20px',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}>
              Snehi, Will you be my Valentine? 💕
            </h1>
            
            <div style={{ margin: '20px 0' }}>
              <img 
                src="/mnt/user-data/uploads/WhatsApp_Image_2025-12-07_at_11_39_27_PM__1_.jpeg"
                alt="Us together"
                style={{
                  width: '250px',
                  height: '250px',
                  objectFit: 'cover',
                  margin: '20px auto',
                  borderRadius: '50%',
                  animation: 'gentle-bounce 2s ease-in-out infinite',
                  border: '5px solid #ff69b4',
                  boxShadow: '0 10px 30px rgba(255, 105, 180, 0.3)'
                }}
              />
            </div>
            
            <p style={{
              color: '#666',
              fontSize: '1.2em',
              marginBottom: '40px'
            }}>
              I promise to make it special! 🌹
            </p>
            
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              minHeight: '100px',
              position: 'relative'
            }}>
              <button
                onClick={handleYesClick}
                style={{
                  background: 'linear-gradient(135deg, #ff1493 0%, #ff69b4 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 40px',
                  fontSize: '1.2em',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(255, 20, 147, 0.4)',
                  transform: `scale(${yesSize})`,
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                Yes! 💖
              </button>
              
              <button
                onMouseEnter={handleNoHover}
                style={{
                  background: '#f0f0f0',
                  color: '#666',
                  border: '2px solid #ddd',
                  padding: '15px 40px',
                  fontSize: '1.2em',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  position: noButtonStyle,
                  left: noButtonStyle === 'fixed' ? `${noPosition.x}px` : 'auto',
                  top: noButtonStyle === 'fixed' ? `${noPosition.y}px` : 'auto',
                  transform: `scale(${Math.max(0.3, 1 - (attempts - 3) * 0.15)})`,
                  transition: 'all 0.2s ease',
                  zIndex: 1000
                }}
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '4em', margin: '20px 0' }}>💕</div>
            <h2 style={{
              color: '#ff1493',
              fontSize: '2em',
              margin: '20px 0'
            }}>
              Yay! I'm so happy! 🎉
            </h2>
            
            <div style={{ margin: '20px 0' }}>
              <img 
                src="https://media.giphy.com/media/osjgQPWRx3cac/giphy.gif"
                alt="Happy celebration"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain',
                  margin: '20px auto',
                  borderRadius: '20px'
                }}
              />
            </div>
            
            <p style={{
              color: '#666',
              fontSize: '1.2em',
              marginBottom: '20px'
            }}>
              You just made me the happiest person! ❤️
            </p>
            
            <div style={{ margin: '20px 0' }}>
              <img 
                src="https://media.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif"
                alt="Hearts"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'contain',
                  borderRadius: '15px'
                }}
              />
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}