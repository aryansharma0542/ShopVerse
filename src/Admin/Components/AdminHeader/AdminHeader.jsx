import Style from './AdminHeader.module.css'

function AdminHeader() {
return(
<div className={`d-flex align-items-center justify-content-between  ${Style.AdminHeader}`}>

<div className={` ${Style.HeaderLeft} d-flex align-items-center gap-lg-4`}>
<i className="fa-solid fa-bars"></i>
   <div className={Style.SearchBox}>
     <i className="fa-solid fa-magnifying-glass"></i>
<input type="text" placeholder='Search in admin panel...' />
</div>
</div>
<div className={` ${Style.HeaderRight} d-flex align-items-center gap-lg-4`}>
        <div className={Style.Notification}>
    <i className="fa-regular fa-bell"></i>
    <span>3</span>
    </div>

    <div className={` ${Style.AdminProfile} d-flex align-items-center gap-lg-2 cursor-pointer`}>
         <img src="https://i.pravatar.cc/40" alt="Admin" />
         <span className={Style.AdminName}>Admin</span>
            <i className="fa-solid fa-chevron-down"></i>
    </div>
</div>
</div>
)
}
export default AdminHeader;