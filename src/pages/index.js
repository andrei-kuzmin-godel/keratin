import * as React from "react"
import Navigation from '../components/navigation';
import MainSection from "../components/mainSection";

import './index.scss';

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <>
      <Navigation />
      <main className="main">
        <div className="container">
          <MainSection id="section1" name="section 1" />
          <MainSection id="section2" name="section 2" />
          <MainSection id="section3" name="section 3" />
          <MainSection id="section4" name="section 4" />
        </div>
      </main>
    </>
  )
}

export default IndexPage
