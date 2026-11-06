import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Routes , Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NewArrivals from "./pages/NewArrivals";
import Contact from "./pages/Contact"
import About from "./pages/About"
import Deals from "./pages/Deal";
import DetailPage from "./pages/ProductDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Forget from "./pages/Forget";
import Reset from "./pages/Reset";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirm from "./pages/OrderConfirm";
import TrackOrder from './pages/TrackOrder'


// Admin
import AdminLayout from "./Admin/Components/AdminLayout/AdminLayout";
import Orders from "./Admin/Pages/Orders/Orders";
import Products from "./Admin/Pages/Products/Products";
import Categories from "./Admin/Pages/Categories/Categories";
import Customers from "./Admin/Pages/Customers/Customers";
import Coupon from "./Admin/Pages/Coupon/Coupon";
import Reviews from "./Admin/Pages/Reviews/Reviews";
import Setting from "./Admin/Pages/Settings/Setting";
import Reports from "./Admin/Pages/Reports/Reports";
import Dashboard from "./Admin/Pages/Dashboard/Dashboard";


function App(){
    const location = useLocation();
    const hideHeaderFooter = ["/login", "/signup","/forgetpassword","/resetpassword" , "/admin" ].includes(location.pathname.toLowerCase()) || location.pathname.toLowerCase().startsWith("/admin");;
return(
<>
{!hideHeaderFooter && <Header />}
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/shop" element={<Shop />}/>
<Route path="/shop/:category" element={<Shop />}></Route>
<Route path="/Deals" element={<Deals />}></Route>
<Route path="/Deals/:category" element={<Deals />}></Route>
<Route path="/NewArrivals" element={<NewArrivals />}></Route>
<Route path="/Contact" element={<Contact />}></Route>
<Route path="/About" element={<About />}></Route>
<Route path="/DetailPage/:ProductID" element={<DetailPage />}></Route>
<Route path="/login" element={<Login />}></Route>
<Route path="/signup" element={<SignUp />}></Route>
<Route path="/forgetpassword" element={<Forget />}></Route>
<Route path="/resetpassword" element={<Reset />}></Route>
<Route path="/wishlist" element={<Wishlist />}></Route>
<Route path="/Cart" element={<Cart />}></Route>
<Route path="/Checkout" element={<Checkout />}></Route>
<Route path="/OrderConfirm" element={<OrderConfirm />}></Route>
<Route path="/TrackOrder" element={<TrackOrder/>}></Route>

{/* Admin */}
<Route path="/admin" element={<AdminLayout />}>
<Route index element={<Dashboard />}></Route>

<Route path="products" element={<Products />}></Route>
    <Route path="orders" element={<Orders />}></Route>
    <Route path="categories" element={<Categories />}></Route>
    <Route path="customers" element={<Customers />}></Route>
    <Route path="coupons" element={<Coupon />}></Route>
    <Route path="reviews" element={<Reviews />}></Route>
    <Route path="settings" element={<Setting />}></Route>
    <Route path="reports" element={<Reports />}></Route>
</Route>

</Routes>
{!hideHeaderFooter && <Footer />}
</>
)}
export default App;