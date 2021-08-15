// import React from "react";
import React, { useState } from "react";
import "./styles.css";
const foodDictionary = {
  southIndian: [
    {
      name: "Gongura Mamsam",
      author: <img src="/images/gongura-mamsam.jpg" alt="mm" />,
      receipe:
        "About Gongura Mamsam Recipe: Venture into the heart of Andhra Pradesh to unearth a cuisine which is reputed to be the spiciest of all! Chef Srinivas Rao shares his recipe of a spicy and hot Andhra mutton curry.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Kotte Kadubu",
      author: <img src="/images/KOTTE.jpg" alt="" />,
      receipe:
        "Kotte kadubu is made during festivals and auspicious occasions in udupi, Mangalore and coastal regions of Karnataka. These fragrant idlis are made both by the kannadigas as well as the saraswat brahmins from Karnataka.",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Coorg Pandi Curry",
      author: <img src="/images/COORG.jpg" alt="" />,
      receipe:
        " Pandi curry is a recipe traditional to the Coorg or Kodava community of Karnataka, made with pork, peppercorns and kachampuli.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Ragi Mudde & Soppu Saaru",
      author: <img src="/images/RAGIMUDDE.jpg" alt="" />,
      receipe:
        "Massoppu or masoppu saaru and ragi mudde is a very popular combination in southern parts of Karnataka. ",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Ayila Porichathu",
      author: <img src="/images/AYILA.jpg" alt="" />,
      receipe: "Ayila Porichathu is a kerala fru fish",
      rating: "⭐⭐⭐"
    },
    {
      name: "Chicken Chettinad",
      author: <img src="/images/chi.jpg" alt="" />,
      receipe: "Chicken Chettinad - a chicken dish from Tamil Nadu ",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Olan",
      author: <img src="/images/OLAN.jpg" alt="" />,
      receipe:
        "The traditional olan combines kumbalanga (Ash gourd) with coconut milk.",
      rating: "⭐⭐⭐⭐"
    }
  ],

  northIndian: [
    {
      name: "Awadhi Biryani",
      author: <img src="/images/1.1.jpg" alt="" />,
      receipe: "Awadhi biryani is all about whole spices.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Chole Bhature",
      author: <img src="/images/1.2.jpg" alt="" />,
      receipe:
        "It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Naan/Rumali Roti",
      author: <img src="/images/1.7.jpg" alt="" />,
      receipe:
        "Rumali roti also called Manda is a thin flatbread, popular in India and in Punjab.It is eaten with tandoori dishes. ",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Chicken Butter Masala/Murg Makhani",
      author: <img src="/images/1.4.jpg" alt="" />,
      receipe:
        "Murgh Makhani (butter chicken) is one of the famous Indian delicacies internationally recognized. The dish is bursting with flavor and is also nutrient-rich. ",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Litti Chokha",
      author: <img src="/images/1.5.jpg" alt="" />,
      receipe:
        " Famous for its rustic taste, Litti is the stuffed whole wheat dough ball and Chokha is a mashed relish that is served with litti.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Baigan Bharta",
      author: <img src="/images/1.6.jpg" alt="" />,
      receipe:
        "Baingan bharta is a vegetarian Indian dish where eggplants are grilled over hot charcoal, mashed and then mixed or cooked with onions, tomatoes & spices.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ],

  Italian: [
    {
      name: "Pizza Margherita",
      author: <img src="/images/2.1.jpg" alt="" />,
      receipe:
        "Pizza Margherit  made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil .",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Lasagne",
      author: <img src="/images/2.2.jpg" alt="" />,
      receipe:
        "Lasagna is a dish made of alternating layers of pasta, cheese, sauce, and meat and/or vegetables.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Cheese Ravioli",
      author: <img src="/images/2.3.jpg" alt="" />,
      receipe:
        "The ricotta and parmesan cheeses are the base of this cheese ravioli recipe, they melt together and create a light, creamy, airy ravioli filling. ",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Garlic bread",
      author: <img src="/images/2.4.jpg" alt="" />,
      receipe:
        "Garlic bread is a kind of roasted or broiled bread . The bread has a topping of garlic and butter or olive oil and at times even clarified butter is used.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Carbonara",
      author: <img src="/images/2.5.jpg" alt="" />,
      receipe:
        "Carbonara is an Italian pasta dish from Rome made with egg, hard cheese, cured pork, and black pepper. ",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Tortellini",
      author: <img src="/images/2.6.jpg" alt="" />,
      receipe:
        "Tortellini, a ring-shaped Italian pasta stuffed with cheese or meat that is most traditionally served in broth (en brodo), though other sauces—including those made from tomato, mushroom, or meat—are also popular.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Gnocchi",
      author: <img src="/images/2.7.jpg" alt="" />,
      receipe:
        "Gnocchi meaning “little knots” are little soft dough dumplings that are usually made from potato but can also be made from other ingredients such as wheatflour, eggs, cheese and semolina which alter the texture and consistency quite considerably.",
      rating: "⭐⭐⭐"
    },
    {
      name: "Bruschetta",
      author: <img src="/images/2.8.jpg" alt="" />,
      receipe:
        "Bruschetta is an antipasto (starter dish) from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Cannelloni",
      author: <img src="/images/2.10.jpg" alt="" />,
      receipe:
        "Cannelloni are a cylindrical type of lasagna generally served baked with a filling and covered by a sauce in Italian cuisine. Popular stuffings include spinach and ricotta or minced beef. ",
      rating: "⭐⭐⭐⭐"
    }
  ]
};

//to display fooddictionary on screen
const foodDictionaryArray = Object.keys(foodDictionary);

export default function App() {
  const [selectedCategory, setCategory] = useState("southIndian");

  function onClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1 className="fo">FOOD RECOMMENDATION APP </h1>
      <h2>click on the category to show the variety of items present</h2>
      <div>
        {foodDictionaryArray.map((category) => (
          <button onClick={() => onClickHandler(category)} key={category}>
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div className="container">
        {foodDictionary[selectedCategory].map((food) => (
          <div className="food-list-item" key={food.name}>
            <div className="column">
              <div className="food-name">{food.name}</div>
            </div>
            <div className="column">
              <div className="food-img">{food.author}</div>
            </div>
            <div className="column">
              <div className="food-img">{food.receipe}</div>
            </div>
            <div className="column">
              <div className="food-img">{food.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
