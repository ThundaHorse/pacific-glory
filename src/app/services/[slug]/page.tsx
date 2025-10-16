import Image from 'next/image';
import Link from 'next/link';

type Service = {
  title: string;
  img: string;
  intro: string;
  bullets: string[];
};

const SERVICES: Record<string, Service> = {
  'air-freight': {
    title: 'Air Freight',
    img: 'https://images.unsplash.com/photo-1571086291540-b137111fa1c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1548',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper, nunc non dictum interdum, urna magna vehicula erat, vitae lacinia turpis nunc id ipsum.',
    bullets: [
      'End-to-end visibility and proactive updates',
      'Priority handling for time-critical cargo',
      'Door-to-door and airport-to-airport services'
    ]
  },
  'ocean-freight': {
    title: 'Ocean Freight',
    img: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1600&auto=format&fit=crop',
    intro:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
    bullets: [
      'FCL and LCL solutions for flexible capacity',
      'Customs brokerage and documentation support',
      'Weekly sailings and competitive transit times'
    ]
  },
  'warehouse-distribution': {
    title: 'Warehouse Distribution',
    img: 'https://plus.unsplash.com/premium_photo-1681426730828-bfee2d13861d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2064',
    intro:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. Temporibus autem quibusdam et aut officiis debitis.',
    bullets: [
      'Short-term storage and cross-docking',
      'Inventory management and cycle counting',
      'Pick, pack, and regional distribution'
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export default async function ServiceDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    return (
      <div className='mx-auto max-w-4xl px-4 sm:px-6 py-16'>
        <h1 className='text-2xl font-bold'>Service not found</h1>
        <p className='mt-2'>The requested service could not be found.</p>
        <Link
          href='/services'
          className='text-blue-600 underline mt-4 inline-block'>
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className='mx-auto max-w-5xl px-4 sm:px-6 py-12'>
      <header className='text-center'>
        <h1 className='text-3xl font-bold'>{service.title}</h1>
        <p className='mt-2 text-sm opacity-80 max-w-2xl mx-auto'>
          {service.intro}
        </p>
      </header>

      {/* Vertically and horizontally centered image area */}
      <section className='mt-8 h-[380px] rounded-lg border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 grid place-items-center overflow-hidden'>
        <div className='relative w-full h-full flex items-center justify-center'>
          <div className='relative w-full h-full max-h-[380px]'>
            <Image
              src={service.img}
              alt={service.title}
              fill
              className='object-contain'
            />
          </div>
        </div>
      </section>
      <p className='mt-3 text-sm'>
        Original image URL:{' '}
        <a
          href={service.img}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 underline break-all'>
          {service.img}
        </a>
      </p>

      {/* Placeholder body content inspired by reference layout */}
      <section className='mt-10 grid gap-8 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h2 className='text-xl font-semibold'>Overview</h2>
          <p className='mt-2 opacity-90'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            feugiat, lectus sit amet
            <br />
            volutpat bibendum, arcu augue lacinia lacus, in dictum arcu urna ut
            dolor. Integer porta massa in vehicula convallis. Aliquam erat
            volutpat.
          </p>
          <h3 className='mt-6 font-semibold'>What you get</h3>
          <ul className='list-disc list-inside mt-2 space-y-1 opacity-90'>
            {service.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
        <aside className='p-5 rounded-lg border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/20 backdrop-blur'>
          <h3 className='font-semibold'>Quick Facts</h3>
          <ul className='mt-2 text-sm space-y-1 opacity-90'>
            <li>Coverage: Global</li>
            <li>Transit: Varies by lane</li>
            <li>Support: 24/7</li>
          </ul>
        </aside>
      </section>

      <section className='mt-10'>
        <h2 className='text-xl font-semibold'>How it works</h2>
        <div className='mt-3 grid sm:grid-cols-3 gap-4'>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className='p-5 rounded-lg border border-black/5 dark:border-white/10'>
              <div className='text-2xl font-semibold'>Step {i}</div>
              <p className='text-sm mt-2 opacity-80'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
