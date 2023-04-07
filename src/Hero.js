import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const [typedText3, setTypedText3] = useState('');

  useEffect(() => {
    const text1 = "const BrookX = new Version(3.0);";
    const text2 = "BrookX.setSpecs({ power: 'unmatched', performance: 'unbeatable' });";
    const text3 = "BrookX.display();";

    let i = 0;
    let j = 0;
    let k = 0;

    const typeText1 = () => {
      if (i < text1.length) {
        setTypedText1(text1.substring(0, i + 1));
        i++;
        setTimeout(typeText1, 80);
      }
    };

    const typeText2 = () => {
      if (j < text2.length) {
        setTypedText2(text2.substring(0, j + 1));
        j++;
        setTimeout(typeText2, 60);
      }
    };

    const typeText3 = () => {
      if (k < text3.length) {
        setTypedText3(text3.substring(0, k + 1));
        k++;
        setTimeout(typeText3, 70);
      }
    };

    setTimeout(typeText1, 1000);
    setTimeout(typeText2, 2000);
    setTimeout(typeText3, 3500);

  }, []);

  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">Introducing the New <br/><strong>BrookX 3.0 PRO</strong></h1>
          <p className="hero__description">The most powerful and advanced AI. Developed by a Junior Software engineer that's just 15yo.</p>
          <button className="hero__button">Explore</button>
        </div>
        <div className="hero__code-container">
          <pre className="hero__code">
            <code>{typedText1}</code>
            <code>{typedText2}</code>
            <code>{typedText3}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Hero;
