import Navbar from "../src/components/react/navbar";
import MainLanding from "./pages/landing/main";

export default function App() {
  return (
    <main className="px-12 py-4">
      <Navbar />
      <MainLanding/>
    </main>
  );
}
