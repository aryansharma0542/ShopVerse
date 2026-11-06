import style from './AdminLayout.module.css';
import AdminSidebar from '../Sidebar/AdminSidebar';
import AdminHeader from '../AdminHeader/AdminHeader';   
import { Outlet } from 'react-router-dom';

function AdminLayout() {
return (


<div className='d-flex'>
        <AdminSidebar />
    
        <div className='flex-grow-1'>
            <AdminHeader /> 
            <Outlet />
        </div>
</div>
)
}
export default AdminLayout;