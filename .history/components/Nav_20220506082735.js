
import AppleIcon from "@material-ui/icons/Apple";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Nav() {
  return (
    <div className="nav-color text-white h-14 flex flex-row space-x-14 mx-auto text-base">
        <AppleIcon className=' nav-margin h-7 mt-3 text-gray-300 hover:text-white'/>
        <h1 className="mt-3 text-gray-300 hover:text-white cursor-pointer">Mac </h1>
        <h1 className="mt-3 text-gray-300 hover:text-white cursor-pointer">iPad </h1>
        <h1 className="mt-3 text-gray-300 hover:text-white cursor-pointer">iphone </h1>
        <h1 className="mt-3 text-gray-300 hover:text-white cursor-pointer">Watch </h1>
        <h1 className="mt-3 text-gray-300 hover:text-white cursor-pointer">TV </h1>
        <h1 onClick={} => router.push('airt') className="mt-3 text-gray-300 hover:text-white cursor-pointer">Airtags </h1>
        <SearchIcon className="mt-3 text-gray-300 hover:text-white cursor-pointer"/>
        <ShoppingBasketIcon className="mt-3 text-gray-300 hover:text-white cursor-pointer"/>
    </div>
  )
}

export default Nav