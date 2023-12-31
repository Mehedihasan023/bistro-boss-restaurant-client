import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaAlignJustify, FaShoppingBag, FaUtensils, FaBook, FaList, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
    const [cart] = useCart();
    //TODO : load data from the server to have dynamic isAdmin based on data
    //const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054]">
                    {/* Sidebar content here */}

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaList></FaList> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                          

                        </> :  <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge badge-secondary">+{cart?.length || 0}</span>
                            </NavLink>
                            </li>
                        </>
                    }


                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li><NavLink to='/menu'><FaAlignJustify></FaAlignJustify> Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaShoppingBag></FaShoppingBag> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;