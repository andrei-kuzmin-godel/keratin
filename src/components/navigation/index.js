import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import './index.scss';

const Navigation = () => {
  return (
    <header>
      <h1 className="logo">Keratin Minsk</h1>
      <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
      <nav>
        <ul>
          <AnchorLink to="/#section1" stripHash>
            <li>section1</li>
          </AnchorLink>
          <AnchorLink to="/#section2" stripHash>
            <li>section2</li>
          </AnchorLink>
          <AnchorLink to="/#section3" stripHash>
            <li>section3</li>
          </AnchorLink>
          <AnchorLink to="/#section4" stripHash>
            <li>section4</li>
          </AnchorLink>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default Navigation;