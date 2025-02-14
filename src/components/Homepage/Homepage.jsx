import React, { lazy, Suspense } from 'react';
import BusBooking from '../BusBooking/BusBooking';
import vi from './vi.mp4';

const BootSlider = lazy(() => import('../BootSlider/BootSlider'));

const Homepage = () => {
  return (
    <div>
      <BusBooking />

      <Suspense
        fallback={
          <div className="flex items-center justify-center h-40">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <BootSlider />
      </Suspense>
    </div>
  );
};

export default Homepage;
