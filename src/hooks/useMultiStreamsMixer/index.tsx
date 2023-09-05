import { useEffect, useState } from 'react';

type StreamType = MediaStream | null;

export function useMultiStreamsMixer() {
  const [screenStream, setScreenStream] = useState<StreamType>(null);
  const [cameraStream, setCameraStream] = useState<StreamType>(null);

  useEffect(() => {
    async function captureScreen() {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: {
            cursor: "always",
            frameRate: 60
          },
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            sampleRate: 44100
          }
        });
        setScreenStream(stream);
      } catch (error) {
        console.log("navigator.getDisplayMedia error: ", error);
      }
    }

    async function captureCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            frameRate: 15,
            facingMode: 'user',
          },
          audio: true
        });
        setCameraStream(stream);
      } catch (error) {
        console.log("navigator.getUserMedia error: ", error);
      }
    }

    captureScreen();
    captureCamera();

    // Cleanup function to stop streams when the component unmounts
    return () => {
      if (screenStream) {
        screenStream.getTracks().forEach(track => track.stop());
      }
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const mixStreams = () => {
    if (screenStream && cameraStream) {
      // Both streams are available, you can now mix them
      // You can access them with their types as well (screenStream and cameraStream)
    }
  };

  return { screenStream, cameraStream, mixStreams };
}

export default useMultiStreamsMixer;
