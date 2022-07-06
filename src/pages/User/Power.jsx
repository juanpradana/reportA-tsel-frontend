import Sidebar from "../../Components/User/Sidebar"
import Navbar from "../../Components/User/Navbar"
import ChartBar from "../../Components/User/ChartBar"
import MapsComponents from "../../Components/User/MapsComponents"

const Power = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className='flex m-4'>
            <MapsComponents />
          </div>
        </div>
      </div>
    </>
  )
  
}

export default Power