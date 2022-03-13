import { render } from "react-dom";
import App from "./App";
import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>, 
  rootElement
  );