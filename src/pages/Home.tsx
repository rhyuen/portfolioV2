import * as React from "react";
import data from "../data/data.json";

const Home = () => (
  <>
    <h1>Robert's Portfolio</h1>
    <section>
      {data.projects.map(item => {
        return <p>{item.name}</p>;
      })}
    </section>
  </>
);

export default Home;
