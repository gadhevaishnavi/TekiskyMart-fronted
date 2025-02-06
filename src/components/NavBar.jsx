import React, { useEffect } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/styles/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  useEffect(() => {
    function test() {
      var tabsNewAnim = $("#navbarSupportedContent");
      var activeItemNewAnim = tabsNewAnim.find(".active");
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    }

    setTimeout(() => test(), 100);

    $("#navbarSupportedContent").on("click", "li", function () {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      test();
    });

    $(window).on("resize", () => {
      setTimeout(() => test(), 500);
    });

    $(".navbar-toggler").click(() => {
      $(".navbar-collapse").slideToggle(300);
      setTimeout(() => test(), 100);
    });

    // Add active class based on current path
    var path = window.location.pathname.split("/").pop() || "index.html";
    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    target.parent().addClass("active");
  }, []);

  return (
    <>
      <div className="logo">
        <img src={logo} alt="Tekisky Mart Logo" />
      </div>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product/category/gift-items">
                GIFT-ITEMS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product/category/perfumes">
                PERFUMES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product/category/clothes">
                CLOTHES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product/category/watches">
                WATCHES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product/category/mobiles">
                MOBILES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/preorders">
                PRE-ORDERS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sellwithus">
                SELL WITH US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customersupport">
                CUSTOMER SUPPORT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
