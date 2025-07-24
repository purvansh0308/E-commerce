import React from 'react';
import Title from './Title';
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <div className='w-full py-16 bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col items-center gap-12'>
      
      {/* Title Section */}
      <div className='text-center px-4'>
        <Title text1="OUR" text2="POLICY" />
        <p className='text-sm md:text-lg text-blue-100 mt-2 max-w-[600px] mx-auto'>
          Customer-Friendly Policies – Committed to Your Satisfaction and Safety.
        </p>
      </div>

      {/* Policy Cards */}
      <div className='w-full flex flex-wrap items-center justify-center gap-10 px-4'>
        
        {/* Card 1 */}
        <div className='w-[280px] sm:w-[320px] bg-[#1a1a2e] rounded-xl p-6 flex flex-col items-center text-center gap-4 shadow-lg hover:scale-105 transition-all duration-300'>
          <RiExchangeFundsLine className='text-[#90b9ff] w-12 h-12 md:w-16 md:h-16' />
          <h3 className='text-lg md:text-2xl font-semibold text-[#a5e8f7]'>Easy Exchange Policy</h3>
          <p className='text-xs md:text-base font-medium text-[aliceblue]'>
            Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.
          </p>
        </div>

        {/* Card 2 */}
        <div className='w-[280px] sm:w-[320px] bg-[#1a1a2e] rounded-xl p-6 flex flex-col items-center text-center gap-4 shadow-lg hover:scale-105 transition-all duration-300'>
          <TbRosetteDiscountCheckFilled className='text-[#90b9ff] w-12 h-12 md:w-16 md:h-16' />
          <h3 className='text-lg md:text-2xl font-semibold text-[#a5e8f7]'>7 Days Return Policy</h3>
          <p className='text-xs md:text-base font-medium text-[aliceblue]'>
            Shop with Confidence – 7 Days Easy Return Guarantee.
          </p>
        </div>

        {/* Card 3 */}
        <div className='w-[280px] sm:w-[320px] bg-[#1a1a2e] rounded-xl p-6 flex flex-col items-center text-center gap-4 shadow-lg hover:scale-105 transition-all duration-300'>
          <BiSupport className='text-[#90b9ff] w-12 h-12 md:w-16 md:h-16' />
          <h3 className='text-lg md:text-2xl font-semibold text-[#a5e8f7]'>Best Customer Support</h3>
          <p className='text-xs md:text-base font-medium text-[aliceblue]'>
            Trusted Customer Support – Your Satisfaction Is Our Priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurPolicy;
