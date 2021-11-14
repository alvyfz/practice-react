import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Contact from "../pages/contact_us/Contact_Us";
import Review from "../pages/review_contact/Review_Contact";
import News from "../pages/news/News";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review-contact" element={<Review />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}
