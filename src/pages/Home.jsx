import Hero from '../components/Hero/Hero.jsx';
import Marketplace from '../components/Marketplace/Marketplace.jsx';
import Categories from '../components/Categories/Categories.jsx';
import DealSection from '../components/DealSection/DealSection.jsx';
import CompareBanner from '../components/CompareBanner/CompareBanner.jsx';
import Benefits from '../components/Benefits/Benefits.jsx';

export default function Home(){return <><Hero/><Marketplace/><Categories/><DealSection/><CompareBanner/><DealSection title="Biggest Discounts" subtitle="Products with the highest price drops across platforms." variant="discount"/><Benefits/></>}
