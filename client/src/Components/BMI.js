import React,{Component} from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Container, Row, Col } from 'reactstrap';
import {Card, Button, ModalTitle}  from 'react-bootstrap';
import male from '../assets/male.png';
import female from '../assets/female.png'

class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  render() {
    const toggleNavbar = () => this.setState({collapsed:!this.state.collapsed});
    return (
      <div>
        <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/aboutme">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container style={{paddingLeft:'1.5rem', background: "#08081d", height:"90vh"}}>
      <br></br>
      <Row>
        <Col>
          <Card style={{textAlign:"center", background:'#000', width: '9rem' , height:'9rem' }}>
            <div className="text-center">
              <img className="gender-img" src={male} />
            </div>
            <Card.Body>
            <Card.Title className="gender-title">MALE</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{textAlign:"center", background:'#000', width: '9rem' , height:'9rem' }}>
            <div className="text-center">
              <img className="gender-img" src={female} />
            </div>
            <Card.Body>
              <Card.Title className="gender-title">FEMALE</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Card style={{textAlign:"center", background:'#000', width: '20rem' , height:'9rem' }}>
            <div className="text-center">
              
            </div>
            <Card.Body>
            <Card.Title className="gender-title">MALE</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Card style={{textAlign:"center", background:'#000', width: '20rem' , height:'9rem' }}>
            <div className="text-center">
              
            </div>
            <Card.Body>
            <Card.Title className="gender-title">MALE</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Button className="button-bmi btn-block">CALCULATE YOUR BMI</Button>
      </div>
      
    );
  }
  
  

  
}

export default BMI;
