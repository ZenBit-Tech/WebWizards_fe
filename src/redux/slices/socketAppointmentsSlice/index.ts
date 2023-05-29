import { createSlice } from '@reduxjs/toolkit';
import CreatePatientInitialState from '@redux/slices/patient/createPatient/types';

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
};

const socketAppointment = createSlice({
  name: 'socketAppointment',
  initialState,
  reducers: {
    updateNextAppointment(state, action) {
      state.nextAppointment = action.payload;
    },
    updateCallConfig(state, action) {
      state.callConfig = action.payload;
    },
  },
});

export const {
  reducer: socketAppointmenttReducer,
  actions: socketAppointmentActions,
} = socketAppointment;
