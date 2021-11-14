import "./NP.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function NotFound() {
  return (
    <>
      <div className="App">
        <h1>Something's wrong here....</h1>
        <p>We can't find the page you're looking for. Head back to home</p>
        <Link to="/home">
          <Button variant="outline-primary"> Home</Button>
        </Link>
      </div>
    </>
  );
}
export default NotFound;
