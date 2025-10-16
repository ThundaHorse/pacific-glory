'use client';

import * as React from 'react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button, Textarea, Typography } from '@material-tailwind/react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.email().min(5, { message: 'Email must be at least 5 characters.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
});

type FormInputs = z.infer<typeof formSchema>;

type TextFieldProps = React.ComponentPropsWithoutRef<typeof Input> & {
  label: string;
  error?: string;
};

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, ...props }, ref) => {
    const id = React.useId();

    return (
      <Typography
        as='label'
        htmlFor={id}
        color='default'
        className='mb-6 block space-y-1.5'>
        <span className='text-sm font-semibold'>{label}</span>
        <Input
          ref={ref}
          {...props}
          id={id}
          isError={Boolean(error)}
          color={error ? 'error' : 'primary'}></Input>
        {error && (
          <Typography
            type='small'
            color='error'>
            {error}
          </Typography>
        )}
      </Typography>
    );
  }
);

TextField.displayName = 'TextField';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  const nameError = errors.name?.message;
  const emailError = errors.email?.message;
  const messageError = errors.message?.message;

  return (
    <div className='relative min-h-[70vh] sm:pb-32 overflow-hidden bg-white/50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-48'>
        <div className='grid lg:grid-cols-2'>
          <div className='lg:col-start-1 rounded-lg shadow-xl/30'>
            <div className='rounded-lg bg-white/80 dark:bg-black/40 backdrop-blur border border-black/5 dark:border-white/10 p-12 hover:shadow-2xl'>
              <h1 className='text-2xl font-bold text-center'>Contact Us</h1>
              <p className='text-sm opacity-80 mt-2 mb-4'>
                We’d love to hear from you. Fill out the form and our team will
                get back to you.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-full max-w-md'>
                <TextField
                  className='p-2 mt-2'
                  label='Name'
                  error={nameError}
                  placeholder='Alex Smith'
                  {...register('name')}
                />
                <TextField
                  className='p-2 mt-2'
                  type='email'
                  label='Email Address'
                  error={emailError}
                  placeholder='someone@example.com'
                  {...register('email')}
                />

                <div className='w-full space-y-1.5'>
                  <Typography
                    as='label'
                    htmlFor='message'
                    type='small'
                    color='default'
                    className='font-semibold'>
                    Message
                  </Typography>

                  <Textarea
                    className='p-4 mt-2'
                    color='error'
                    isError={Boolean(messageError)}
                    placeholder='Your message here...'
                    {...register('message')}
                  />
                </div>

                <div className='flex justify-center'>
                  <Button
                    type='submit'
                    className='mt-12'>
                    Send Message
                  </Button>
                </div>
              </form>

              <div className='mt-6 text-sm opacity-90'>
                <div className='font-semibold'>Pacific Glory USA Inc.</div>
                <div>Address: 1234 Logistics Way, College Park, GA 30337</div>
                <div>Phone: (555) 123-4567</div>
                <div>Hours: Mon–Fri 9:00am–5:00pm</div>
              </div>
            </div>
          </div>

          <div className='hidden lg:block rounded-lg overflow-hidden ml-1  lg:col-span-1 hover:shadow-2xl hover:brightness-90 transition-shadow duration-300'>
            <iframe
              title='Pacific Glory Location'
              src='https://www.google.com/maps?q=Pacific+Glory+USA+Inc,+Satellite+Boulevard+%23+560,+Duluth,+GA&output=embed&center=34.0022834,-84.0915066'
              className='w-full h-full'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
