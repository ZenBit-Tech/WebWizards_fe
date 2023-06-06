import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nextAppointment: {
    endTime: '',
    id: null,
    localDoctor: { id: null, firstName: '', lastName: '' },
    patient: { gender: '', lastName: '', id: null },
    remoteDoctor: { id: null, firstName: '', lastName: '' },
    startTime: '',
    zoomLink: '',
  },
  callConfig: {
    name: 'my conf',
    tpc: 'some shit',
    role_type: 1,
    user_identity: '',
    session_key: '',
    signature: null,
    password: '0000',
  },
  roomName: '',
};

const socketAppointment = createSlice({
  name: 'socketAppointment',
  initialState,
  reducers: {
    updateNextAppointment(state, action) {
      state.nextAppointment = action.payload.nextAppointment;
    },
    updateCallConfig(state, action) {
      state.callConfig = action.payload;
    },
  },
});

export const {
  reducer: socketAppointmentReducer,
  actions: socketAppointmentActions,
} = socketAppointment;
