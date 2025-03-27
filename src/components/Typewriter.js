import React, { useState, useEffect } from 'react';

const roles = ["Designer", "Web Developer", "Data Scientist"];

function Typewriter() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && charIndex < currentRole.length) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 150);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Pause at the full text before starting to delete
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && charIndex === 0) {
      // Move to next role
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, charIndex, roleIndex]);

  return <span>{text}</span>;
}

export default Typewriter;
