import Sidebar from "../../Components/User/Sidebar"
import Navbar from "../../Components/User/Navbar"
import Table from "../../Components/User/Table"

const Network = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className='p-4'>
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default Network