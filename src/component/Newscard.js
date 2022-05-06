import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function Newscard() {
  return (

      <div div className="container my-3">
        <div className="row">
          <div className="col-md-3">
         <Link className="nav-link active" aria-current="page" to="/newscard/sports">
            <Card className="my-3 " border="dark"style={{width:"500px"}}>
            <Card.Img variant="top" src="./sports.jpg" style={{width:"500px"}} />
            <Card.Body>
              <Card.Text>
               <b> SPORTS NEWS </b>
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
          <div/>
          <div className="col-md-3">
      
          <Link className="nav-link active" aria-current="page" to="/newscard/bollywood">
            <Card className="my-3 " border="dark"style={{width:"500px"}}>
            <Card.Img variant="top" src="./acting.jpg" style={{width:"500px"}} />
            <Card.Body>
              <Card.Text>
               <b>BOLLYWOOD NEWS</b>
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
          </div>
          <div className="col-md-3">

        
          <Link className="nav-link active" aria-current="page" to="/newscard/bollywood">
            <Card className="my-3 " border="dark"style={{width:"500px"}}>
            <Card.Img variant="top" src="./acting.jpg" style={{width:"500px"}} />
            <Card.Body>
              <Card.Text>
               <b>BOLLYWOOD NEWS</b>
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
         
         <div/>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Newscard;
