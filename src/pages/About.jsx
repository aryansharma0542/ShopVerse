
import Style from '../pages/About.module.css';
import AboutUsBanner from '../component/Abouts/AboutUsBanner/AboutUsBanner';
import AboutUsProfit from '../component/Abouts/AboutUsProfit/AboutUsProfit';
import AboutUsGrowingCommunity from '../component/Abouts/AboutUsGrowingComunity/AboutUsGrowingCommunity';
import AboutUsTrust from '../component/Abouts/AboutUsTrust/AboutUsTrust';
import AboutUsJourney from '../component/Abouts/AboutUsJounery/AboutUsJourney';

function About(){
return(
<>
<div className={`${Style.BreadCrumb} mb-0 mb-md-0`}>
Home  
<i className="fa-solid fa-angle-right"></i>
About Us
</div>
<AboutUsBanner />
<AboutUsProfit />
<AboutUsGrowingCommunity />
<AboutUsTrust />
<AboutUsJourney />
</>
)
}
export default About;