import AppleIcon from "@material-ui/icons/Apple"

function Nav() {
  return (
    <div className="nav-color text-white h-14 flex flex-row space-x-14">
        <AppleIcon className='h-7 mt-3 text-gray-300 hover:text-white'/>
        <h1 className="mt-3 text-great">Mac </h1>
    </div>
  )
}

export default Nav