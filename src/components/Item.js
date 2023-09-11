import React from "react";

export class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/items/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className="add-to-cart">+</div>
      </div>
    )
  }
}

export default Item;