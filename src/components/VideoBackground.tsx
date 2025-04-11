import { useRef } from 'react';
import blenderVideo from '../assets/Blender-video.mp4';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={blenderVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;