import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from '../../pages/sign-in';
import { SignUp } from '../../pages/sign-up';
import { RegainAccountAccess } from '../../pages/regain-account-access';
import { ChangeAccountPassword } from '../../pages/change-account-password';
import { PageNotFound } from '../page-not-found';
import { Home } from '../../pages/home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/regain-access" element={<RegainAccountAccess />} />
        <Route path="/change-password" element={<ChangeAccountPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
