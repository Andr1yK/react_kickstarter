import { useState, useEffect } from 'react';
import { DeviceType } from '../contexts/DeviceTypeContext';
import { throttle } from '../helpers/throttle';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>({
    onTablet: window.matchMedia('(min-width: 768px)').matches,
    onDesktop: window.matchMedia('(min-width: 1024px)').matches,
  });

  useEffect(() => {
    const handleResize = throttle(() => setDeviceType({
      onTablet: window.matchMedia('(min-width: 768px)').matches,
      onDesktop: window.matchMedia('(min-width: 1024px)').matches,
    }), 300);

    window.addEventListener('resize', handleResize, {
      passive: true,
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
};
