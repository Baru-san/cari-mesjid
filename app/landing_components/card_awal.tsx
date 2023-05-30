"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import './landing.css';

const Page = () => {
  const shadeRef = useRef<HTMLInputElement>(null);
  const imageBackgroundRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const shadeHeight = shadeRef.current?.offsetHeight;
    if (shadeHeight && imageBackgroundRef.current) {
      imageBackgroundRef.current.style.height = `${shadeHeight + 7}px`;
      imageBackgroundRef.current.style.transform = 'translateX(330px)';
      imageBackgroundRef.current.style.opacity = '0'; // Set initial opacity to 0

      const image = new Image();
      image.onload = () => {
        setImageLoaded(true);
        if (imageBackgroundRef.current) {
          imageBackgroundRef.current.style.opacity = '1';
          imageBackgroundRef.current.classList.add('fade-in-animation');
        }
      };
      image.src = '/Rectangle_61.png';
    }
  }, []);


  return (
    <div className='px-20 mx-36 py-10'>
      <div className="card-content">
        <div
          className="image-background"
          ref={imageBackgroundRef}
          style={{
            backgroundImage: `url('/Rectangle_61.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            width: '100%',
            position: 'absolute',
            right: 0,
            borderRadius: '4px',
            opacity: imageLoaded ? '1' : '0', // Set opacity based on imageLoaded state
          }}
        ></div>
        <div
          className='shade bg-white flex items-center'
          ref={shadeRef}
          style={{
            borderRadius: '30px 30px 30px 30px',
            backgroundImage: 'url("/Rectangle_57.jpg")'
          }}
        >

          <div className="logo-container" style={{ position: 'relative', top: '-300px', left: '20px' }}>
            <img className="logo" src="/logo_2.svg" alt="Logo" />
          </div>
          <div className="text-left sm:text-sm lg:text-lg md:text-sm w-1/3">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions <br />
              of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
