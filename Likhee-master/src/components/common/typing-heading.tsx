
'use client';

import type React from 'react';
import { useState, useEffect } from 'react';

interface TypingHeadingProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  cursorClassName?: string;
  loopDelay?: number;
}

const TypingHeading: React.FC<TypingHeadingProps> = ({
  text,
  className,
  typingSpeed = 70,
  cursorClassName = 'animate-blink',
  loopDelay = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (text.length === 0) {
      setDisplayedText('');
      return;
    }

    let charIndex = 0;
    let currentText = '';
    let typingIntervalId: NodeJS.Timeout;
    let restartTimeoutId: NodeJS.Timeout;

    const type = () => {
      setShowCursor(true);
      if (charIndex < text.length) {
        currentText += text.charAt(charIndex);
        setDisplayedText(currentText);
        charIndex++;
        typingIntervalId = setTimeout(type, typingSpeed);
      } else {
        // Text fully typed, pause with cursor, then restart
        restartTimeoutId = setTimeout(() => {
          charIndex = 0;
          currentText = '';
          setDisplayedText('');
          type();
        }, loopDelay);
      }
    };

    setDisplayedText('');
    type();

    return () => {
      clearTimeout(typingIntervalId);
      clearTimeout(restartTimeoutId);
    };
  }, [text, typingSpeed, loopDelay]);

  return (
    <h1 className={className}>
      {displayedText}
      {showCursor && <span className={cursorClassName}>|</span>}
    </h1>
  );
};

export default TypingHeading;
