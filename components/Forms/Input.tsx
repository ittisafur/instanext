import React from 'react';
import { useFormikContext } from 'formik';

const Input = ({ name, ...rest }) => {
  const { handleChange, errors } = useFormikContext();
  return (
    <div>
      <input
        name={name}
        onChange={handleChange}
        className='w-full h-2 px-4 py-5 text-sm border rounded text-gray-base border-gray-primary focus:outline-none'
        {...rest}
      />
      {JSON.stringify({ errors }, null, 2)}
    </div>
  );
};

export default Input;
