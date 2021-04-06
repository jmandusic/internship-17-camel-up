const OneDice = ({ oneDice }) => {
  return (
    <div style={{ backgroundColor: `${oneDice.color}` }}>{oneDice.value}</div>
  );
};

export default OneDice;
