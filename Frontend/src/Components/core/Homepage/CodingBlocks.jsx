import React from 'react'
import Actionactivebuttons from './Actionactivebuttons'
import { BiRightArrowAlt } from 'react-icons/bi'
import { TypeAnimation } from 'react-type-animation';

function CodingBlocks({ position, heading, subheading, Actionactivebuttons1, Actionactivebuttons2, backgroundgardient, codecolor, codeBlocks }) {
    return (
        <div className={`flex ${position} my-20 justify-between gap-4`}>

            {/* section 1 */}
            <div className='w-[50%] flex flex-col gap-8'>
                <span className='text-white font-bold text-4xl'>{heading}</span>
                <div className='text-[#838894] font-semibold'>
                    {subheading}
                </div>
                <div className='flex gap-7 mt-7'>
                    <Actionactivebuttons active={Actionactivebuttons1.active} linkto={Actionactivebuttons1.linkto}>
                        <div className='flex items-center gap-2'>
                            <p>{Actionactivebuttons1.btntext}</p>
                            <p><BiRightArrowAlt /></p>
                        </div>

                    </Actionactivebuttons>
                    <Actionactivebuttons active={Actionactivebuttons2.active} linkto={Actionactivebuttons2.linkto}>
                        <p>{Actionactivebuttons2.btntext}</p>
                    </Actionactivebuttons>
                </div>
            </div>

            {/* section 2 */}
            <div className='h-fit w-[100%] flex flex-row py-4 lg:w-[500px]'>
                <div className='text-[#6E727F] text-center flex flex-col font-bold w-[10%]'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>
                <div className={`w-[90%] flex flex-col gap-2 ${codecolor} pr-2`}>
                    <TypeAnimation sequence={[codeBlocks, 2000, '']} repeat={Infinity} 

                    style={
                        {
                            whiteSpace:"pre-line",
                            display:"block"
                        }
                    }
                    omitDeletionAnimation="true"
                    />


                </div>
            </div>

        </div>
    )
}

export default CodingBlocks
