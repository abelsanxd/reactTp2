import ProType from 'prop-types'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <>
      <main className="container my-5">
        <MensajeSaludo mensaje="Mi amigo" />
      </main>
    </>
  );
}

function MensajeSaludo(props) {
  return <h1>Hola {props.mensaje}</h1>;
}

MensajeSaludo.propTypes= {
  mensaje: ProType.string.isRequired
}

export default App;
