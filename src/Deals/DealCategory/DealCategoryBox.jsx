import Style from './DealCategory.module.css';
import { DealCategories } from '../../data';

function DealCategoryBox({  selectedDealCategory,
SetSelectedCategory}){
return(
<section>
<div className={Style.CategoryContainer}>
<div className={`${Style.CategoryBox}`}>
{DealCategories.map((cat , index) => (
<div className={`${Style.cardCategory} ${selectedDealCategory === cat.name ? Style.ActiveCard : ""}`} key={index} onClick={() => SetSelectedCategory(cat.name)}>     
<i className={`fa-solid ${cat.icon}`}></i>
<p className='mb-lg-0'>{cat.name}</p>
</div>  
))}  
</div>
</div>
</section>
    )
}
export default DealCategoryBox;