import "./App.css";
import { ActionToggle } from "./components/ActionToggle";
import { EntityToggle } from "./components/EntityToggle";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div>
        <EntityToggle />
        <ActionToggle />
      </div>
    </AppProvider>
  );
}

export default App;