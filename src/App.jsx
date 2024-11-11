import React from "react";
import InputArea from "./components/InputArea";

function App() {
  

  return (
    <div className="container">
      <div className="card ms-1 mt-5 mb-5">
        <div className="card-body">
          <div className="heading mt-4">
            <h1>TO-DO LIST</h1>
          </div>
            <InputArea />
        </div>
      </div>
    </div>
  );
}

export default App;
