import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import Actionactivebuttons from '../Components/core/Homepage/Actionactivebuttons';
import Banner from "../assets/videos/banner.mp4"
import CodingBlocks from '../Components/core/Homepage/CodingBlocks';
import Timeline from '../Components/core/Homepage/Timeline';
import Learninglangiage from '../Components/core/Homepage/Learninglangiage';


function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className='max-w-maxContent text-white mx-auto w-11/12 flex flex-col relative justify-between'>
        <NavLink to={"/signup"}>
          <div className='mt-16 p-1 mx-auto rounded-full bg-[#161D29] font-bold w-fit transition-all duration-200 hover:scale-95  '>
            <div className='flex flex-row gap-2 items-center px-10 py-[5px] text-[#999DAA]'>
              <p>Become an Instructor</p>
              <p><BiRightArrowAlt /></p>
            </div>
          </div>
        </NavLink>

        <div className='text-center text-4xl font-semibold mt-7'>
          <div>Empower Your Future with Coding Skills</div>
        </div>

        <div className='w-[90%] mt-4 text-center text-md font-bold text-[#838894]'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        <div className='flex flex-row gap-7 mt-8 mx-auto'>
          <Actionactivebuttons active={true} linkto={"/signup"}>
            Learn More
          </Actionactivebuttons>
          <Actionactivebuttons active={false} linkto={"/signup"}>
            Book a Demo
          </Actionactivebuttons>
        </div>
      </div>

      <div className='shadow-blue-300 mx-9 my-12'>
        <video muted loop autoPlay>
          <source src={Banner} type='video/mp4' />
        </video>
      </div>

      {/* codes section 1  */}
      <div>
        <CodingBlocks
          position={`flex-row`}
          heading={"Unlock your coding potential with our online courses."}
          subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
          Actionactivebuttons1={
            {
              active: true,
              linkto: "/signup",
              btntext: "Try it Yourself"
            }
          }
          Actionactivebuttons2={
            {
              active: false,
              linkto: "/login",
              btntext: "Learn More"
            }
          }
          codeBlocks={
            `<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a>This is myPage</h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a>\n<a href="/three">Three</a>\n</nav>\n</body>`
          }
          codecolor={'text-yellow-400'}
        ></CodingBlocks>
      </div>

      {/* codes section 2  */}
      <div>
        <CodingBlocks
          position={`flex-row-reverse`}
          heading={"Start coding in seconds"}
          subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
          Actionactivebuttons1={
            {
              active: true,
              linkto: "/signup",
              btntext: "Continue Lesson"
            }
          }
          Actionactivebuttons2={
            {
              active: false,
              linkto: "/login",
              btntext: "Learn More"
            }
          }
          codeBlocks={
            `<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a>This is myPage</h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a>\n<a href="/three">Three</a>\n</nav>\n</body>`
          }
          codecolor={'text-yellow-400'}
        ></CodingBlocks>
      </div>

      {/* section 2 */}

      <div className='bg-white'>
        <div className='homepage_bg h-[293px]'>
          <div className='w-11/12  flex flex-row justify-center  gap-5 mx-auto'>
            <div className='flex flex-row gap-7 mt-[10%] text-white items-center '>
              <Actionactivebuttons active={true} linkto={"/signup"}>
                <div className='flex items-center gap-2'>
                  <p>Explore Full Catalog</p>
                  <p><BiRightArrowAlt /></p>
                </div>
              </Actionactivebuttons>
              <Actionactivebuttons active={false} linkto={"/login"}>
                Learn More
              </Actionactivebuttons>
            </div>
          </div>
        </div>

        <div className='w-11/12 mt-8'>
          <div className='flex justify-center gap-8 mt-6'>
            <div className='text-4xl font-semibold'>
            Get the skills you need for a job that is in demand.
            </div>
            <div className='flex flex-col gap-6'>
              <p className='font-semibold'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
             <div className='w-fit'>
             <Actionactivebuttons active={true} linkto={"/signup"}>
              Learn More
              </Actionactivebuttons>
             </div>
            </div>
          </div>
        </div>
      </div>

    <Timeline/>
    
    <Learninglangiage/>
   
    

      {/* section 3 */}

      {/* footer */}
    </div>
  )
}

export default Home
