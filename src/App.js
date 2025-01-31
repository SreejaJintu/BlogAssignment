import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CreatePost from "./pages/CreatePost";
import Home from './pages/Home'
import About from "./pages/About";
import MyBlogs from "./pages/Myblogs";

// const HomePage = () => <h2>Welcome to My Blog</h2>;
// const AboutPage = () => <h2>About This Blog</h2>;

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/myblogs" element={<MyBlogs />} />

      </Routes>
    </Router>
  );
};

export default App;
