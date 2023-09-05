import React, { useEffect } from 'react';
import { useMultiStreamsMixer } from '@/hooks';
const Live = () => {
  const { screenStream, cameraStream, mixStreams } = useMultiStreamsMixer();
  useEffect(() => {
    if (screenStream && cameraStream) {
      // Both streams are available, you can now mix them
      mixStreams();
    }
  }, [screenStream, cameraStream, mixStreams]);
  return (
    <div>
      <video
        autoPlay
        playsInline
        ref={(videoElement) => {
          if (videoElement) {
            // Assign the mixed stream to the video element
            videoElement.srcObject = screenStream;
          }
        }}
      />
      <video
        autoPlay
        playsInline
        ref={(videoElement) => {
          if (videoElement) {
            // Assign the camera stream to the video element
            videoElement.srcObject = cameraStream;
          }
        }}
      />
    </div>
  );
};

export default Live;
