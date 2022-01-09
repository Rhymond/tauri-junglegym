import {useEffect, useState} from "react";

const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
  };
};

export default useVideoPlayer;
