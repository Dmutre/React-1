import React, { Component } from 'react'

export default class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/items/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
      </div>
    )
  }
}
