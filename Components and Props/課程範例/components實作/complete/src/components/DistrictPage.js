import CommonButton from "./CommonButton"
import './DistrictPage.css'
import ArrowIcon from '../icon/right-arrow.png'
function CategoryCard (props) {
    return (
        <div className="category-card">
            <p>{props.category.name}</p>
            <img className="logo" src={props.category.logo} alt="logo"></img>
        </div>
    )
}

function CategoryList (props) {
    return (
        <div>
            <p>依類別搜尋</p>
            <CommonButton>
                <img src={ArrowIcon}/>
            </CommonButton>
            <div className="category-list">
            {
                props.categoryList.map((category)=>{
                    return <CategoryCard category={category}/>
                })
            }
            </div>
        </div>
    )
}

function ShopCard (props) {
    return (
        <div className="shop-card">
            <div className="shop-img">
                <img src={props.shop.img}/>
            </div>
            <div>
                <p>{props.shop.name}</p>
                <p>{props.shop.category}</p>
                <p>{props.shop.location}</p>
            </div>
            <div className="shop-rate">
                <div>{props.shop.rate}</div>
            </div>
        </div>
    )
}

function ShopList (props) {
    return (
        <div className="shop-list">
            {
                props.shopList.map((shop)=>{
                    return <ShopCard shop={shop}/>
                })
            }
        </div>
    )
}

function DistrictPage (props) {
    return (
        <div>
            DistrictPage
            <div className="district-title">
                <p>{props.district}美食外送</p>
                <p>將您喜愛的{props.district}美食外送餐廳到府</p>
            </div>
            <CategoryList categoryList={props.categoryList}/>
            <ShopList shopList={props.shopList}/>
        </div>
    )
}

export default DistrictPage