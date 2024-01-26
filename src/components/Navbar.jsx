import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <div>
      <nav className="container mx-auto py-6 px-36 ">
        <div className=" flex items-center gap-36 ">
          <Link to="/" className=" text-[#111926] text-lg">
            <span className=" text-[1.6rem] font-bold">ARCADE</span>
          </Link>
          <div className="flex space-x-12 ">
            <Link to="/product" className="text-[#111926]">
              <span className=" text-[1.2rem] flex items-center">
                Product {<MdKeyboardArrowDown className=" text-2xl" />}
              </span>
            </Link>
            <Link to="/customers" className="text-[#111926]">
              <span className=" text-[1.2rem] flex items-center">
                Customers {<MdKeyboardArrowDown className=" text-2xl" />}
              </span>
            </Link>
            <Link to="/resources" className="text-[#111926]">
              <span className=" text-[1.2rem] flex items-center">
                Resources {<MdKeyboardArrowDown className=" text-2xl" />}
              </span>
            </Link>
            <Link to="/company" className="text-[#111926]">
              <span className=" text-[1.2rem] flex items-center">
                Company {<MdKeyboardArrowDown className=" text-2xl" />}
              </span>
            </Link>
            <Link to="/pricing" className="text-[#111926]">
              <span className=" text-[1.2rem] flex items-center">Pricing</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
