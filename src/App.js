import Navigation from "./components/Navigation";
import { ImageContent } from "./components/ImageContent";
import { TechStack } from "./components/TechStack";

function App() {

  return (
    <div>
      <nav>
        <Navigation />
      </nav>

      <main className="pt-20">

        <TechStack />

        <ImageContent />

      </main>
    </div>
  );
}

export default App;
