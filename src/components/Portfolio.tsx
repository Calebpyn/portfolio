import { useContext } from "react"
import Burger from "./Burger"
import windowState from "../contexts/windowState"

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


  return (
    <div className="flex flex-col h-screen w-full justify-between items-center">

        <div className="flex justify-between p-9 w-full items-center">

          <div className="font-black text-2xl">SOME OF MY WORK</div>

          <div>
            <div className='w-7 flex flex-col h-5 justify-between hover:cursor-pointer' onClick={() => handleToggle()}>
                <div className='bg-black h-[2px] w-full'></div>
                <div className='bg-black h-[2px] w-full'></div>
                <div className='bg-black h-[2px] w-full'></div>
            </div>
          </div>

        </div>



        <div className="w-full flex flex-col items-center justify-around">

          <div className="p-8 w-3/4 flex flex-col justify-between shadow-2xl rounded-md mb-10">

            <span className="font-Roboto font-bold mb-2 text-lg">ExpoIngeniería 2023</span>
            <span className="text-slate-700 font-light mb-2">CETYS Universidad</span>

            <div>

              <div className="bg-[url('https://i.ibb.co/gmMW00r/Screen-Shot-2023-06-21-at-20-03-14.png')] h-[15vh] w-full bg-cover bg-center my-2 shadow-sm rounded-md"></div>

              <div>
                <p className="text-justify font-light">Led the team of developers in the development of the official website for "CETYS University Annual Engineering Expo #34," which serves as the platform for showcasing and assessing each project by official judges. Managed project timelines, task delegation, and teamwork to ensure successful delivery.</p>
              </div>
            </div>

          </div>



          <div className="p-8 w-3/4 flex flex-col justify-between shadow-2xl rounded-md mb-10">

            <span className="font-Roboto font-bold mb-2 text-lg">ExpatGuardian Web Page</span>
            <span className="text-slate-700 font-light mb-2">Expat Guardian</span>

            <div>

              <div className="bg-[url('https://i.ibb.co/QHHDFzp/Screen-Shot-2023-06-21-at-20-19-10.png')] h-[15vh] w-full bg-cover bg-center my-2 shadow-sm rounded-md"></div>

              <div>
                <p className="text-justify font-light">Refined a website for a law firm by utilizing the Vite framework, showcasing my proficiency in web development and front-end technologies.Collaborated with a team to create a visually appealing website for a law firm.</p>
              </div>
            </div>

          </div>



          <div className="p-8 w-3/4 flex flex-col justify-between shadow-2xl rounded-md mb-10">

            <span className="font-Roboto font-bold mb-2 text-lg">GEAR WEB3 REGIONAL HACKATHON</span>
            <span className="text-slate-700 font-light mb-2">Smart Charity</span>

            <div>

              <div className="bg-[url('https://i.ibb.co/9WhTHHj/Screen-Shot-2023-06-29-at-14-30-21.png')] h-[15vh] w-full bg-cover bg-center my-2 shadow-sm rounded-md"></div>

              <div>
                <p className="text-justify font-light">2nd place in a 24-hour regional Gear Hackathon with web3-based solutions, competing against teams including PhD students. Team representative, delivering a compelling pitch showcasing the value of our web3-powered solution. Demonstrated resilience, collaboration, and passion for emerging technologies in the fast-paced Hackathon.</p>
              </div>
            </div>

          </div>



        </div>



        <div>
          <Burger isBgW={true}/>
        </div>


    </div>
  )
}

export default Portfolio