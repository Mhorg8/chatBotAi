import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full  shadow-md bg-gray-100 py-4 ">
           <div className="container flex justify-between items-center">
               {/* logo */}
               <div>
                   <Link to='/' className="text-2xl font-bold italic">
                       SinAi
                   </Link>
               </div>

               <div className="flex items-center gap-3">
                   <Link to='/login' className="text-sm md:text-base font-medium text-black/80 hover:text-black">
                       Log in
                   </Link>
                   <Link to='/register' className="text-sm md:text-base font-medium text-black/80 hover:text-black">
                       Register
                   </Link>
               </div>
           </div>
        </div>
    );
};

export default Header;