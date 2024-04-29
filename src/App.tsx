/* eslint-disable no-mixed-spaces-and-tabs */
import "./App.css";
import { DarkModeProvider } from "./components/DarkModeContext";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <DarkModeProvider>
      <div className="w-full fixed h-3 bg-c-white dark:bg-c-maroon z-10"></div>
      <div className="w-full bg-c-white dark:bg-c-maroon p-3 pt-0!">
        <div className="fixed z-10 w-[98.75%]">
          <Header />
        </div>
        <div className="flex justify-center">
          <Profile />
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
