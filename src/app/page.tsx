import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <div>
      <Hero />
      <section className='mx-auto max-w-7xl px-4 sm:px-6 py-12'>
        <header className='mb-6'>
          <h2 className='text-2xl font-bold'>Our Services</h2>
          <p className='text-sm opacity-80 mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            sodales, nunc at dapibus ultricies, nunc arcu rhoncus augue, vitae
            tincidunt lorem dui id magna.
          </p>
        </header>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <ServiceCard
            title='Air Freight'
            img='https://images.unsplash.com/photo-1571086291540-b137111fa1c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1548'
            intro='Fast, reliable air cargo solutions for time-critical shipments.'
            points={[
              'Global airport-to-airport coverage',
              'Express and economy options',
              'Real-time tracking and updates'
            ]}
            href='/services/air-freight'
          />
          <ServiceCard
            title='Ocean Freight'
            img='https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1600&auto=format&fit=crop'
            intro='Cost-effective ocean services for LCL and FCL.'
            points={[
              'LCL and FCL consolidations',
              'Door-to-door capabilities',
              'Customs and documentation support'
            ]}
            href='/services/ocean-freight'
          />
          <ServiceCard
            title='Warehouse Distribution'
            img='https://plus.unsplash.com/premium_photo-1681426730828-bfee2d13861d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2064'
            intro='Secure storage, transloading, and regional distribution.'
            points={[
              'Short-term storage options',
              'Inventory visibility',
              'Cross-docking and transloading'
            ]}
            href='/services/warehouse-distribution'
          />
        </div>
      </section>
    </div>
  );
}
