import Style from './LeftPanel.module.css'

function LeftPanel({ title, description, backgroundImage}) {
return (
<div className={` ${Style.LeftContent}`}>
<img src={backgroundImage} className={Style.backgroundImage} alt="" />
<div className={`${Style.CardLeft}`}>
<h3 className={Style.ShopVerse}><i class={`fa-solid fa-bag-shopping ${Style.ShoppingBag}`}></i> Shop<span className={Style.Verse}>Verse</span></h3>
<ul className="d-flex list-unstyled gap-4 mb-md-2 text-secondary">
<li>More Choices</li>
<li>Better Deals</li>
<li>Shop Smarter</li>
</ul>
<h1 className={`${Style.Title} fw-bold ${Style.title}`}>{title}</h1>
<p className={` ${Style.paraTwo} mb-md-2`}>{description}</p>
<div className="d-flex flex-wrap gap-3 md:gap-5">
<div className={`d-flex align-items-center ${Style.ShippingWarrenty}`}>
<i className="fa-solid fa-truck-fast"></i>
<div className="text-secondary">Fast <br />Delivery</div>
</div>
<div className={`d-flex align-items-center ${Style.ShippingWarrenty}`}>
<i className="fa-solid fa-shield-halved"></i>
<div className="text-secondary">Secure<br />Payments</div>
</div>
<div className={`d-flex align-items-center ${Style.ShippingWarrenty}`}>
<i className="fa-solid fa-headset"></i>
<div className="text-secondary">24/7<br />Support</div>
</div>
</div>
</div>
</div>
);
}

export default LeftPanel;