import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import Content from "../Components/Content"

const Overview = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Content />
        </div>
      </div>
    </>
  )
}

export default Overview