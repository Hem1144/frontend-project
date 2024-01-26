import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" mt-8">
      <div className="container mx flex justify-around items-center">
        <Link to="/" className=" text-[#111926] text-lg">
          <span className=" text-[1.6rem] font-bold">ARCADE</span>
        </Link>
        <div className="flex space-x-12 ">
          <Link to="/product" className="text-[#111926]">
            <span className=" text-[1.2rem]">Product</span>
          </Link>
          <Link to="/customers" className="text-[#111926]">
            <span className=" text-[1.2rem]">Customers</span>
          </Link>
          <Link to="/resources" className="text-[#111926]">
            <span className=" text-[1.2rem]">Resources</span>
          </Link>
          <Link to="/company" className="text-[#111926]">
            <span className=" text-[1.2rem]">Company</span>
          </Link>
          <Link to="/pricing" className="text-[#111926]">
            <span className=" text-[1.2rem]">Pricing</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
