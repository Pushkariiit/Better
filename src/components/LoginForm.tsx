import React from 'react';
import { Formik, Form, Field } from 'formik';
import { LoginFormValues } from '../types/auth';
import { loginSchema } from '../utils/validation';
import { FormInput } from './FormInput';
import { saveEmailToStorage, clearEmailFromStorage, getEmailFromStorage } from '../utils/storage';
import { LogIn } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    email: getEmailFromStorage() || '',
    password: '',
    rememberMe: false,
  };

  const handleSubmit = (values: LoginFormValues, { setStatus }: any) => {
    if (values.rememberMe) {
      saveEmailToStorage(values.email);
    } else {
      clearEmailFromStorage();
    }
    setStatus({ success: 'Login successful!' });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ status }) => (
        <Form className="space-y-6" noValidate>
          <div className="flex items-center justify-center mb-8">
            <LogIn className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900 ml-2">Login</h2>
          </div>

          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />

          <div className="flex items-center">
            <Field
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          {status?.success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
              {status.success}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </Form>
      )}
    </Formik>
  );
};