/* import logo from './logo.svg'; */
import './App.css';
import Componentico from './component';
import Card from './components/Card';
import oso from './images/oso.png';
import elefante from './images/elefante.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" />    */}
        <div>
          <Card
            imageUrl = {oso}
            titulo = "OSO"
            fecha = "25 enero de 2025"
            descripcion = "El osos es un animal salvaje de la selva"
          />
        <Card
            imageUrl = {elefante}
            titulo = "ELEFANTE"
            fecha = "5 Marzo de 2025"
            descripcion = "Son animales mamíferos, exclusivamente herbívoros cuya característica principal –además del gran tamaño– es su larga trompa y sus enormes orejas. Se organizan en manadas de unos 20 miembros, miden casi 4 metros los ejemplares más grandes y pueden llegar a pesar más de 6.000 kilos. Suelen vivir alrededor de 70 años y tienen el periodo de gestación más largo de todos los animales: 22 meses. Nada más nacer, las crías ya pesan más de 100 kilos. "
          />
        </div>

        <p>
          Bienvenido a react Ficha 3102801
        </p>
                <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Componentico />
      </header>
    </div>
  )
}

export default App;
