import { RouterProvider } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <ProductContext>
        <RouterProvider router={routes} />
      </ProductContext>
    </div>
  );
}

export default App;
