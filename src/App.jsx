import { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-2">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
