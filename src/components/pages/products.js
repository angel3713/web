import React, { Component } from 'react';
import FilterableProductTable from '../../components/products/FilterableProductTable'
//Component
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
  {category: 'Books', price: '$300.22', stocked: true, name: 'React js 7'}
];

class Produtcts extends Component {
    render() {
         return (
          <FilterableProductTable products={PRODUCTS} />
          );
    }
}

export default Produtcts;
