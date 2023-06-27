export default function SelectAgent(props) {
  const agents = props.agents;
  return (
    <div className="select-content">
      <ul className="options">
        {agents.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}
