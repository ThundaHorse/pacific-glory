import Carousel from '@/components/Carousel';

export default function About() {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 py-12 min-h-screen'>
      <section className='grid gap-8 lg:grid-cols-2 items-center'>
        <div>
          <h1 className='text-3xl font-bold'>About Pacific Glory</h1>
          <p className='mt-4 leading-7'>
            Pacific Glory USA, Inc was founded in 2010 at the location of
            College Park, GA.
          </p>
          <p className='mt-3 leading-7'>
            We are an NVOCC logistics company that provides full Sea and Air
            consolidation service across the world. Our highly professional and
            experienced team is committed in providing the most effective
            solution to all your logistics needs. Our office in Atlanta region
            has warehouse to provide transloading and short term storage
            services. We also have our own fleet of trucks to provide the daily
            pick up and deliveries.
          </p>
          <div className='mt-6 grid sm:grid-cols-3 gap-4'>
            <div className='p-4 rounded-lg border border-black/5 dark:border-white/10'>
              <div className='text-2xl font-semibold'>2010</div>
              <div className='text-sm opacity-80'>Founded</div>
            </div>
            <div className='p-4 rounded-lg border border-black/5 dark:border-white/10'>
              <div className='text-2xl font-semibold'>Global</div>
              <div className='text-sm opacity-80'>Sea & Air</div>
            </div>
            <div className='p-4 rounded-lg border border-black/5 dark:border-white/10'>
              <div className='text-2xl font-semibold'>Atlanta</div>
              <div className='text-sm opacity-80'>Warehouse</div>
            </div>
          </div>
        </div>
        <Carousel
          slides={[
            {
              src: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1600&auto=format&fit=crop',
              caption: 'Global air and sea consolidation'
            },
            {
              src: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1600&auto=format&fit=crop',
              caption: 'Reliable warehousing and distribution'
            },
            {
              src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
              caption: 'Daily pick-ups and deliveries'
            }
          ]}
        />
      </section>

      <section className='mt-12'>
        <h2 className='text-2xl font-bold'>Our Commitment</h2>
        <p className='mt-3 opacity-90'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          metus at urna porta mollis. Integer malesuada tortor eu felis
          malesuada, in condimentum mi faucibus.
        </p>
      </section>

      {/* Additional mock sections */}
      <section className='mt-12 grid gap-6 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h2 className='text-2xl font-bold'>Our Mission</h2>
          <p className='mt-3 opacity-90'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            rhoncus, nisl quis maximus vehicula, nibh magna pulvinar augue,
            vitae porttitor urna quam id metus. Integer suscipit velit id purus
            tincidunt, sit amet semper dui convallis.
          </p>
        </div>
        <div className='p-5 rounded-lg border border-black/5 dark:border-white/10'>
          <h3 className='font-semibold'>Fast Facts</h3>
          <ul className='text-sm mt-2 space-y-1 opacity-90'>
            <li>Founded: 2010</li>
            <li>HQ: College Park, GA</li>
            <li>Coverage: Global</li>
          </ul>
        </div>
      </section>

      <section className='mt-12'>
        <h2 className='text-2xl font-bold'>Leadership</h2>
        <div className='mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className='p-5 rounded-lg border border-black/5 dark:border-white/10'>
              <div className='h-32 bg-black/5 dark:bg-white/5 rounded mb-3 grid place-items-center'>
                <span className='opacity-60 text-sm'>Portrait {i}</span>
              </div>
              <div className='font-semibold'>Leader Name {i}</div>
              <div className='text-sm opacity-80'>Title</div>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-12'>
        <h2 className='text-2xl font-bold'>Careers</h2>
        <p className='mt-3 opacity-90'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
          nunc vel arcu ultricies commodo. Sed dictum sem in sapien tempor,
          vitae volutpat enim fermentum.
        </p>
      </section>
    </div>
  );
}
