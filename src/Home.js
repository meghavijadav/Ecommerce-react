import React from 'react';
import "./Home.css";
import Product from "./Product";
 

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-111222023-MainBannerDailyChanging-Z1-Nike-Min40.jpg" 
          className = "home__image" alt="" />

          <div className="home__row">
            <Product 
                id = "001"
                title = "Apple iPhone 14 Pro Max (128 GB) - Deep Purple"
                price = {127999}
                rating = {4}
                image = "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71yzJoE7WlL._SL1500_.jpg"
            />
            <Product
                id = "002"
                title = "Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Grey (4th Generation)"
                price = {78900}
                rating = {5}
                image = "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81gC7frRJyL._SL1500_.jpg" 
             />
          </div>

          <div className="home__row">
            <Product 
                id = "003"
                title = "Lee Cooper Mens Lc2156b2rUniform Dress Shoe"
                price = {2510}
                rating = {3}
                image = "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61Jw1UyjkxL._SL1500_.jpg" 
            />
            <Product 
                id = "005"
                title = "Hush Puppies Mens Taylor Lace Up Platform"
                price = {2749}
                rating = {4}
                image = "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/6195Z9VkahL._SL1440_.jpg" 
            />
            <Product
                id = "006"
                title = "LOUIS STITCH Men's Italian Leather Formal Derby Shoes Comfortable Handcrafted Formal Lace Ups for Men RXCT"
                price = {2499}
                rating = {5}
                image = "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61pLj202FhL._SL1500_.jpg" 
            />
          </div>

          <div className="home__row">
            <Product 
                id = "007"
                title = "Grandma's Bag of Stories: Collection of 20+ Illustrated short stories by Sudha Murty [Paperback] "
                price = {175}
                rating = {5}
                image = "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91xAvyJmUUL._SL1500_.jpg" 
            />
            <Product 
                id = "008"
                title = "The Psychology Of Money Paperback"
                price = {295}
                rating = {5}
                image = "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61-hMfd7NGL._SL1400_.jpg" 
            />
            
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home
