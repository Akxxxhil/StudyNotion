import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import instructor from "../../../assets/images/Instructor.png";
import Actionactivebuttons from "./Actionactivebuttons";

function InstructorSection() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-[50%]">
          <img className='shadow-white shadow-[-20px_-20px_0_0]' src={instructor} alt="" />
        </div>
        <div className="flex flex-col gap-3">
            <h1 className='lg:w-[50%] text-4xl font-semibold'>Become an instructor</h1>
            <p className='font-medium text-[16px] text-justify w-[90%] text-richblack-300'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
            <div  className='w-fit'>
            <Actionactivebuttons active={true} linkto={"/signup"}>
          <div className="flex justify-center items-center gap-2">
          Start Teaching Today
          <p><BiRightArrowAlt /></p>
          </div>
            </Actionactivebuttons>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
