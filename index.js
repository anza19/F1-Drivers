import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "react-bootstrap/Button";

const f1Drivers = [
  {
    name: "Lewis Hamilton",
    url: "https://motorsporttickets.com/blog/wp-content/uploads/2021/08/1018721187-LAT-20210718-GP2110_160706_ONY9320.jpg",
    wins: 100,
    nationality: "British",
    id: 1,
    championships: 7,
  },
  {
    name: "Michael Schumacher",
    url: "https://motorsporttickets.com/blog/wp-content/uploads/2021/08/1018026873-LAT-20001008-00JAP21.jpg",
    wins: 91,
    nationality: "German",
    id: 2,
    championships: 7,
  },
  {
    name: "Sebastian Vettel",
    url: "https://motorsporttickets.com/blog/wp-content/uploads/2021/08/1016874667-LAT-20180826-_X4I0864.jpg",
    wins: 53,
    nationality: "German",
    id: 3,
    championships: 4,
  },
  {
    name: "Alain Prost",
    url: "https://motorsporttickets.com/blog/wp-content/uploads/2021/08/1017636690-LAT-19861026-86AUS09.jpg",
    wins: 51,
    nationality: "French",
    id: 4,
    championships: 4,
  },
  {
    name: "Aryton Senna",
    url: "https://motorsporttickets.com/blog/wp-content/uploads/2021/08/cata10091.jpg",
    wins: 41,
    nationality: "Brazilian",
    id: 5,
    championships: 3,
  },
  {
    name: "Fernando Alonso",
    url: "https://motorsporttickets.com/blog/wp-content/uploads/2021/08/05_SANM_01.jpg",
    wins: 32,
    nationality: "Spanish",
    id: 6,
    championships: 2,
  },
  {
    name: "Nigel Mansell",
    url: "https://motorsporttickets.com/blog/wp-content/uploads/2021/08/TP11.jpg",
    wins: 31,
    nationality: "British",
    id: 7,
    championships: 1,
  },
  {
    name: "Jackie Stewart",
    url: "https://motorsporttickets.com/blog/wp-content/uploads/2021/08/1017331107-LAT-19730805-73GER05-2.jpg",
    wins: 27,
    nationality: "Scottish",
    id: 8,
    championships: 3,
  },
  {
    name: "Jim Clark",
    url: "https://motorsporttickets.com/blog/wp-content/uploads/2021/08/1016918436-SCH-19640614-216-64BE-03-A3-1.jpg",
    wins: 25,
    nationality: "British",
    id: 9,
    championships: 2,
  },
  {
    name: "Niki Lauda",
    url: "https://motorsporttickets.com/blog/wp-content/uploads/2021/08/1016916407-SCH-19760328-76US-C130-A2.jpg",
    wins: 24,
    nationality: "German",
    id: 10,
    championships: 3,
  },
];

const Driver = (props) => {
  const { url, name, wins, nationality } = props;
  return (
    <article className="book">
      <img src={url} alt="driver.jpeg" />
      <h2>{name}</h2>
      <h4>Wins: {wins}</h4>
      <h4>Nationality: {nationality}</h4>
      <Button
        variant="info"
        onClick={() => alert("Won: " + props.championships + " championships")}
      >
        {" "}
        Championships
      </Button>{" "}
    </article>
  );
};

const DriverList = (props) => {
  return (
    <section className="booklist">
      {props.driversList.map((driver) => {
        return <Driver {...driver} key={driver.id} />;
      })}
    </section>
  );
};

ReactDOM.render(
  <DriverList driversList={f1Drivers} />,
  document.getElementById("root")
);
