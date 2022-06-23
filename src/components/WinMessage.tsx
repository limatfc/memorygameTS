import congratulations from "../assets/images/congratulations.gif";

interface props {
  setShowModal: Function;
}

export default function WinMessage({ setShowModal }: props) {
  return (
    <div>
      <div className="backdrop" onClick={() => setShowModal(false)}></div>
      <div className="overlayer">
        <h1>Yay, congratulations on finishing the game! </h1>
        <img src={congratulations} alt="Griffindors celebrating quiddish" />
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
}
