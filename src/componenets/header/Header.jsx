import { NavLink } from "react-router-dom";


const Header = () => {
    const navLink =<>
    <li className="text-2xl text-black font-semibold"><NavLink to='/'>Home</NavLink></li>
    <li className="text-2xl text-black font-semibold"><NavLink to='/login'>Login</NavLink></li>
    <li className="text-2xl text-black font-semibold"><NavLink to='/register'>Register</NavLink></li>
    <li className="text-2xl text-black font-semibold"><NavLink to='/hero'>Hero</NavLink></li>
    </>
    return (
        <div>
           <div className="navbar bg-yellow-500">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="text-2xl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Mehebul Alif</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Header;