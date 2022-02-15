import * as React from "react"

import './index.scss';

const MainSection = ({ id, name }) => {
  return (
    <section id={id}>
      <h1>{name}</h1>
    </section>
  );
};

export default MainSection;