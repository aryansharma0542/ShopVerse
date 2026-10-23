import Banner from "../component/Banner/Banner"
import ShippingWar from "../component/ShippingWarrenty/ShippingWar"
import Category from "../component/Category/Category"
import Selling from "../component/BestSelling/BestSelling"
import SecondBanner from "../component/SeondBanner/SecondBanner"
import NewArrivalProducts from "../component/NewArrivals/NewArrivals"
import Feedback from "../component/CustomersFeedBack/Customerfeedback"
import LatestBlog from "../component/LatestBlog/LatestBlog"

function Home(){
    return(
<>
<Banner />
<ShippingWar />
<Category />
<Selling />
<SecondBanner />
<NewArrivalProducts />
<Feedback />
<LatestBlog /> 
</>
    )
}
export default Home; 