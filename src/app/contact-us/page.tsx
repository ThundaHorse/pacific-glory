export default function Contact() {
  return (
    <div className='relative min-h-[70vh] pb-32'>
      {/* Map background across entire page */}
      <div className='absolute inset-0 -z-10'>
        <iframe
          title='Pacific Glory Location'
          src='https://www.google.com/maps?q=Pacific+Glory+USA+Inc,+Satellite+Boulevard+%23+560,+Duluth,+GA&output=embed&center=34.0022834,-84.0915066'
          className='w-full h-full'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-black/30' />
      </div>

      {/* Centered form/card overlay */}
      <div className='mx-auto ml-48 max-w-7xl px-4 sm:px-6 py-48'>
        <div className='grid lg:grid-cols-2 gap-12'>
          <div className='lg:col-start-1'>
            <div className='rounded-lg bg-white/80 dark:bg-black/40 backdrop-blur border border-black/5 dark:border-white/10 p-6 shadow-lg'>
              <h1 className='text-2xl font-bold'>Contact Us</h1>
              <p className='text-sm opacity-80 mt-2'>
                We’d love to hear from you. Fill out the form and our team will
                get back to you.
              </p>

              <form className='mt-6 grid gap-4'>
                <label className='grid gap-1'>
                  <span className='text-sm'>Name</span>
                  <input
                    type='text'
                    name='name'
                    required
                    className='h-10 rounded border border-black/10 dark:border-white/15 bg-white/90 dark:bg-black/30 px-3 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20'
                  />
                </label>

                <label className='grid gap-1'>
                  <span className='text-sm'>Email</span>
                  <input
                    type='email'
                    name='email'
                    required
                    className='h-10 rounded border border-black/10 dark:border-white/15 bg-white/90 dark:bg-black/30 px-3 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20'
                  />
                </label>

                <label className='grid gap-1'>
                  <span className='text-sm'>Message</span>
                  <textarea
                    name='message'
                    rows={4}
                    required
                    className='rounded border border-black/10 dark:border-white/15 bg-white/90 dark:bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20'
                  />
                </label>

                <button
                  type='submit'
                  className='h-11 rounded bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90'>
                  Send Message
                </button>
              </form>

              <div className='mt-6 text-sm opacity-90'>
                <div className='font-semibold'>Pacific Glory USA Inc.</div>
                <div>Address: 1234 Logistics Way, College Park, GA 30337</div>
                <div>Phone: (555) 123-4567</div>
                <div>Hours: Mon–Fri 9:00am–5:00pm</div>
              </div>
            </div>
          </div>

          <div className='hidden lg:block' />
        </div>
      </div>
    </div>
  );
}
