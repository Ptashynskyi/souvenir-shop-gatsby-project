import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { MdAccountBalanceWallet } from "react-icons/md"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse ",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/product",
        text: "product",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? /*
Here we write the logic for the toolbar (opening and closing the menu to make it easy to use the program through the phone) through the ternary using boostrape commands*/
        this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expend-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
          {/* Icon made by https://www.freepik.com/ from www.flaticon.com 
          E.g.: Icon made by Freepik from www.flaticon.com */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-utem ml-sm-5" />
            <MdAccountBalanceWallet className="cart-icon snipcart-checkout" />
          </ul>
        </div>
      </nav>
    )
  }
}
