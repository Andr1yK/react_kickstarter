import {
  createContext,
  FC,
  useContext,
  memo,
} from 'react';

export interface DeviceType {
  onTablet: boolean;
  onDesktop: boolean;
}

const DeviceTypeContext = createContext<DeviceType>({
  onTablet: false,
  onDesktop: false,
});

export const useDeviceTypeState = () => useContext<DeviceType>(DeviceTypeContext);

interface Props {
  value: DeviceType;
}

export const DeviceTypeProvider: FC<Props> = memo(({ value, children }) => (
  <DeviceTypeContext.Provider value={value}>
    {children}
  </DeviceTypeContext.Provider>
));
