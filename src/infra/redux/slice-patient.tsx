import { createSlice } from '@reduxjs/toolkit';
import { supabase } from '../supabase/config';

type Patient = {
  id: string;
  nome: string;
  sexo: string;
  nascimento: string;
  cpf: string;
  rg: string;
  rg_emissor: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  telefone: string;
  email: string;
};

type PatientState = {
  data: Patient[];
  isLoading: boolean;
};

const INITIAL_STATE = {} as PatientState;

const slicePatient = createSlice({
  name: 'patient',
  initialState: INITIAL_STATE,
  reducers: {
    loadPatient: (state) => {
      let patients: any[] | null = [];
      state.isLoading = true;
      supabase
        .from('pacientes')
        .select()
        .then(({ data }) => {
          patients = data;
        });
      state.isLoading = false;
      state.data = [...patients];
    },
    createPatient: (state, action) => {
      state.isLoading = true;
      supabase
        .from('paciente')
        .insert([action.payload])
        .then(() => {
          state.data = [...state.data, action.payload];
        });
      state.isLoading = false;
    },
  },
});

export default slicePatient.reducer;
export const { createPatient, loadPatient } = slicePatient.actions;
export const usePatient = (state: any) => state.auth as PatientState;
