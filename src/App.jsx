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

function App(){
    const location = useLocation();
    const hideHeaderFooter = ["/login", "/signup","/forgetpassword","/resetpassword"].includes(location.pathname.toLowerCase());
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
</Routes>
{!hideHeaderFooter && <Footer />}
</>
)}
export default App;