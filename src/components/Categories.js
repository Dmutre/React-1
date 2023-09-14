import React, { Component } from 'react'

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'All'
        },
        {
          key: 'chair',
          name: 'Chair'
        },
        {
          key: 'table',
          name: 'Table'
        },
        {
          key: 'bed',
          name: 'Bed'
        },
        {
          key: 'shelf',
          name: 'Shelf'
        },
        {
          key: 'buro',
          name: 'Buro'
        },
        {
          key: 'wardrobe',
          name: 'Wardrobe'
        },
        {
          key: 'sofa',
          name: 'Sofa'
        },
      ]
    }
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}
