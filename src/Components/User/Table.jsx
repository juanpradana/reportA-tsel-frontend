/* eslint-disable array-callback-return */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Table = () => {
  return(
    <div className="p-2 sm:p-4 box-content max-w-full rounded-md border border-gray-500">
      <h1 className="text-lg sm:text-2xl">Data Table</h1>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
            Column
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
            <div className='py-1'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#edit'
                    className={classNames(
                      active
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#duplicate'
                    className={classNames(
                      active
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Duplicate
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

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
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
                <th className="sticky top-0 z-[2] text-xs px-1 py-0.5 sm:px-6 sm:py-3 text-red-900 bg-red-300">Header</th>
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