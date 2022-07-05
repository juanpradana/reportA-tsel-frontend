export default function FormAction({
  handleSubmit,
  type='Button',
  action='submit',
  text
}){
  return(
      <>
      {
          type==='Button' ?
          <button
              type={action}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-500/50 hover:bg-purple-600/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 mt-10"
              onSubmit={handleSubmit}
          >

              {text}
          </button>
          :
          <></>
      }
      </>
  )
}