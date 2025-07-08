import Header from "./Header";
import MainContainer from "./MainContainer";
import appStore from "./utils/appStore.jsx";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <div className="p-2">
        <Header />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
