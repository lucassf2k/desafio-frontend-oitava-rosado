import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from '../../pages/sign-in';
import { SignUp } from '../../pages/sign-up';
import { RegainAccountAccess } from '../../pages/regain-account-access';
import { ChangeAccountPassword } from '../../pages/change-account-password';
import { PageNotFound } from '../page-not-found';
import { Home } from '../../pages/home';
import { Doctors } from '../../pages/doctors';
import { Patients } from '../../pages/patients';
import { Appointments } from '../../pages/appointments';
import { RegisterDoctor } from '../../pages/register-doctor';
import { RegisterAppointments } from '../../pages/register-appointments';
import { RegisterPatients } from '../../pages/register-patients';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/regain-access" element={<RegainAccountAccess />} />
        <Route path="/change-password" element={<ChangeAccountPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/register-doctors" element={<RegisterDoctor />} />
        <Route path="/register-patients" element={<RegisterPatients />} />
        <Route
          path="/register-appointments"
          element={<RegisterAppointments />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
