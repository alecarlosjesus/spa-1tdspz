import Cabecalho from "./components/Cabecalho";

export default function App(){
  document.title = "HOME";

  return(
    <div>
      <Cabecalho/>
        <h1>App</h1>
        <div>
          <figure>
            <figcaption>
              Produtos em Oferta...
            </figcaption>
            <img src="/img/grocery_640.jpg" alt="Produtos diversos." />
          </figure>
        </div>  
    </div>
  )
}