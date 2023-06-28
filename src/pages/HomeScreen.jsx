import "../css/home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomeMobile() {
  const agents = [
    ["01","BRINSTONE"],
    ["02","PHOENIX"],
    ["03", "SAGE"],
    ["04","SOVA"],
    ["05","VIPER"],
    ["06","CYPHER"],
    ["07","REYNA"],
    ["08", "KILLJOY"],
    ["09", "BREACH"],
    ["10", "OMEN"],
    ["11", "JETT"],
    ["12", "RAZE"],
    ["13", "SKYE"],
  ];

  return (
    <>
      <img className="image-agents" src="https://i.imgur.com/1L8F2lR.jpg" />
      <div className="all-home-content">
      <Header />
      <div className="list-text">
      <div className="agents-list">
        <div className="index-box">
        {agents.map((el) => 
        <> <span className="agent-index">{el[0]}</span><br/></>
       )}  
        </div>
        <div>
        {agents.map((el) => 
        <p className="agent-name">{el[1]}</p>)}
        </div>
      </div>
      <div className="title-intro">
      <p className="title-team-meet">// CONHEÇA A EQUIPE</p>
      <p className="text-intro">
        Encontre mais formas de plantar a Spike e enfrentar
        <br />
        seus inimigos com lutadores, estratégias e caçadores
        <br /> de todos os tipos.
      </p>
      </div>
      </div>
      <Footer />
      </div>
    </>
  );
}