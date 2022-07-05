import Sidebar from "../../Components/User/Sidebar"
import Navbar from "../../Components/User/Navbar"
import Table from "../../Components/User/Table"
import ChartBar from "../../Components/User/ChartBar"

const Overview = () => {
  return (
    <>
      <div className="flex flex-row min-h-screen w-screen">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className='flex mt-2 ml-4 mb-2 mr-0'>
            <ChartBar />
          </div>
          <div className='ml-4 mb-4 mt-0 mr-0'>
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview