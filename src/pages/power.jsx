import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"

const Power = () => {
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

export default Power