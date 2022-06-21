import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import Table from "../Components/Table"

const Overview = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className='flex m-2'>
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview