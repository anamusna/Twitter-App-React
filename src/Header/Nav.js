import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Profile from "./Profile";
import { NavLink } from "react-router-dom";
import homeIcn from "../img/nav/icon-home.svg";
import momentsIcn from "../img/nav/icon-moments.svg";
import notificationsIcn from "../img/nav/icon-notifications.svg";
import messagesIcn from "../img/nav/icon-messages.svg";




class Nav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      nickname: "EveryInteraction",
    };
  }



  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  render() {
    return (
      <div className="" onClick={this.handleClick} selectedKeys={[this.state.current]}>

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <Profile />
          <DropdownToggle caret
            tag="span"
            aria-expanded={this.state.dropdownOpen}>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>
              <img src={homeIcn} alt="" />
              <NavLink to={`/${this.state.nickname}/home`}>
                Home
          </NavLink></DropdownItem>
            <DropdownItem header><img src={momentsIcn} alt="" />
              <NavLink to={`/${this.state.nickname}/moments`}>
                Moments
          </NavLink></DropdownItem>
            <DropdownItem><img src={notificationsIcn} alt="" />
              <NavLink to={`/${this.state.nickname}/notifications`}>
                Notifications
          </NavLink></DropdownItem>
            <DropdownItem>
              <img src={messagesIcn} alt="" />
              <NavLink to={`/${this.state.nickname}/messages`}>
                Messages
          </NavLink>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <NavLink to={`/${this.state.nickname}/messages`}>
                Settings
          </NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to={`/${this.state.nickname}/messages`}>
                update profile
          </NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to={`/${this.state.nickname}/messages`}>
                contact
          </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

      </div>
    );
  }
}
export default Nav;

