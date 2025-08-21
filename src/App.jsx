import { useSelector } from "react-redux";
import Deserts from "./components/Deserts";
import YourCard from "./components/YourCard";
import { useFetch } from "./hooks/useFatch";

function App() {
  const { data, error, loding } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  return (
    <div className="container">
      {loding && (
        <div style={{ width: "70%" }}>
          <h1 className="title">Loding...</h1>
        </div>
      )}
      {data && <Deserts deserts={data.data} />}
      <YourCard />
    </div>
  );
}

export default App;
