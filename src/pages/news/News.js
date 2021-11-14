import "./News.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/Navbar/Navbar";
import CardNews from "../../components/Card/CardNews";
import { useEffect, useState } from "react";
import axios from "axios";
function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q: "technology", lang: "en" },
      headers: {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "05d34b2decmsh889c0ea072fcadap13a45ejsn312d8a1c70e5",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles);
        setNews(response.data.articles);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  // let news1image = news[0]?.urlToImage;
  //   const news1title = news[0].title;
  return (
    <>
      <NavBar />
      <div className="head">
        <a
          href={news[0]?.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Container
            fluid
            style={{ backgroundImage: `url('${news[0]?.media}')` }}
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
              <Col
                key={i}
                md="auto"
                xs="auto"
                sm="auto"
                lg={3}
                style={{ marginTop: "20px" }}
              >
                {" "}
                <CardNews
                  title={v.title}
                  // description={v.summary}
                  image={v.media}
                  link={v.link}
                  source={v.rights}
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
