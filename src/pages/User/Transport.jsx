import Sidebar from "../../Components/User/Sidebar"
import Navbar from "../../Components/User/Navbar"

const Transport = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className="text-center text-lg">{window.location.pathname} Page Under Maintenance!</div>
        </div>
      </div>
    </>
  )
}

export default Transport