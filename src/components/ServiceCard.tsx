import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  img: string;
  points: string[];
  intro: string;
  href?: string;
};

export default function ServiceCard({
  title,
  img,
  intro,
  points,
  href
}: Props) {
  const card = (
    <article className='group rounded-lg overflow-hidden border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/20 backdrop-blur hover:shadow-md transition-shadow'>
      <div className='relative h-48'>
        <Image
          src={img}
          alt={title}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='p-5'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-sm opacity-80 mt-2'>{intro}</p>
        <ul className='list-disc list-inside mt-3 text-sm opacity-90 space-y-1'>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </article>
  );

  return href ? (
    <Link
      href={href}
      className='block focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 rounded-lg'>
      {card}
    </Link>
  ) : (
    card
  );
}
