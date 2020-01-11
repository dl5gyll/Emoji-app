import React from "react";
import Entery from "./Entery";
import Footer from "./Footer";
import emojipedia from "../emojipedia";

function createEntery(emojies){
    return <Entery
    key={emojies.id}
    emoji={emojies.emoji}
      name={emojies.name}
      content={emojies.meaning}
    />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createEntery)};
      </dl>
      <Footer/>
</div>
  );
}

export default App;
