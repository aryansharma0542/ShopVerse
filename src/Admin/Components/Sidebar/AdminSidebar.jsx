import Style from './AdminSidebar.module.css';
import { NavLink } from 'react-router-dom';

function AdminSidebar() {

return (
<div className={Style.Sidebar}>
    <h2 className={` ${Style.Logo} mb-lg-3`}>Shop<span className={Style.Verse}>Verse</span><span className={Style.AdminPanelLogo}>(Admin Panel)</span></h2>
    <ul className={`${Style.Menulist}`}>
        <li><NavLink to="/admin" end><i className="fa-solid fa-gauge"></i> Dashboard</NavLink></li>
        <li><NavLink to="/admin/products"><i className="fa-solid fa-box"></i> Products</NavLink></li>
        <li><NavLink to="/admin/orders"><i className="fa-solid fa-cart-shopping"></i> Orders</NavLink></li>
        <li><NavLink to="/admin/categories"><i className="fa-solid fa-layer-group"></i> Categories</NavLink></li>
        <li><NavLink to="/admin/customers"><i className="fa-solid fa-users"></i> Customer</NavLink></li>
        <li><NavLink to="/admin/coupons"><i className="fa-solid fa-ticket"></i> Coupons</NavLink></li>
        <li><NavLink to="/admin/reviews"><i className="fa-solid fa-star"></i> Reviews</NavLink></li>
        <li><NavLink to="/admin/reports"><i className="fa-solid fa-chart-line"></i> Reports</NavLink></li>
        <li><NavLink to="/admin/settings"><i className="fa-solid fa-gear"></i> Settings</NavLink></li>
        <li className={` ${Style.Logout} px-0`}><button className={Style.button}><i className="fa-solid fa-right-from-bracket"></i> Logout</button></li>
    </ul>
</div>
)
}
export default AdminSidebar;