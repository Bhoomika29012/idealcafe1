import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button, Form } from 'react-bootstrap';
import MenuItemCard from './MenuItemCard';

// 🌟 Expanded Menu Items
const menuItems = [
  // Ice Creams
  { id: 1, name: "Mango Ice Cream", image: "/assets/ice-1.jpg", description: "Fresh mango scoops", price: 120, category: "Ice Creams", isPopular: true, isNew: false, rating: 4.5 },
  { id: 2, name: "Strawberry Swirl", image: "https://cookingontheweekends.com/wp-content/uploads/2022/06/Strawberry-Swirl-No-Churn-Ice-Cream5-1.jpg", description: "Creamy strawberry delight", price: 110, category: "Ice Creams", isPopular: false, isNew: true, rating: 4.3 },
  { id: 3, name: "Chocolate Blast", image: "https://www.havmor.com/sites/default/files/styles/502x375/public/gallery/Ferrero%20Blast.jpg?itok=eyycJRVh", description: "Rich chocolate indulgence", price: 130, category: "Ice Creams", isPopular: true, isNew: true, rating: 4.7 },

  // Beverages
  { id: 4, name: "Chocolate Shake", image: "https://brooklynfarmgirl.com/wp-content/uploads/2021/03/The-Best-Chocolate-Milkshake-Featured-Image.jpg", description: "Chilled chocolate shake", price: 90, category: "Beverages", isPopular: true, isNew: true, rating: 4.7 },
  { id: 5, name: "Cold Coffee", image: "https://thumbs.dreamstime.com/b/cold-espresso-coffee-iced-milk-tall-glass-dark-background-ideal-cafe-beverage-menu-m-black-copy-space-backgrou-214198972.jpg", description: "Perfectly brewed cold coffee", price: 95, category: "Beverages", isPopular: false, isNew: false, rating: 4.3 },
  { id: 6, name: "Mint Mojito", image: "https://img.freepik.com/free-photo/mojito-lemon-mint-side-view_141793-2777.jpg" , description: "Refreshing mint cooler", price: 85, category: "Beverages", isPopular: true, isNew: true, rating: 4.5 },
  { id: 7, name: "Blue Lagoon", image: "https://i.pinimg.com/736x/2b/2b/e2/2b2be2c808291b9aa222a329dbbd23e9.jpg", description: "Cool blue lime soda", price: 90, category: "Beverages", isPopular: false, isNew: true, rating: 4.2 },

  // Desserts
  { id: 8, name: "Fruit Salad", image: "https://www.hipmamasplace.com/wp-content/uploads/2024/06/summer-fruit-salad-enhanced-1440x1152.jpg", description: "Healthy dessert combo", price: 70, category: "Desserts", isPopular: false, isNew: true, rating: 4.0 },
  { id: 9, name: "Brownie Sundae", image: "https://rosebakes.com/wp-content/uploads/2016/08/Chocolate-Brownie-Overload-Sundae.jpg", description: "Warm brownie with ice cream", price: 150, category: "Desserts", isPopular: true, isNew: false, rating: 4.8 },
  { id: 10, name: "Gulab Jamun", image: "https://wallpapercave.com/wp/wp2157289.jpg", description: "Classic Indian sweet", price: 60, category: "Desserts", isPopular: false, isNew: false, rating: 4.2 },
  { id: 11, name: "Red Velvet Cake", image: "https://i.pinimg.com/736x/98/8c/82/988c82997ed287289dc5e18b83d45a8f.jpg", description: "Soft and creamy delight", price: 130, category: "Desserts", isPopular: true, isNew: true, rating: 4.6 },

  // Snacks
  { id: 12, name: "Veg Puff", image: "https://www.sandyathome.com/wp-content/uploads/2020/03/how-to-make-vegetable-puffs.jpg", description: "Spicy veg filling", price: 40, category: "Snacks", isPopular: false, isNew: false, rating: 4.1 },
  { id: 13, name: "Masala Fries", image: "https://i0.wp.com/www.splashoftaste.com/wp-content/uploads/2022/06/masala-fries-4-610x813.jpg", description: "Crispy fries with Indian masala", price: 50, category: "Snacks", isPopular: true, isNew: true, rating: 4.5 },
  { id: 14, name: "Cheese Sandwich", image: "https://static01.nyt.com/images/2021/08/30/dining/as-grilled-cheese-sandwich-on-the-grill/as-grilled-cheese-sandwich-on-the-grill-threeByTwoMediumAt2X.jpg", description: "Grilled cheesy sandwich", price: 65, category: "Snacks", isPopular: true, isNew: false, rating: 4.6 },
  { id: 15, name: "Corn Chat", image: "https://img.freepik.com/premium-photo/indian-sweet-corn-chat-chat-is-easy-make-snack-recipe-served-bowl-plate-selective-focus_466689-49536.jpg", description: "Tangy corn snack with veggies", price: 55, category: "Snacks", isPopular: false, isNew: true, rating: 4.3 },
];

const MenuPage = () => {
  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const filterAndSortItems = () => {
    let filtered = [...menuItems];

    if (category !== "All") {
      filtered = filtered.filter(item => item.category === category);
    }

    if (filter === "Popular") {
      filtered = filtered.filter(item => item.isPopular);
    } else if (filter === "New") {
      filtered = filtered.filter(item => item.isNew);
    } else if (filter === "OnlyIceCreams") {
      filtered = filtered.filter(item => item.category === "Ice Creams");
    }

    if (sort === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "popularity") {
      filtered.sort((a, b) => b.isPopular - a.isPopular);
    } else if (sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  };

  return (
    <Container>
      <h2 className="mt-4 mb-3 text-center">Menu</h2>

      {/* Category Filter */}
      <ButtonGroup className="mb-3 d-flex justify-content-center flex-wrap">
        {["All", "Ice Creams", "Desserts", "Beverages", "Snacks"].map(cat => (
          <Button
            key={cat}
            variant={cat === category ? "primary" : "outline-primary"}
            onClick={() => setCategory(cat)}
            className="m-1"
          >
            {cat}
          </Button>
        ))}
      </ButtonGroup>

      {/* Filter and Sort Options */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Select onChange={(e) => setFilter(e.target.value)}>
            <option value="">All Items</option>
            <option value="Popular">Only Popular</option>
            <option value="New">New Arrivals</option>
            <option value="OnlyIceCreams">Only Ice Creams</option>
          </Form.Select>
        </Col>
        <Col md={6}>
          <Form.Select onChange={(e) => setSort(e.target.value)}>
            <option value="">No Sorting</option>
            <option value="price">Sort by Price</option>
            <option value="popularity">Sort by Popularity</option>
            <option value="rating">Sort by Rating</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Items Grid */}
      <Row className="g-4">
        {filterAndSortItems().map(item => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <MenuItemCard item={item} onAddToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuPage;

