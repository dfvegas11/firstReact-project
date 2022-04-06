import React from "react";
import Cards from "../../Components/Cards";

const Home = (props) => {
  return (
    <div>
      {Object.entries(props.heroes).map(([key, value]) => {
        return <Cards heroe={value} key={key} />;
      })}
    </div>
  );
};

export default Home;
