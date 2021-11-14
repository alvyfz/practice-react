import "./News.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/Navbar/Navbar";
import CardNews from "../../components/Card/CardNews";
import { useEffect, useState } from "react";
import axios from "axios";
function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const response = await axios(
        "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=160115ded7b948d29103ec8a464f79b8"
      );
      const res = await response.data.articles;
      console.log("dawjfbajkfbjawf", res);
      setNews(res);
    };
    getNews();
  }, []);
  // let news1image = news[0]?.urlToImage;
  //   const news1title = news[0].title;
  return (
    <>
      <NavBar />
      <div className="head">
        <a
          href={news[0]?.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Container
            fluid
            style={{ backgroundImage: `url('${news[0]?.urlToImage}')` }}
            className="cover"
          >
            <Row className="justify-content-md-center">
              <Col md={9}>
                <h1
                  className="h1 "
                  style={{ color: "white", textShadow: "2px 1px #19345e" }}
                >
                  {news[0]?.title}
                </h1>
              </Col>
            </Row>
          </Container>
        </a>
      </div>
      <Container>
        <h1>
          <br />
          Top Headline
        </h1>
        <Row>
          {news?.slice(1).map((v, i) => {
            return (
              <Col key={i} md={3} style={{ marginTop: "20px" }}>
                {" "}
                <CardNews
                  title={v.title}
                  description={v.description}
                  image={v.urlToImage}
                  link={v.url}
                  source={v.source.name}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
export default News;
