import { DeviceType } from '../../types/DeviceType';
import { Reducer } from '../../types/Reducer';

const SET_DEVICE_TYPE = 'SET_DEVICE_TYPE';

export const deviceTypeReducer: Reducer = (state, action) => {
  switch (action.type) {
    case SET_DEVICE_TYPE:
      return {
        ...state,
        deviceType: action.payload,
      };

    default:
      return state;
  }
};

export const actionSetDeviceType = (deviceType: DeviceType) => ({
  type: SET_DEVICE_TYPE,
  payload: deviceType,
});
