import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.css';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Handle successful login here
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Login</h2>
        <p>Welcome back. Enter your credentials to access your account.</p>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email Address</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Enter a valid email address',
              },
            })}
            placeholder="hello@example.com"
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}

          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}

          <div className="actions">
            <div className="checkbox-container">
              <input type="checkbox" {...register('keepSignedIn')} />
              <label>Keep me signed in</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit">Continue</button>
        </form>

        <p>
          Don’t have an Account? <a href="/signup">Sign up here</a>
        </p>
      </div>

      <div className="image-section">
        <img src="/images/Illustration.png" alt="Login Illustration" />
      </div>
    </div>
  );
};

export default LoginForm;
