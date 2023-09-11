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
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    this.setState({orders: [...this.state.orders, item]});
  }
}

export default App;