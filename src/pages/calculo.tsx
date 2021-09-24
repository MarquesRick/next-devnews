// import normal
// import calc from '../libs/calc';

import { useState } from 'react';
import dynamic from 'next/dynamic';
// import { Modal } from '../components/Modal';

//import dinamico do Modal
const Modal = dynamic(
  () => import('../components/Modal').then(mod => mod.Modal),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

export default function Calculo() {
  const [modalVisible, setModalVisible] = useState(false);

  async function handleSum() {
    // import dinamico
    const calc = (await import('../libs/calc')).default;
    alert(calc.sum(2, 2));
  }

  function handelModalVisible() {
    setModalVisible(true);
  }

  return (
    <div>
      <h1>Calculo</h1>
      <button onClick={handelModalVisible}>Somar</button>
      {modalVisible && <Modal />}
    </div>
  );
}
