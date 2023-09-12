import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import furnitureData from "./data/furniture";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: furnitureData
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    );
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