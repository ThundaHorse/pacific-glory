import Link from 'next/link';

const SERVICES = [
  { slug: 'air-freight', title: 'Air Freight' },
  { slug: 'ocean-freight', title: 'Ocean Freight' },
  { slug: 'warehouse-distribution', title: 'Warehouse Distribution' }
];

export default function Services() {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 py-12'>
      <h1 className='text-3xl font-bold'>Services</h1>
      <p className='opacity-80 mt-2'>Select a service to learn more.</p>
      <ul className='mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {SERVICES.map((s) => (
          <li
            key={s.slug}
            className='rounded border border-black/5 dark:border-white/10 p-4'>
            <Link
              className='underline'
              href={`/services/${s.slug}`}>
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
