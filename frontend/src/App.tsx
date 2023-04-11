import "./App.css";
import { ActionButton } from "./components/ActionButton";
import { ActionToggle } from "./components/ActionToggle";
import { EntityForm } from "./components/EntityForm";
import { EntityToggle } from "./components/EntityToggle";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div>
        <EntityToggle />
        <ActionToggle />
        <EntityForm/>
        <ActionButton/>
      </div>
    </AppProvider>
  );
}

export default App;