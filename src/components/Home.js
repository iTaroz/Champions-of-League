import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'
import fire from '../setting/fire'

const Home = props => {
    const logout = () => {

        fire.auth().signOut();
    }
    return (
        <div>
            
            <Navbar bg="dark" variant="Blue">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Demacia">Demacia</Nav.Link>
                    <Nav.Link href="/Noxus">Noxus</Nav.Link>
                    <Nav.Link href="/Ionia">Ionia</Nav.Link>
                    <Nav.Link href="/Piltover">Piltover</Nav.Link>
                    <Nav.Link href="/Freljord">Freljord</Nav.Link>
                    <Nav.Link href="/Zaun">Zaun</Nav.Link>
                
                </Nav>
                <h3>League of Legends</h3>
                <Form inline>
                    <Button variant="outline-info" onClick={logout}>Logout</Button>
                </Form>
            </Navbar>
        </div>
    )
}
// code from >> https://getbootstrap.com/docs/4.0/components/navbar/
export default Home;