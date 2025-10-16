import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative min-h-[60vh] grid place-items-center overflow-hidden'>
      <Image
        src='https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1920&auto=format&fit=crop'
        alt='Container port at sunset'
        fill
        priority
        className='object-cover'
      />
      <div className='absolute inset-0 bg-black/50' />
      <div className='relative z-10 text-center px-6'>
        <h1 className='text-3xl sm:text-5xl font-bold text-white'>
          Pacific Glory - Placeholder Text
        </h1>
        <p className='mt-4 max-w-2xl mx-auto text-white/80'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
          nisl sit amet sem rutrum tempus. Integer dignissim ipsum non lectus
          dapibus gravida.
        </p>
      </div>
    </section>
  );
}
