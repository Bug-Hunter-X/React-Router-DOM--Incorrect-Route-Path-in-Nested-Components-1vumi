```javascript
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
}

function Contact() {
  return <h1>Contact Page</h1>;
}
```