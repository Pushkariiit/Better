import React from 'react';
import { Formik, Form } from 'formik';
import { SignUpFormValues } from '../types/auth';
import { signUpSchema } from '../utils/validation';
import { FormInput } from './FormInput';
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator';
import { UserPlus } from 'lucide-react';

export const SignUpForm: React.FC = () => {
  const initialValues: SignUpFormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values: SignUpFormValues, { setStatus }: any) => {
    setStatus({ success: 'Sign up successful!' });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {({ values, status }) => (
        <Form className="space-y-6" noValidate>
          <div className="flex items-center justify-center mb-8">
            <UserPlus className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900 ml-2">Sign Up</h2>
          </div>

          <FormInput
            label="Name"
            name="name"
            placeholder="Enter your name"
          />

          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />

          <div className="space-y-1">
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Create a password"
            />
            <PasswordStrengthIndicator password={values.password} />
          </div>

          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />

          {status?.success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
              {status.success}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Account
          </button>
        </Form>
      )}
    </Formik>
  );
};