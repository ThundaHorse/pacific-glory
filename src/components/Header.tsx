'use client';

import Link from 'next/link';
import { useState, type FocusEvent } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-black/5 dark:border-white/10'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex h-16 items-center justify-between'>
          <Link
            href='/'
            className='flex items-center gap-2'>
            <div className='h-9 w-9 rounded bg-black/80 dark:bg-white/80 text-white dark:text-black grid place-items-center font-bold'>
              PG
            </div>
            <span className='font-semibold'>Pacific Glory</span>
          </Link>

          <nav className='hidden md:flex items-center gap-6'>
            <DesktopServicesDropdown />
            <Link
              href='/about'
              className='hover:shadow-md hover:scale-105'>
              About Us
            </Link>
            <Link
              href='/contact-us'
              className='hover:shadow-md hover:scale-105'>
              Contact
            </Link>
          </nav>

          <button
            aria-label='Toggle menu'
            onClick={() => setOpen((v) => !v)}
            className='md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-black/5 dark:hover:bg-white/10'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path
                d='M4 6h16M4 12h16M4 18h16'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>

        {open && (
          <div className='md:hidden pb-4'>
            <nav className='flex flex-col gap-2'>
              {/* Mobile Services with nested links */}
              <details className='rounded'>
                <summary className='px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer list-none'>
                  <span className='inline-block'>Services</span>
                </summary>
                <div className='ml-3 mt-1 flex flex-col'>
                  <Link
                    href='/services'
                    onClick={() => setOpen(false)}
                    className='px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10'>
                    All Services
                  </Link>
                  <Link
                    href='/services/air-freight'
                    onClick={() => setOpen(false)}
                    className='px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10'>
                    Air Freight
                  </Link>
                  <Link
                    href='/services/ocean-freight'
                    onClick={() => setOpen(false)}
                    className='px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10'>
                    Ocean Freight
                  </Link>
                  <Link
                    href='/services/warehouse-distribution'
                    onClick={() => setOpen(false)}
                    className='px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10'>
                    Warehouse Distribution
                  </Link>
                </div>
              </details>
              <Link
                href='/about'
                onClick={() => setOpen(false)}
                className='px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10'>
                About Us
              </Link>
              <Link
                href='/contact-us'
                onClick={() => setOpen(false)}
                className='px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10'>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function DesktopServicesDropdown() {
  const [open, setOpen] = useState(false);

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    // Close only if focus moved outside of the dropdown container
    const next = e.relatedTarget as Node | null;
    if (!e.currentTarget.contains(next)) setOpen(false);
  };

  return (
    <div
      className='relative'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={handleBlur}>
      <Link
        href='#'
        className='hover:scale-105'>
        Services
      </Link>
      <div
        className={
          `absolute left-0 mt-0 w-56 z-50 rounded-md border border-black/10 dark:border-white/10 ` +
          `bg-white dark:bg-black shadow-lg p-2 transition-opacity duration-150 ` +
          (open
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none')
        }>
        <Link
          href='/services/air-freight'
          className='block px-3 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10'>
          Air Freight
        </Link>
        <Link
          href='/services/ocean-freight'
          className='block px-3 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10'>
          Ocean Freight
        </Link>
        <Link
          href='/services/warehouse-distribution'
          className='block px-3 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10'>
          Warehouse Distribution
        </Link>
      </div>
    </div>
  );
}
