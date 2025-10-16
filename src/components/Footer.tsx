export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='border-t border-black/5 dark:border-white/10'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-6 sm:grid-cols-3'>
        <div>
          <div className='font-semibold'>Pacific Glory USA Inc.</div>
          <div className='text-sm opacity-80 mt-2'>Logistics. Delivered.</div>
        </div>
        <div className='text-sm opacity-80'>
          <div>Address: 1234 Logistics Way, College Park, GA 30337</div>
          <div>Phone: (555) 123-4567</div>
          <div>Hours: Mon–Fri 9:00am–5:00pm</div>
        </div>
        <div className='text-sm opacity-80 sm:text-right'>
          © {year} Pacific Glory USA Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
