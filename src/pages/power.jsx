import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import ChartBar from "../Components/ChartBar"

const Power = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className='flex m-2'>
            <ChartBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Power