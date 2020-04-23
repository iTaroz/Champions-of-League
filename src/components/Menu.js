import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, DropdownButton, Dropdown} from 'react-bootstrap';
import fire from '../setting/fire';
import './Info.css';

const Menu = props => {
    const logout = () => {

        fire.auth().signOut();
       
    }
    return (
        <div>
            
            <Navbar fixed="top" bg="light" variant="Blue">
                <Nav className="mr-auto">
                <h5> <Nav.Link href="/Main">Home</Nav.Link></h5>
                <h5> <Nav.Link href="/Demacia">Demacia</Nav.Link></h5>
                <h5><Nav.Link href="/Noxus">Noxus</Nav.Link></h5>
                  <h5><Nav.Link href="/Ionia">Ionia</Nav.Link></h5>
                  <h5><Nav.Link href="/Piltover">Piltover</Nav.Link></h5>
                  <h5><Nav.Link href="/Freljord">Freljord</Nav.Link></h5>
                  <h5><Nav.Link href="/Zaun">Zaun</Nav.Link></h5>
                </Nav>
                <h5 className ='game'>League of Legends</h5>
                <DropdownButton id="dropdown-basic-button" title="Menu">
                <Dropdown.Item href="/">Champion</Dropdown.Item>
                <Dropdown.Item href="/Aboutme">About me</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
               </DropdownButton>
            </Navbar>
        </div>
    )
}
// code from >> https://getbootstrap.com/docs/4.0/components/navbar/
export default Menu;