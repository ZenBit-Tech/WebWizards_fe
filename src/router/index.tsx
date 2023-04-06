import { createBrowserRouter } from 'react-router-dom';
import ForgotPassword from 'components/ForgotPassword';

export const router = createBrowserRouter([
  {
    path: '/forgot_password',
    element: <ForgotPassword />
  }
]);
