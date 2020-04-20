import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Index = (props) => {
//export default (props) => {
    const { jumlahSiswa } = props;
    // const { dataJumlahMurid } = props;
    // const [jumlahMurid, setJumlahMurid] = useState(props.jumlahMurid);
    // const [nilaiSiswa, setNilaiSiswa] = useState(90);

    const tambahSiswa = () => {
        props.dispatch({ type:'TAMBAHSISWA'})
    }

    const dropOut = () => {
        props.dispatch({ type:'DROPOUT'})
    }
    // const tambahNilai = () => {
    //     setNilaiSiswa(nilaiSiswa + 1);
    // }
    // const kurangNilai = () => {
    //     setNilaiSiswa(nilaiSiswa - 1);
    // }

    // useEffect(() => {
    //     console.log('useEffect utk jumlah murid yang berubah', jumlahMurid);
    //     dataJumlahMurid(jumlahMurid);
    // }, [jumlahMurid, dataJumlahMurid]);

    // useEffect(() => {
    //     console.log('useEffect utk nilai siswa yang berubah', nilaiSiswa);
    // }, [nilaiSiswa]);
    

    return (
        <div>
            <div>
                <button onClick={tambahSiswa}>Tambah</button>
                <button onClick={dropOut}>Drop Out</button>
            </div>
            <div>
                jumlah murid : {jumlahSiswa}
            </div>
            {/* <div>
                Nilai : 
                <button onClick={tambahNilai}>Tambah</button>
                <button onClick={kurangNilai}>Kurang</button>
            </div>
            <div>
                Nilai siswa adalah {nilaiSiswa}
            </div> */}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        jumlahSiswa: state.jumlahSiswa
    }
}


export default connect(mapStateToProps)(Index);