import "./App.css";
import Testimonio from "../src/components/Testimonio.js";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Esto es lo que dice la gente de ...</h1>
        <Testimonio
          nombre="Emma Bostion"
          pais="Suecia"
          imagen="Emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        />
        <Testimonio
          nombre="Shan Wang"
          pais="Singapur"
          imagen="Shawn"
          cargo="Ingeniera de Software"
          empresa="Amazon"
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="Sarah"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        />
      </div>
    </div>
  );
}

export default App;
