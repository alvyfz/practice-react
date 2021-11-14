import { Card } from "react-bootstrap";
import "./CardNews.css";

export default function CardNews({ image, description, link, title, source }) {
  return (
    <div>
      <Card className="card" style={{ width: "20rem" }}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            variant="top"
            src={image}
            style={{
              width: "280px",
              height: "180px",
              objectFit: "cover",
            }}
          />
          <Card.Body style={{ height: "300px" }}>
            <Card.Title>{title}</Card.Title>
            {/* <Card.Text>
              <p>{description}</p>
            </Card.Text> */}
            <p style={{ color: "blue" }}>{source}</p>
            <h4 style={{ textAlignLast: "left" }}>Read more</h4>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
}
