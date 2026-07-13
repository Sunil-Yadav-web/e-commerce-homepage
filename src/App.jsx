import './App.css'
import BestSelling from './Components/BestSelling'
import BrowseCategory from './Components/BrowseCategory'
import ExploreProducts from './Components/ExploreProducts'

import FlashSales from './Components/FlashSales'
import Footer from './Components/Footer'
import { Header } from './Components/Header'
import Hero from './Components/Hero'
import MusicBanner from './Components/MusicBanner'
import NewArrival from './Components/NewArrival'
import ProductCard from './Components/ProductCard'
import Services from './Components/Services'

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <FlashSales/>
      <BrowseCategory/>
      <BestSelling/>
      <MusicBanner/>
      <ExploreProducts/>
      <NewArrival/>
      <Services/>
      <Footer/>
    </>
  )
}

export default App
