import React, { useEffect } from 'react';

const AudioPlayer = () => {
  useEffect(() => {
    // Use the direct Dropbox link here
    const audio = new Audio('https://www.dropbox.com/scl/fi/lu9kj8k7lxinvsqlqd6kg/davidtaosp.mp3?rlkey=hrrcdtr5bcqud3fmjqfrggpy3&dl=1');
    audio.play().catch(error => console.error("Error playing audio:", error));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div>
      <p>Enjoy the music!</p>
    </div>
  );
};

export default AudioPlayer;
