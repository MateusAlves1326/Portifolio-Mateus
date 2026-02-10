export default function Header() {
  return (
    <header style={{
      padding: "20px 10%",
      display: "flex",
      justifyContent: "space-between",
      background: "#020617"
    }}>
      <h2>Mateus Alves</h2>
      <nav>
        <a href="#about">Sobre</a> | 
        <a href="#exp"> Experiência</a> | 
        <a href="#skills"> Habilidades</a> | 
        <a href="#contact"> Contato</a>
      </nav>
    </header>
  )
}
