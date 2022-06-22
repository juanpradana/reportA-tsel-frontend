const Table = () => {
  return(
    <div className="p-2 sm:p-4 box-content max-w-full rounded-md border border-gray-500">
      <h1 className="text-lg sm:text-2xl">Data Table</h1>

      <div className="m-1 sm:m-5 flex flex-col h-[30vh]">
        <div className="grow overflow-scroll">
          <table className="relative w-full">
            <thead>
              <tr>
                <th className="sticky left-0 top-0 z-[3] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
              </tr>
            </thead>
            <tbody className="bg-red-100">
              <tr>
                <td className="sticky left-0 z-[1] text-xs px-2 py-1 sm:px-6 sm:py-4 text-center bg-white">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
              </tr>
              <tr>
                <td className="sticky left-0 z-[1] text-xs px-2 py-1 sm:px-6 sm:py-4 text-center bg-white">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
              </tr>
              <tr>
                <td className="sticky left-0 z-[1] text-xs px-2 py-1 sm:px-6 sm:py-4 text-center bg-white">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
              </tr>
              <tr>
                <td className="sticky left-0 z-[1] text-xs px-2 py-1 sm:px-6 sm:py-4 text-center bg-white">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
              </tr>
              <tr>
                <td className="sticky left-0 z-[1] text-xs px-2 py-1 sm:px-6 sm:py-4 text-center bg-white">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
              </tr>
              <tr>
                <td className="sticky left-0 z-[1] text-xs px-2 py-1 sm:px-6 sm:py-4 text-center bg-white">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
              </tr>
              <tr>
                <td className="sticky left-0 z-[1] text-xs px-2 py-1 sm:px-6 sm:py-4 text-center bg-white">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
              </tr>
              <tr>
                <td className="sticky left-0 z-[1] text-xs px-2 py-1 sm:px-6 sm:py-4 text-center bg-white">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
              </tr>
              <tr>
                <td className="sticky left-0 z-[1] text-xs px-2 py-1 sm:px-6 sm:py-4 text-center bg-white">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
                <td className="text-xs px-2 py-1 sm:px-6 sm:py-4 text-center">Column</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table