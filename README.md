
# React Authentication Forms

A modern, accessible, and type-safe authentication system built with React, TypeScript, and Formik. This project demonstrates best practices in form handling, validation, and user experience.

## Features

- 🔐 Secure Login and Sign Up forms
- 📝 Form validation with Yup
- 💪 Password strength indicator
- 🔄 "Remember Me" functionality
- ⌨️ Full keyboard accessibility
- 📱 Responsive design
- 🎨 Clean, modern UI with Tailwind CSS
- 🛡️ Type-safe with TypeScript
- 🎯 Formik for form management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-auth-forms.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Design Choices

### Architecture
- **Component Structure**: Components are broken down into small, reusable pieces following the Single Responsibility Principle
- **Type Safety**: Comprehensive TypeScript types for form values and validation schemas
- **Form Management**: Formik for handling form state and validation
- **Styling**: Tailwind CSS for utility-first styling approach

### User Experience
- **Form Switching**: Easy toggle between Login and Sign Up forms
- **Validation Feedback**: Immediate feedback on form errors
- **Password Strength**: Visual indicator for password security
- **Success Messages**: Clear feedback on successful form submission
- **Remember Me**: Email persistence using localStorage
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

### Security
- **Password Requirements**: Strong password validation rules
- **Form Validation**: Comprehensive client-side validation using Yup
- **Type Safety**: TypeScript to prevent runtime errors

## Project Structure

```
src/
├── components/          # React components
│   ├── FormInput.tsx   # Reusable form input component
│   ├── LoginForm.tsx   # Login form component
│   └── SignUpForm.tsx  # Sign up form component
├── types/              # TypeScript type definitions
│   └── auth.ts         # Authentication-related types
├── utils/              # Utility functions
│   ├── validation.ts   # Form validation schemas
│   ├── storage.ts      # Local storage utilities
│   └── password-strength.ts  # Password strength calculator
└── App.tsx             # Main application component
```

## Assumptions and Limitations

### Assumptions
- Users have modern browsers with localStorage support
- JavaScript is enabled in the browser
- Client-side validation is sufficient for demonstration purposes

### Limitations
- No actual authentication implementation (mock success messages)
- Password strength indicator is basic and could be enhanced
- No password recovery functionality
- No social authentication options

## Future Improvements

1. **Authentication**
   - Implement actual authentication with a backend service
   - Add OAuth/social login options
   - Implement JWT token management

2. **Security**
   - Add rate limiting for failed attempts
   - Implement CAPTCHA for bot prevention
   - Add two-factor authentication

3. **Features**
   - Password recovery flow
   - Email verification
   - Session management
   - Remember device functionality

4. **UX Enhancements**
   - Add loading states
   - Improve error messages
   - Add form animations
   - Enhanced password strength requirements

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Formik](https://formik.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Yup](https://github.com/jquense/yup)
- [Lucide Icons](https://lucide.dev/)
