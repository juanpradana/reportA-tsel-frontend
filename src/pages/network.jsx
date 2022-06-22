import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import Table from "../Components/Table"

const Network = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className='m-4'>
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default Network