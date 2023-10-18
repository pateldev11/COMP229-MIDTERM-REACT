import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const SignUpUser = () => {
  const { control, handleSubmit, formState, setError } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { type: 'passwordMismatch', message: 'Passwords do not match' });
    } else {
      // Submit the form data or perform other actions here
      alert('Form submitted successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2>
            SIGN UP!
        </h2>
      <div>
        <label>First Name:</label>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: 'First Name is required' }}
          render={({ field, fieldState }) => (
            <input type="text" {...field} />
          )}
        />
        {formState.errors.firstName && <p>{formState.errors.firstName.message}</p>}
      </div>

      <div>
        <label>Last Name:</label>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: 'Last Name is required' }}
          render={({ field, fieldState }) => (
            <input type="text" {...field} />
          )}
        />
        {formState.errors.lastName && <p>{formState.errors.lastName.message}</p>}
      </div>

      <div>
        <label>User Name:</label>
        <Controller
          name="userName"
          control={control}
          rules={{ required: 'User Name is required' }}
          render={({ field, fieldState }) => (
            <input type="text" {...field} />
          )}
        />
        {formState.errors.userName && <p>{formState.errors.userName.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email format',
            },
          }}
          render={({ field, fieldState }) => (
            <input type="text" {...field} />
          )}
        />
        {formState.errors.email && <p>{formState.errors.email.message}</p>}
      </div>

      <div>
        <label>Password:</label>
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field, fieldState }) => (
            <input type="password" {...field} />
          )}
        />
        {formState.errors.password && <p>{formState.errors.password.message}</p>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: 'Confirm Password is required' }}
          render={({ field, fieldState }) => (
            <input type="password" {...field} />
          )}
        />
        {formState.errors.confirmPassword && <p>{formState.errors.confirmPassword.message}</p>}
      </div>

      {formState.errors.confirmPassword &&
        formState.errors.confirmPassword.type === 'passwordMismatch' && (
          <p>{formState.errors.confirmPassword.message}</p>
        )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpUser;
