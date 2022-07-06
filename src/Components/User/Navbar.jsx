import UserMenu from "./MenuUser"

function Navbar() {
  return (
    <div className='w-full h-12 flex justify-end items-center px-8 text-white bg-black'>
      <UserMenu />
    </div>
  )
}

export default Navbar