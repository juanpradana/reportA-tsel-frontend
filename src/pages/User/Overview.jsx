import Sidebar from "../../Components/User/Sidebar"
import Navbar from "../../Components/User/Navbar"
import Table from "../../Components/User/Table"
import ChartBar from "../../Components/User/ChartBar"
import MapsComponents from "../../Components/User/MapsComponents"

const Overview = () => {
  return (
    <>
      <div className="flex flex-row min-h-screen w-screen">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className='flex-none sm:flex mt-2 ml-4 mb-2'>
            <ChartBar />
            <MapsComponents />
          </div>
          <div className='flex ml-4 mb-4'>
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview