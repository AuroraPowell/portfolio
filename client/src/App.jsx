import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// import Content from "./components/projects/countme.in/content.jsx";

import Projects from "./components/Projects";
import Landing from "./components/Landing";
import About from "./components/About";
import Email from "./components/projects/Email.jsx";

import ScrollToTop from "./components/functional/ScrollToTop";

// Projects
import EventList from "./components/projects/countme.in/eventList";

// Site palette (for now??)
const colors = {
  rasp: "#B8336A",
  per: "#ACACDE",
  uranian: "#ABDAFC",
  wisteria: "#C490D1",
  azure: "#E5FCFF",
};

function App() {
  return (
    <BrowserRouter class="scroll-smooth">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/email" element={<Email />} />
        <Route path="/rsvp" element={<EventList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// <div className="flex flex-col bg-cover min-h-screen bg-purple-400 bg-opacity-70">
//   {/* <Auth0Provider
//   domain={domain}
//   cientId={clientId}
//   redirectUri={window.location.origin}>
//     <LoginButton /> */}
//   <Content />
//   {/* </Auth0Provider> */}
// </div>

// import EventList from "./components/eventComponents/eventList.jsx";

// import Content from "./components/content.jsx";
// import Header from "./components/head.jsx";
// import LoginButton from './components/LoginButton.jsx'
// import { Auth0Provider } from '@auth0/auth0-react'
// import Footer from './components/foot.jsx'

// retired Routes >>v
// <Route path="/events" element={<Events />} />
// <Route path="/event/:id/" element={<Event />} />
// <Route path="/create/" element={<Create />} />
// <Route path="/login" element={<Authenticate />} />
