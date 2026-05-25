import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PortfolioSections } from "./components/PortfolioSections";
import { LocaleProvider } from "./i18n/LocaleContext";

function App() {
  return (
    <LocaleProvider>
      <Header />
      <main id="main-content">
        <PortfolioSections />
      </main>
      <Footer />
    </LocaleProvider>
  );
}

export default App;
