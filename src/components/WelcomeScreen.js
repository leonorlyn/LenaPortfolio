import React, { useState, useEffect } from 'react';
import Fade from '@mui/material/Fade';
import { Typography } from '@mui/material';
import '../style/welcome.css'; // 确保你的样式路径正确
import profile from '../assets/LenaPic.JPEG';

function WelcomeScreen({ setShowWelcomeScreen, welcomeImg }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const words = ['hello', 'hola', '你好', 'i am Lena'];
  const fullText = "Frontend Developer | Backend Developer | Full Stack Developer";

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);


  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
      }, 1000); // 每秒更新一次词语
      return () => clearTimeout(timer);
    } else {
      // 所有欢迎词语显示完毕后，开始显示打字效果
      let i = 0;
      const typingTimer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText((prev) => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(typingTimer);
          setShowButton(true);
        }
      }, 100); // 调整打字速度
      return () => clearInterval(typingTimer);
    }
  }, [currentWordIndex, words.length, fullText]);

  return (
    <div className="welcomeScreen" style={{ textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {currentWordIndex < words.length ? (
        <Typography variant="h4">{words[currentWordIndex]}</Typography>
      ) : (
        <Fade in={true} timeout={500}>
          <div style={{ display: 'fixed', justifyContent: 'space-around', alignItems: 'left', width: '100%' }}>
            <img src={profile} alt="Lena" style={{ maxWidth: '500px', position: 'fixed', right: '150px', top: '70px' }} />
            <div style={{ position: 'fixed', left: '190px', maxWidth: '400px', top: '200px' }}>
            <Typography style={{position: 'flex', left:'240px', maxWidth: '400px'}}>{typedText}</Typography>
                <Fade in={showButton} timeout={500}>
                    <button onClick={() => setShowWelcomeScreen(false)} style={{ marginTop: '200px' }}>
                        Enter Site
                    </button>
                </Fade>
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
}

export default WelcomeScreen;
