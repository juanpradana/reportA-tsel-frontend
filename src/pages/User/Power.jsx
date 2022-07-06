import Sidebar from "../../Components/User/Sidebar"
import Navbar from "../../Components/User/Navbar"
import ChartBar from "../../Components/User/ChartBar"

const Power = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className='flex m-4'>
            <ChartBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Power