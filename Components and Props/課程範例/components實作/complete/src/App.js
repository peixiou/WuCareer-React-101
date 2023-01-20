import './App.css';
import DistrictPage from './components/DistrictPage';
import Header from './components/Header';
import breakFastIcon from './icon/breakfast.png'
import spaghettiIcon from './icon/spaghetti.png'
import fastFoodIcon from './icon/fast-food.png'
import mcdonaldsImg from './icon/mcdonalds.jpg'
import goodMorningImg from './icon/goodmorning.jpg'
import bubbleTeaImg from './icon/bubble-tea.jpg'

const district = "台北"
const dafaultCategoryList = [
  {
    name:"早餐及早午餐",
    logo:breakFastIcon
  },
  {
    name:"義式料理",
    logo:spaghettiIcon
  },
  {
    name:"速食",
    logo:fastFoodIcon
  }
]
const defaultShopList = [
  {
    name:"麥當勞",
    img:mcdonaldsImg,
    category:"速食",
    location:"台北市中山區中山北路一號",
    rate:4.8
  },
  {
    name:"我是早餐店",
    img:goodMorningImg,
    category:"早餐及早午餐",
    location:"台北市中山區中山北路二號",
    rate:4.1
  },
  {
    name:"喝奶茶",
    img:bubbleTeaImg,
    category:"飲料",
    location:"台北市中山區中山北路三號",
    rate:5
  },
]
function App() {
  return (
    <div className="App">
      <Header/>
      <DistrictPage district={district} categoryList={dafaultCategoryList} shopList={defaultShopList}/>
    </div>
  );
}

export default App;
