import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import AppForm from '@/components/Forms/AppForm';
import * as Yup from 'yup';
import Input from '@/components/Forms/Input';

const validationYupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  return (
    <Card>
      <img
        src='/images/logo.png'
        alt='Instagram'
        className='w-6/12 mx-auto mb-3'
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationYupSchema}
      >
        <div className='flex flex-col space-y-2'>
          <Input name='email' placeholder='Email Address' />
          <Input name='password' type='password' placeholder='Password' />

          <Button>Login</Button>
        </div>
      </AppForm>
    </Card>
  );
};

export default LoginForm;
