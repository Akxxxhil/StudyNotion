import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import Actionactivebuttons from '../Components/core/Homepage/Actionactivebuttons';
import Banner from "../assets/videos/banner.mp4"
import CodingBlocks from '../Components/core/Homepage/CodingBlocks';
import Timeline from '../Components/core/Homepage/Timeline';
import Learninglangiage from '../Components/core/Homepage/Learninglangiage';
import InstructorSection from '../Components/core/Homepage/InstructorSection';
import Footer from "../Components/common/Footer"


function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white'>
        <NavLink to={"/signup"}>
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:shadow-none">
            <div className="flex felx-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <p><BiRightArrowAlt /></p>
            </div>
          </div>
        </NavLink>

        <div className='text-center text-4xl font-semibold mt-7'>
          <div>Empower Your Future with Coding Skills</div>
        </div>

        <div className="mt-4 w-[80%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <Actionactivebuttons active={true} linkto={"/signup"}>
            Learn More
          </Actionactivebuttons>
          <Actionactivebuttons active={false} linkto={"/signup"}>
            Book a Demo
          </Actionactivebuttons>
        </div>
      

      <div className='mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
        <video muted loop autoPlay className="shadow-[20px_20px_rgba(255,255,255)]">
          <source src={Banner} type='video/mp4' />
        </video>
      </div>
      

      {/* codes section 1  */}
      <div>
        <CodingBlocks
           position={"lg:flex-row"}
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
           position={"flex lg:flex-row-reverse my-20 justify-between flex-col lg:gap-10 gap-10"}
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

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
            Get the skills you need for a job that is in demand.
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <p className="text-[16px]">The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
           
             <Actionactivebuttons active={true} linkto={"/signup"}>
              Learn More
              </Actionactivebuttons>
            
            </div>
          </div>
        </div>
      

    <Timeline/>
    
    <Learninglangiage/>
   
    </div>
   
    

      {/* section 3 */}

      <div className='relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
      <InstructorSection/>
      </div>

      {/* footer */}
      <div>
            <Footer />
        </div>
    </div>
  )
}

export default Home
