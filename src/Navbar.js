import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background: aqua;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
`

export const MenuLink = styled(Link)`
  color: #0EC0E2;
  background: black;
  border-radius: 50%;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`

export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Navbar = () => {
    return (
        <>
            <PrimaryNav>
                <img src="data:image/png;base64,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" alt="" />

                <Hamburger />

                <Menu>
                    <MenuLink to="/Admin" activeStyle>
                        Admin
                    </MenuLink>
                </Menu>
            </PrimaryNav>
        </>
    )
}

export default Navbar;
