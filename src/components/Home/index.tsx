import imgHome from "../../assets/img/GAMER.svg";

const Home = () => {
  return (
    <div>
      <h1>Veja aqui seus jogos favoritos.</h1>
      <p>Clique no botão abaixo e veja nossa coleção de jogos!</p>
      <img src={imgHome} alt="" />
      <button>Ver os Jogos</button>
    </div>
  );
};

export default Home;
