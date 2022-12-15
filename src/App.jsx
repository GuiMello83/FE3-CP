
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import {Link} from "react-router-dom"

function App() {
  return (
    <>
    <div>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </div>

   {/*    Todo esse texto será comentado deverá
      em diversas linhas */}
    
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}

      <div className={'app dark'}>
        <Navbar />
        <main>
          <Outlet />
        </main>
          <LoginForm />
          <main/>
        <main/>
          <Footer />         
      </div>

      <div className={`app light}`}>
        <Navbar />
        <main>
          <Outlet />
        <main>
          <LoginForm/>
          </main>  
        </main>
          <Footer />
      </div>
    </>
  );
}

export default App;
