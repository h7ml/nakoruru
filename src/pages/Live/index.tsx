import React, { useEffect, useRef } from 'react';
import MultiStreamsMixer from 'multistreamsmixer';
import { Button, Space, Spin } from 'antd';

const Live = () => {
  const videoRef = useRef(null);
  const mixerRef = useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGetMixedStream = async () => {
    setIsLoading(true);

    const microphone1 = await navigator.mediaDevices.getUserMedia({ audio: true });
    const microphone2 = await navigator.mediaDevices.getUserMedia({ audio: true });
    const streamsToMix = [microphone1, microphone2];

    const mixer = new MultiStreamsMixer(streamsToMix);

    const mixedStream = mixer.getMixedStream();

    if (videoRef.current) {
      videoRef.current.srcObject = mixedStream;
    }

    mixerRef.current = mixer;
    setIsLoading(false);
  };

  const handleStopStreams = () => {
    if (mixerRef.current) {
      mixerRef.current.releaseStreams();
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  };

  useEffect(() => {
    return () => {
      handleStopStreams();
    };
  }, []);

  return (
    <div>
      <Space direction="vertical">
        <Button type="primary" onClick={handleGetMixedStream} disabled={isLoading}>
          Get Mixed Stream
        </Button>
        <Button type="default" onClick={handleStopStreams}>
          Stop Streams
        </Button>
        {isLoading && <Spin size="large" />}
      </Space>
      <video ref={videoRef} autoPlay controls />
    </div>
  );
};

export default Live;
