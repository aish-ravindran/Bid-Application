import React from 'react';
import { useForm } from 'react-hook-form';
import './SignupForm.css';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className="signup-container">
      <div className="form-section-signup">
        <h2>Sign up</h2>
        <p>New bidders, as soon as you have submitted your information, you will be eligible to bid in the auction.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
            type="text"
            {...register('firstName', {
              required: 'First name is required',
              minLength: { value: 2, message: 'First name must be at least 2 characters' },
            })}
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}

          <label>Last Name</label>
          <input
            type="text"
            {...register('lastName', {
              required: 'Last name is required',
              minLength: { value: 2, message: 'Last name must be at least 2 characters' },
            })}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}

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
            placeholder="Enter your email"
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

          <div className="checkbox-container">
            <input type="checkbox" {...register('receiveEmails')} />
            <label>Receive outbid emails</label>
          </div>

          <button type="submit">Submit</button>
        </form>

        <p>
          Want to know more? <a href="/auction-rules">Auction rules</a>
        </p>
      </div>

      <div className="image-section-signup">
        <img src="/images/signup.png" alt="Signup Illustration" />
      </div>
    </div>
  );
};

export default SignupForm;
