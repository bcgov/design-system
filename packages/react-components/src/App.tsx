import "./App.css";
import "@bcgov/design-tokens/css/variables.css";
import "@bcgov/bc-sans/css/BC_Sans.css";

import { ButtonPage, SelectPage, TagGroupPage } from "@/pages";

function App() {
  return (
    <main>
      <h1>Components</h1>
      <ButtonPage />
      <SelectPage />
      <TagGroupPage />
    </main>
  );
}

export default App;
