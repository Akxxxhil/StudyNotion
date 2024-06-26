import React from 'react'
import Logo1 from "../../../assets/Timelinelogo/Logo1.svg"
import Logo2 from "../../../assets/Timelinelogo/Logo2.svg"
import Logo3 from "../../../assets/Timelinelogo/Logo3.svg"
import Logo4 from "../../../assets/Timelinelogo/Logo4.svg"
import timelineimage from "../../../assets/Timelinelogo/sideimage.png"

const timeline = [
    {
        id: 1,
        Logo: Logo1,
        Heading: "Leadership",
        Description: "Fully committed to the success company"
    },
    {
        id: 2,
        Logo: Logo2,
        Heading: "Responsibility",
        Description: "Students will always be our top priority"
    },
    {
        id: 3,
        Logo: Logo3,
        Heading: "Flexibility",
        Description: "The ability to switch is an important skills"
    },
    {
        id: 4,
        Logo: Logo4,
        Heading: "Solve the problem",
        Description: "Code your way to a solution"
    }
]

function Timeline() {
    return (
        <div>
            <div className='bg-white text-black relative'>
                <div className='flex'>
                    <div className='w-[45%] flex flex-col gap-5 mt-5'>
                        {
                            timeline.map((item) => {
                                return (
                                    <div key={item.id} className='flex gap-6 items-center'>
                                        <div>
                                            <img src={item.Logo} alt="" />
                                        </div>
                                        <div>
                                            <p className='font-semibold'>{item.Heading}</p>
                                            <p>{item.Description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='mb-[100px]'>

                        <img className='shadow-white object-cover h-fit' src={timelineimage} alt="" />

                        <div className='absolute py-7 left-[27%] translate-x-[70%] translate-y-[-70%] flex   text-white h-[100px] bg-[#014A32]'>
                            <div className='flex gap-5 items-center px-7 border-r '>
                                <p className='text-3xl font-bold'>10</p>
                                <p className='text-sm'>YEARS EXPERIENCES</p>
                            </div>
                            <div className='flex gap-5 items-center px-7'>
                                <p className='text-3xl font-bold'>250</p>
                                <p className='text-sm'>TYPES OF COURSES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
