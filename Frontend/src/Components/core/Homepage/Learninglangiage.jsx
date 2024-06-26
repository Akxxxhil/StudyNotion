import React from 'react'
import Actionactivebuttons from './Actionactivebuttons'
import compare from "../../../assets/LearnLanguage/Compare_with_others.png"
import progress from "../../../assets/LearnLanguage/Know_your_progress.png"
import lessons from "../../../assets/LearnLanguage/Plan_your_lessons.png"

function Learninglangiage() {
    return (
        <div className='flex flex-col'>
            <div className='bg-white'>
                <div className='text-center font-semibold text-4xl'>Your swiss knife for learning any language</div>
                <div className='mt-5 text-center mx-auto font-semibold w-[70%]'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>
                <div className='flex items-center justify-center'>
                    <img className='object-contain -mr-32' src={compare} alt="" />
                    <img className='object-contain' src={progress} alt="" />
                    <img className='object-contain -ml-36' src={lessons} alt="" />
                </div>
                <div className='w-fit mx-auto mt-5'>
                    <Actionactivebuttons active={true} linkto={"/signup"}>
                        Learn More
                    </Actionactivebuttons>
                </div>
            </div>
        </div>
    )
}

export default Learninglangiage
