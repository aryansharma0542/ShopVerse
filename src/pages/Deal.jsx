import DealBanner from "../Deals/DealBanner/DealBanner";
import DealCategoryBox from "../Deals/DealCategory/DealCategoryBox";
import DealProducts from "../Deals/DealProducts/DealProducts";
import DealShipping from "../Deals/DealShipping/DealShipping";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AllProducts } from '../data';

function Deals(){
const { category } = useParams();
const [selectedDealCategory , SetSelectedCategory] = useState(category || "All Deals");
const dealProducts = AllProducts.filter((product) => {
const IsDeals = product.deal === true;
const MatchesCategory = selectedDealCategory === "All Deals" || product.mainCategory === selectedDealCategory;
return IsDeals && MatchesCategory;
})
return(
<>

<DealBanner />
<DealCategoryBox
selectedDealCategory={selectedDealCategory}
SetSelectedCategory={SetSelectedCategory}/>
<DealProducts dealProducts={dealProducts} />
<DealShipping />

</>
    )
}
export default Deals;