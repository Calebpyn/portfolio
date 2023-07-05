import { useContext } from "react"
import Burger from "./Burger"
import windowState from "../contexts/windowState"
import AboutMe from "./AboutMe"
import {AiOutlineCloudDownload} from 'react-icons/ai'
import fileToDownload from '../../public/Resume_CalebPayan.pdf'

function Portfolio() {

    //Context
    
    const context = useContext(windowState)

    const toggleClosed = context?.toggleClosed

    // const isClosed = context?.isClosed

    const handleToggle = () => {
        if(toggleClosed){
            toggleClosed()
        }
    }

    const handleDownload = () => {
      window.open(fileToDownload, '_blank')
    }


  return (
    <div className="flex flex-col h-screen w-screen justify-between items-center relative overflow-x-hidden">

      <div className="w-full px-32 py-20 md:p-32" style={{backgroundImage: `url('https://i.ibb.co/KDzbwHx/DSCF0811060722.jpg')`}}>

        <AboutMe/>

      </div>

      <div className="flex justify-between p-9 w-full items-center">

        <div className="font-black text-2xl">SOME OF MY WORK</div>

        <div className="fixed right-4 top-4">
          <div className='w-7 flex flex-col h-5 justify-between hover:cursor-pointer' onClick={() => handleToggle()}>
              <div className='bg-black h-[2px] w-full'></div>
              <div className='bg-black h-[2px] w-full'></div>
              <div className='bg-black h-[2px] w-full'></div>
          </div>
        </div>

      </div>



      <div className="w-full flex flex-col items-center justify-around md:flex-row md:items-baseline">

        <div className="p-8 w-3/4 flex flex-col justify-start shadow-2xl rounded-md mb-10 md:w-3/12 hover:scale-105 transitions hover:cursor-pointer md:h-full">

          <div className="flex flex-col h-[15%] justify-between mb-2">
            <span className="font-Roboto font-bold mb-2 text-lg">ExpoIngeniería 2023</span>
            <span className="text-slate-700 font-light mb-2">CETYS Universidad</span>
          </div>

          <div>

            <div className="bg-[url('https://i.ibb.co/gmMW00r/Screen-Shot-2023-06-21-at-20-03-14.png')] h-[15vh] md:h-[25vh] w-full bg-cover bg-center my-2 shadow-sm rounded-md"></div>

            <div className="mt-3">
              <p className="text-justify font-light">Led the team of developers in the development of the official website for "CETYS University Annual Engineering Expo #34," which serves as the platform for showcasing and assessing each project by official judges. Managed project timelines, task delegation, and teamwork to ensure successful delivery.</p>
            </div>
          </div>

        </div>



        <div className="p-8 w-3/4 flex flex-col justify-start shadow-2xl rounded-md mb-10 md:w-3/12 hover:scale-105 transitions hover:cursor-pointer md:h-full">



          <div className="flex flex-col h-[15%] justify-between mb-2">
            <span className="font-Roboto font-bold mb-2 text-lg">ExpatGuardian Web Page</span>
            <span className="text-slate-700 font-light mb-2">Expat Guardian</span>
          </div>

          <div>

            <div className="bg-[url('https://i.ibb.co/QHHDFzp/Screen-Shot-2023-06-21-at-20-19-10.png')] h-[15vh] w-full bg-cover bg-center my-2 shadow-sm rounded-md md:h-[25vh]"></div>

            <div className="mt-3">
              <p className="text-justify font-light">Refined a website for a law firm by utilizing the Vite framework, showcasing my proficiency in web development and front-end technologies. Collaborated with a team to create a visually appealing website for a law firm.</p>
            </div>
          </div>

        </div>



        <div className="p-8 w-3/4 flex flex-col justify-start shadow-2xl rounded-md mb-10 md:w-3/12 hover:scale-105 transitions hover:cursor-pointer md:h-full">

          <div className="flex flex-col h-[15%] justify-between mb-2">
            <span className="font-Roboto font-bold mb-2 text-lg">GEAR WEB3 REGIONAL HACKATHON</span>
            <span className="text-slate-700 font-light mb-2">Smart Charity</span>
          </div>

          <div>

            <div className="bg-[url('https://i.ibb.co/9WhTHHj/Screen-Shot-2023-06-29-at-14-30-21.png')] h-[15vh] w-full bg-cover bg-center my-2 shadow-sm rounded-md md:h-[25vh]"></div>

            <div className="mt-3">
              <p className="text-justify font-light">2nd place in a 24-hour regional Gear Hackathon with web3-based solutions, competing against teams including PhD students. Team representative, delivering a compelling pitch showcasing the value of our web3-powered solution. Demonstrated resilience, collaboration, and passion for emerging technologies in the fast-paced Hackathon.</p>
            </div>
          </div>

        </div>


      </div>

      <div className="p-9 w-full">

        <div className="flex justify-start w-full">
          <span className="font-black text-2xl">RESUME</span>
        </div>

        <div className="mt-5 w-full justify-around flex">
          <button className="w-4/5 flex justify-around p-3 border-2 border-black rounded-full items-center px-6 font-semibold md:w-1/5" onClick={() => handleDownload()}>Download <AiOutlineCloudDownload style={{fontSize: '25px'}} /></button>
        </div>


      </div>

      <div className="w-full">

        <div className="flex justify-start w-full p-9 pb-7">
          <span className="font-black text-2xl">CONTACT</span>
        </div>

        <div className="w-full flex justify-around">

          <div className="w-3/4 flex h-[50vh] rounded-md shadow-2xl">

            <div className="bg-[url('https://i.ibb.co/85HWxbx/IMG-2226.jpg')] bg-center bg-cover w-1/2 rounded-l-md"></div>

            <form className="w-1/2 h-full flex flex-col justify-around items-left p-5">

              <input placeholder="Name" className="border-b-2 outline-none focus:border-black transitions md:w-1/2"/>
              <input placeholder="Email" className="border-b-2 outline-none focus:border-black transitions md:w-1/2"/>
              <input placeholder="Company" className="border-b-2 outline-none focus:border-black transitions md:w-1/2"/>
              <input placeholder="Message" className="border-b-2 outline-none focus:border-black transitions md:w-1/2"/>
              <input type="submit" className="border-2 border-black rounded-full font-light"/>

            </form>

          </div>

        </div>


      </div>

      <div className="mt-14 bg-gray-200 p-9 w-full text-gray-700 font-light text-sm flex justify-start">

        <span>Caleb Payán Portfolio</span>

      </div>


      <div className="">
        <Burger isBgW={true}/>
      </div>


    </div>
  )
}

export default Portfolio