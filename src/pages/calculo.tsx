// import normal
// import calc from '../libs/calc';

export default function Calculo() {
  async function handleSum() {
    // import dinamico
    const calc = (await import('../libs/calc')).default;
    alert(calc.sum(2, 2));
  }

  return (
    <div>
      <h1>Calculo</h1>
      <button onClick={handleSum}>Somar</button>
    </div>
  );
}
