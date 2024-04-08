import React, { useState, useEffect } from "react";
import MainLogo from "../../Images/attire-logo.png";
import data from "../../datas/Navbardata.json";
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import menu from "../../datas/mobiledata.json";
import { RiMenu2Line } from "react-icons/ri";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <div>
      <nav>
        <div class="container">
          <div class="row justify-content-between mobile_btn">
            <div class="col d-flex justify-content-between">

              <button
                className="ham-menu"
                type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"              >
                <RiMenu2Line size={25} />
              </button>
              <NavLink to="/home" className="text-decoration-none">
                  <li>
                    <a href="#" className="pt-3">
                      <img src={MainLogo} className="navbar-brand" />
                    </a>
                  </li>
                </NavLink>
              <NavLink to="/cartItems">
                <svg
                  class="mobmenu-icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.42729 18.9078C8.25664 18.9078 8.93611 19.6018 8.93611 20.459C8.93611 21.306 8.25664 22 7.42729 22C6.58794 22 5.90847 21.306 5.90847 20.459C5.90847 19.6018 6.58794 18.9078 7.42729 18.9078ZM18.6685 18.9078C19.4979 18.9078 20.1774 19.6018 20.1774 20.459C20.1774 21.306 19.4979 22 18.6685 22C17.8292 22 17.1497 21.306 17.1497 20.459C17.1497 19.6018 17.8292 18.9078 18.6685 18.9078ZM2.88103 2.00871L5.26418 2.37507C5.60391 2.43732 5.85372 2.72204 5.88369 3.06902L6.07354 5.35496C6.10352 5.68254 6.36332 5.92746 6.68307 5.92746H20.1776C20.7871 5.92746 21.1868 6.14177 21.5865 6.6112C21.9861 7.08064 22.0561 7.75417 21.9662 8.36546L21.0169 15.06C20.837 16.3469 19.7579 17.2949 18.4889 17.2949H7.58736C6.2584 17.2949 5.15926 16.255 5.04934 14.9079L4.13006 3.78337L2.62124 3.51804C2.22155 3.44661 1.94176 3.04861 2.01171 2.6404C2.08166 2.22301 2.47135 1.94646 2.88103 2.00871ZM16.8901 9.70233H14.1223C13.7026 9.70233 13.3729 10.0391 13.3729 10.4677C13.3729 10.8861 13.7026 11.2331 14.1223 11.2331H16.8901C17.3098 11.2331 17.6395 10.8861 17.6395 10.4677C17.6395 10.0391 17.3098 9.70233 16.8901 9.70233Z"
                    fill="#26221F"
                  />
                </svg>
              </NavLink>
            </div>
            <div>
              <div class="offcanvas offcanvas-start mob-navmenu"data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header1">
                  <h1 class="offcanvas-title sidemenu-head">Categories</h1>
                  <button
                    type="button"
                    class="sidemenu-cls"
                    data-bs-dismiss="offcanvas"
                  >
                    <FiX size={20} />
                  </button>
                </div>
                <div class="offcanvas-body sidemenu-content">
                  {menu.map((i) => (
                    <Accordion className="modified-accordian">
                      <AccordionSummary
                        expandIcon={<IoIosArrowDown />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <NavLink to={i.navlink}>{i.name}</NavLink>
                      </AccordionSummary>
                      <AccordionDetails>
                        {i.subMenu.map((ikk) => (
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<IoIosArrowDown />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              className="dropdown-title-btn"
                            >
                              {ikk.title}
                            </AccordionSummary>
                            <AccordionDetails>
                              {ikk.products.map((products) => (
                                <h1 className="dropdown-submenu">{products}</h1>
                              ))}
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div class="main_menu">
            <ul className="nav-items d-flex bd-highlight">
              <div>
                <NavLink to="/home" className="text-decoration-none">
                  <li>
                    <a href="#" className="pt-3">
                      <img src={MainLogo} className="navbar-brand" />
                    </a>
                  </li>
                </NavLink>
              </div>

              <div className="d-flex tab-menu d-flex justify-content-start">
                <NavLink to="/men" className="text-decoration-none">
                  <li class="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
                    <a href="#">Men</a>
                    <div class="mega_menu sub_menu d-flex justify-content-evenly">
                      <div class="mega_menu_item">
                        <h5>{data.Men.id}</h5>
                        {data.Men.types.map((s) => (
                          <li className="submenu-item">
                            <a href="#" className="submenu-link">
                              {s}
                            </a>
                          </li>
                        ))}
                      </div>
                      <div class="mega_menu_item">
                        <h5>{data.Men.categories}</h5>
                        {data.Men.kinds.map((s) => (
                          <li className="submenu-item">
                            <a href="#" className="submenu-link">
                              {s}
                            </a>
                          </li>
                        ))}
                      </div>
                      <div class="mega_menu_item">
                        <h5>{data.Men.sorts}</h5>
                        {data.Men.sort.map((s) => (
                          <li className="submenu-item">
                            <a href="#" className="submenu-link">
                              {s}
                            </a>
                          </li>
                        ))}
                      </div>
                    </div>
                  </li>
                </NavLink>

                <NavLink to="/women" className="text-decoration-none">
                  <li class="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
                    <a href="#">Women</a>
                    <div class="mega_menu sub_menu d-flex justify-content-evenly">
                      <div class="mega_menu_item">
                        <h5>{data.Women.id}</h5>
                        {data.Women.types.map((s) => (
                          <li className="submenu-item">
                            <a href="#" className="submenu-link">
                              {s}
                            </a>
                          </li>
                        ))}
                      </div>
                      <div class="mega_menu_item">
                        <h5>{data.Women.categories}</h5>
                        {data.Women.kinds.map((s) => (
                          <li className="submenu-item">
                            <a href="#" className="submenu-link">
                              {s}
                            </a>
                          </li>
                        ))}
                      </div>
                      <div class="mega_menu_item">
                        <h5>{data.Women.sorts}</h5>
                        {data.Women.sort.map((s) => (
                          <li className="submenu-item">
                            <a href="#" className="submenu-link">
                              {s}
                            </a>
                          </li>
                        ))}
                      </div>
                    </div>
                  </li>
                </NavLink>

                {/* <NavLink to="/kids" className="text-decoration-none">
                  <li class="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
                    <a href="#">Kids</a>
                    <div class="mega_menu sub_menu d-flex justify-content-evenly">
                      <div class="mega_menu_item">
                        <h5>{data.Kids.id}</h5>
                        {data.Kids.types.map((s) => (
                          <li className="submenu-item">
                            <a href="#" className="submenu-link">
                              {s}
                            </a>
                          </li>
                        ))}
                      </div>
                      <div class="mega_menu_item">
                        <h5>{data.Kids.categories}</h5>
                        {data.Kids.kinds.map((s) => (
                          <li className="submenu-item">
                            <a href="#" className="submenu-link">
                              {s}
                            </a>
                          </li>
                        ))}
                      </div>
                      <div class="mega_menu_item">
                        <h5>{data.Kids.sorts}</h5>
                        {data.Kids.sort.map((s) => (
                          <li className="submenu-item">
                            <a href="#" className="submenu-link">
                              {s}
                            </a>
                          </li>
                        ))}
                      </div>
                    </div>
                  </li>
                </NavLink> */}
              </div>

              <div className="d-flex">
                <ul className="nav-links d-flex ms-5 ps-5">
                  <li>
                    <div class="search-container mx-5">
                      <form action="/action_page.php">
                        <input
                          type="text"
                          placeholder="Search..."
                          name="search"
                          className="search-box-icon"
                        />
                        <button type="submit" className="search-icon">
                          <RiSearchLine />
                        </button>
                      </form>
                    </div>
                  </li>
                  <NavLink to="/cartItems">
                    <li className="mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M9.71177 23.2894C10.707 23.2894 11.5224 24.1222 11.5224 25.1508C11.5224 26.1673 10.707 27 9.71177 27C8.70456 27 7.88919 26.1673 7.88919 25.1508C7.88919 24.1222 8.70456 23.2894 9.71177 23.2894ZM23.2013 23.2894C24.1965 23.2894 25.0118 24.1222 25.0118 25.1508C25.0118 26.1673 24.1965 27 23.2013 27C22.194 27 21.3787 26.1673 21.3787 25.1508C21.3787 24.1222 22.194 23.2894 23.2013 23.2894ZM4.25626 3.01049L7.11603 3.45012C7.52372 3.52482 7.82348 3.86649 7.85945 4.28286L8.08728 7.02599C8.12325 7.41909 8.43501 7.71299 8.81871 7.71299H25.0121C25.7435 7.71299 26.2231 7.97016 26.7028 8.53348C27.1824 9.0968 27.2663 9.90505 27.1584 10.6386L26.0193 18.672C25.8035 20.2163 24.5085 21.3539 22.9857 21.3539H9.90386C8.3091 21.3539 6.99013 20.1061 6.85824 18.4896L5.75509 5.14008L3.94451 4.82169C3.46488 4.73596 3.12914 4.25836 3.21308 3.76852C3.29701 3.26765 3.76465 2.93578 4.25626 3.01049ZM21.0672 12.2428H17.7457C17.2421 12.2428 16.8465 12.6469 16.8465 13.1613C16.8465 13.6634 17.2421 14.0797 17.7457 14.0797H21.0672C21.5708 14.0797 21.9665 13.6634 21.9665 13.1613C21.9665 12.6469 21.5708 12.2428 21.0672 12.2428Z"
                          fill="#26221F"
                        />
                      </svg>
                    </li>
                    
                  </NavLink>
                  <li className="mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M10.536 3.6008C11.292 3.62379 12.024 3.75579 12.7332 3.99699H12.804C12.852 4.01979 12.888 4.04499 12.912 4.06779C13.1772 4.15299 13.428 4.24899 13.668 4.38099L14.124 4.58499C14.304 4.68099 14.52 4.85979 14.64 4.93299C14.76 5.00379 14.892 5.07699 15 5.15979C16.3332 4.14099 17.952 3.58899 19.62 3.6008C20.3772 3.6008 21.1332 3.70779 21.852 3.94899C26.2812 5.38899 27.8772 10.249 26.544 14.497C25.788 16.6678 24.552 18.649 22.9332 20.2678C20.616 22.5118 18.0732 24.5038 15.336 26.2198L15.036 26.401L14.724 26.2078C11.9772 24.5038 9.42002 22.5118 7.08122 20.2558C5.47322 18.637 4.23602 16.6678 3.46802 14.497C2.11202 10.249 3.70802 5.38899 8.18522 3.92379C8.53322 3.80379 8.89202 3.71979 9.25202 3.67299H9.39602C9.73322 3.62379 10.068 3.6008 10.404 3.6008H10.536ZM21.228 7.39299C20.736 7.22379 20.196 7.48899 20.016 7.99299C19.848 8.49699 20.112 9.04899 20.616 9.22779C21.3852 9.51579 21.9 10.273 21.9 11.1118V11.149C21.8772 11.4238 21.96 11.689 22.128 11.893C22.296 12.097 22.548 12.2158 22.812 12.241C23.304 12.2278 23.724 11.833 23.76 11.3278V11.185C23.796 9.50379 22.7772 7.98099 21.228 7.39299Z"
                        fill="#26221F"
                      />
                    </svg>
                  </li>

                  <li className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M14.8002 18.8087C20.0065 18.8087 24.4002 19.6547 24.4002 22.9187C24.4002 26.184 19.9777 27 14.8002 27C9.59504 27 5.2002 26.154 5.2002 22.8899C5.2002 19.6247 9.62265 18.8087 14.8002 18.8087ZM14.8002 2.99997C18.3271 2.99997 21.153 5.8248 21.153 9.34923C21.153 12.8737 18.3271 15.6997 14.8002 15.6997C11.2745 15.6997 8.44741 12.8737 8.44741 9.34923C8.44741 5.8248 11.2745 2.99997 14.8002 2.99997Z"
                        fill="#26221F"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
