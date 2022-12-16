
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();
  return (
    <>

   {/*    Todo esse texto será comentado deverá
      em diversas linhas */}
    
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`${theme} `}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
