import ShopSideBar from '../../ShopSideBar/ShopSideBar';

function NewArrivalsSidebar({
  newArrivalCategory,
  setNewArrivalCategory,
  newArrivalMinPrice,
  setNewArrivalMinPrice,
  newArrivalBrand,
setNewArrivalBrand,
}){
    return(
        <ShopSideBar
        selectedCategory={newArrivalCategory}
        SetSelectedCategory={setNewArrivalCategory}
        MinPrice={newArrivalMinPrice}
        SetMinPrice={setNewArrivalMinPrice}
        selectedBrand={newArrivalBrand}
SetSelectedBrand={setNewArrivalBrand}
        />
    )
}
export default NewArrivalsSidebar;