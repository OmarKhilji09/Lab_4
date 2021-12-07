//Import react and use state hook
import React, { useState } from "react";

//Main functional Component
const App = () => {
  //Use useState to get api
  const [API, setAPI] = useState("");

  //function handler for button click
  const getDataHandler = () => {
    //fetch NASA API and send the data to API variable using state fuctional component
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=lUp3rYgDD7iaVl1bsMj0BdDaAJ6LU5thUCdH7r5p"
    )
      .then((response) => response.json())
      .then((data) => setAPI(data));
  };

  //return render code
  return (
    <div
      style={{
        maxWidth: 1200,
        height: "auto",
        padding: 30,
        margin: "0px auto",
        backgroundColor: "#e9ecef",
      }}
    >
      <h1 style={{ marginBottom: "2.8rem" }}>Omar Khilji</h1>
      <h2 style={{ fontSize: "1.8rem" }}>NASA API</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "1.5rem 3rem",
            marginBottom: "2rem",
            background: "linear-gradient(to left,#e66465, #9198e5)",
            color: "#fff",
            fontSize: "1.4rem",
            border: "1px solid orangeRed",
            borderRadius: "1.2rem",
          }}
          onClick={getDataHandler}
        >
          Get NASA POD!
        </button>
      </div>

      {API && (
        <section>
          <header>
            {API.title} - <span>{API.date}</span>
          </header>
          <img src={API.url} alt="APOD" width="800" height="auto" />
          <p>{API.explanation}</p>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            <hr />
            {JSON.stringify(API, null, 2)}
          </pre>
        </section>
      )}
    </div>
  );
};

export default App;
