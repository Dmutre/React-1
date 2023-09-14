import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import furnitureData from "./data/furniture";
import Categories from "./components/Categories";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: furnitureData
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    });
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)});
  }

  addToOrder(item) {
    const foundItem = this.state.orders.find(el => el.id === item.id);
    if(!foundItem) this.setState({orders: [...this.state.orders, item]});
  }
}

export default App;