import React, { Component } from "react"
import Title from "../Globals/Title"
const getCategories = items => {
  let sortItems = items.map(items => {
    return items.node.category
  })

  /*in our case, it would satisfy the search by category, because 1 product in the list, but when adding more goods, it will instruct more arrays, here just the f-tion gives the category of goods*/

  let sortCategories = new Set(sortItems)
  let categories = Array.from(sortCategories)
  categories = ["All", ...categories]
  return categories
}
/*returns sorted in 4 categories of goods and adds a new array with all the goods*/

/*Below data from GraphQL*/

export default class product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      souvenirProduct: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  processItem = category => {
    let sortItems = [...this.state.items]

    /*All GraphQL data per unit item*/

    if (category === "All") {
      this.setState(() => {
        return { souvenirProduct: sortItems }

        /*if we press the button 'All', we send all the goods
         */
      })
    } else {
      let items = sortItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { souvenirProduct: items }
      })

      /*
If the category matches the category in GraphQL, return the value*/
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="product py-5">
          <div className="container">
            <Title title="all products" />
            {/*
category*/}
            <div className="div row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, indexID) => {
                  return (
                    <button
                      type="button"
                      key={indexID}
                      className="btn btn-Seawave text-capitalize m-3"
                      onClick={() => {
                        this.processItem(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/*products*/}
            <div className="row">
              {this.state.souvenirProduct.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto my-5"
                  >
                    <div className="flex-grow-1 px-3">
                      <div className="cart-body text-center">
                        <h6 className="mb-0">
                          <small>{node.title}</small>
                        </h6>
                        <h6 className="mb-0">
                          <small>{node.price}$</small>
                        </h6>
                        {/*added service snipcart. https://docs.snipcart.com/configuration/product-definition*/}
                        <button
                          className="btn btn-Seawave my-3 text-capitalize snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.title}
                          data-item-price={node.price}
                          data-item-url="https://souvenir-shop.netlify.com/"
                        >
                          аdd to order
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="product py-5">
          <div className="container">
            <Title title="all product" />
            <div className="row" />
            <div className="col-10 col-sm-6 ma-auto test-center text-capitalize">
              ><h1>There are no products to display</h1>
            </div>
          </div>
        </section>
      )
    }
  }
}
