'use client';
import { useState, useEffect, JSX } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import image1 from '../../public/slider1.webp';
import image2 from '../../public/slider2.webp';
import image3 from '../../public/slider3.webp';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  {
    src: image1
  },
  {
    src: image2
  },
  {
    src: image3
  }
];

export default function ImageSlider(): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  // const prevSlide = (): void => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 10000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className='relative w-full mx-auto mt-4 hidden sm:block'>
      <div
        className='relative h-[460px] group'
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}>
        <div className='absolute z-10 top-1/5 p-6 bg-black/50 bg-opacity-75 rounded-lg m-4'>
          <h1 className='text-3xl font-bold'>About Pacific Glory</h1>
          <p className='mt-4 leading-7'>
            Pacific Glory USA, Inc was founded in 2010 at the location of
            College Park, GA.
          </p>
          <p className='mt-3 leading-7'>
            We are an NVOCC logistics company that provides full Sea and Air
            consolidation service across the world. Our highly professional and
            experienced team is committed to providing the most effective
            solution to all your logistics needs. Our office in Atlanta region
            has warehouse to provide transloading and short term storage
            services. We also have our own fleet of trucks to provide the daily
            pick up and deliveries.
          </p>
        </div>
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout='fill'
          objectFit='cover'
          className='rounded-xl transition-all duration-500 ease-in-out cursor-pointer'
        />
      </div>
      {/* <button
        className='absolute left-0 top-1/2 transform h-[459px] rounded-xl  mx-1 -mt-[10px] -translate-y-1/2 text-white p-2 group'
        onClick={prevSlide}>
        <ChevronLeft className='text-gray-400 group-hover:text-white' />
      </button>
      <button
        className='absolute right-0 top-1/2 transform h-[459px] rounded-xl  mx-1 -mt-[10px] -translate-y-1/2 text-white p-2 group'
        onClick={nextSlide}>
        <ChevronRight className='text-gray-400 group-hover:text-white' />
      </button> */}
      <div className='flex justify-center mt-4 mb-4'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-4 rounded-lg w-4 mx-2 border-b-gray-200 ${
              index === currentIndex
                ? 'bg-green-300 rounded-xl'
                : 'bg-gray-200 rounded-xl'
            } transition-all duration-500 ease-in-out hover:cursor-pointer hover:opacity-80`}
            onClick={() => setCurrentIndex(index)}></div>
        ))}
      </div>
    </div>
  );
}
