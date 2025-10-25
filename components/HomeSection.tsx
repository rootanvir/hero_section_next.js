import React, { FC } from 'react';
import Btn from './Button';
import Image from "next/image";
interface Props {

}

const HomeSection: FC<Props> = ({ }) => {
    return (
        <div className='px-10 py-10'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
                <div className='flex-1 space-y-6'>
                    <h1 className='text-5xl lg:text-7xl font-bold leading-tight text-gray-800'>
                        Keep Scaling up your skills during online situation
                    </h1>
                    <p className='text-lg lg:text-xl text-gray-600'>
                        Discover world-class courses, connect with expert mentors and advance your career with Bangladesh's leading e-learning platform.
                    </p>
                    <div className='flex gap-5 flex-wrap'>
                        <Btn text='SignUp for free' variant='filled' image='/assets/images/signup.png' />
                        <Btn text='Browse course' variant='outline' image='/assets/images/book.png' />
                        <Btn text='Join Demo' variant='outline' image='/assets/images/play.png' />
                        <Btn text='Hire Teacher' variant='outline' image='/assets/images/hiring.png' />
                    </div>
                </div>

                <div className='flex-1 flex justify-center'>
                    <Image
                        src="/assets/images/learning.jpg"
                        alt="Learning image"
                        width={780}
                        height={780}
                        className='rounded-2xl'
                    />
                </div>
            </div>


            <div className='flex flex-col lg:flex-row justify-between items-center mt-20 bg-white rounded-2xl p-8'>
                <div className='flex flex-col sm:flex-row gap-10 text-center text-gray-800'>
                    <p><span className='font-bold text-blue-600'>50k+</span> <br /> Students</p>
                    <p><span className='font-bold text-blue-600'>100</span> <br /> Courses</p>
                    <p><span className='font-bold text-blue-600'>200+</span> <br /> Teachers</p>
                </div>

                <div className='flex flex-col gap-4 mt-8 lg:mt-0'>
                    <Btn text='View All Courses' variant='filled' image='/assets/images/right-arrow.png' />
                    <Btn text='View Recorded Course' variant='filled' image='/assets/images/right-arrow.png' />
                    <Btn text='View Live Course' variant='filled' image='/assets/images/right-arrow.png' />
                </div>
            </div>
        </div>
    );
};

export default HomeSection;