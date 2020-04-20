import React, { useState } from 'react';
import Siswa from './components/Siswa';
import Sekolah from './components/Sekolah';

function App() {
  const [jumlahMurid, setJumlahMurid] = useState(100);

  const dataJumlahMurid = (jumlahMurid) => {
    setJumlahMurid(jumlahMurid);
  }

  return (
    <div>
      <Siswa dataJumlahMurid = {dataJumlahMurid} jumlahMurid={jumlahMurid} />
      <Sekolah jumlahMurid = {jumlahMurid}/>
    </div>
  );
}

export default App;
