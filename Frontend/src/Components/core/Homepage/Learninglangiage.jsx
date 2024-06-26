import React from 'react'
import Actionactivebuttons from './Actionactivebuttons'
import compare from "../../../assets/LearnLanguage/Compare_with_others.png"
import progress from "../../../assets/LearnLanguage/Know_your_progress.png"
import lessons from "../../../assets/LearnLanguage/Plan_your_lessons.png"

function Learninglangiage() {
    return (
        <div>
            <div className='bg-white'>
                <div className='text-4xl font-semibold text-center my-10'>Your swiss knife for learning any language</div>
                <div className='text-center text-richblack-800 lg:w-[75%] mx-auto leading-6 text-base mt-3'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>
                <div className='flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0'>
                    <img className='object-contain lg:-mr-32' src={compare} alt="" />
                    <img className='object-contain lg:-mb-10 lg:-mt-0 -mt-12' src={progress} alt="" />
                    <img className='object-contain lg:-ml-36 lg:-mt-5 -mt-16' src={lessons} alt="" />
                </div>
                <div className='w-fit mx-auto lg:mb-20 mb-8 -mt-5'>
                    <Actionactivebuttons active={true} linkto={"/signup"}>
                        Learn More
                    </Actionactivebuttons>
                </div>
            </div>
        </div>
    )
}

export default Learninglangiage
