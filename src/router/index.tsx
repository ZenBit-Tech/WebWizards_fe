import { createBrowserRouter } from 'react-router-dom';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';

export const router = createBrowserRouter([
  {
    path: '/forgot_password',
    element: <ForgotPasswordPage />
  }
]);
