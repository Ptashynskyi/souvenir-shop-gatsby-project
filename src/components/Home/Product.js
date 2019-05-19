import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"
const getCategories = items => {
  let sortItems = items.map(items => {
    return items.node.category
  })
  {
    /*в нашому випадку це б задовільнило пошук по категорія, бо 1 товару в списку, проте при добавленні більше товарів, воно відасть більшу кількість масивів, тут просто ф-ція віддає категорії товару*/
  }
  let sortCategories = new Set(sortItems)
  let categories = Array.from(sortCategories)
  categories = ["All", ...categories]
  return categories
  {
    /*повертає посортовані в 4 категорії товари і додає новий масив з усіма товарами*/
  }
}
{
  /*{Під цим дані взяті з GraphQL}*/
}
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
    {
      /*усі дані з GraphQL по одиницях товару*/
    }
    if (category === "All") {
      this.setState(() => {
        return { souvenirProduct: sortItems }
        {
          /*якщо нажимаємо кнопку All передаємо усі товари*/
        }
      })
    } else {
      let items = sortItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { souvenirProduct: items }
      })
      {
        /*якщо категорія співпадає з категорією в GraphQL повертаэмо значення*/
      }
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="product py-5">
          <div className="container">
            <Title title="all product" />
            {/*категорії*/}
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
            {/*товари*/}
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
                        <button className="btn btn-Seawave my-3 text-capitalize">
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
              <h1>There are no product to display</h1>
            </div>
          </div>
        </section>
      )
    }
  }
}
