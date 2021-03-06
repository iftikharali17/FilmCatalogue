import React, { useEffect, useState } from "react";
import Client from "../configuration/contentful";
import Card from "../components/Card";

export default function Movie() {
  const [data, setData] = useState("");

  useEffect(() => {
    Client.getEntries({
      content_type: "film",
    })
      .then((response) => setData(response.items))
      .catch((err) => console.log(err));
  }, []);

  const cardComponent =
    data &&
    data.map((element, index) => {
      return (
        <Card
          key={index}
          imgSrc={element.fields.poster.fields.file.url}
          title={element.fields.title}
          releaseDate={element.fields.releaseDate}
          director={element.fields.director}
          cast={element.fields.cast}
          synopsis={element.fields.synopsis}
        />
      );
    });

  return (
    <div id="color" class="main">
      {" "}
      <p>Hello this is movie search path</p>
      <div id="myDiv">{cardComponent}</div>
    </div>
  );
}

/*
              <div key={index}>
                <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <h1>movie front</h1>
                    </div>

                    <div id="color" class="back">
                      <p>
                        <u>Title:</u> {title}
                      </p>
                      <p>
                        <u>Release Date:</u> {releaseDate}
                      </p>
                      <p>
                        <u>Director:</u> {director}
                      </p>
                      <p>
                        <u>Cast:</u> {cast}
                      </p>
                      <p>{synopsis}</p>
                    </div>
                  </div>
                </div>
              </div>
              */
