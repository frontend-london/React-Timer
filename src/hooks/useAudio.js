import { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  audio.loop = true;

  useEffect(
    () => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  return [playing, setPlaying];
};

export default useAudio;