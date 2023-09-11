import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import furnitureData from "./data/furniture";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: furnitureData
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;