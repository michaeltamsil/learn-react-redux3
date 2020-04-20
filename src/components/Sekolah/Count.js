import React from 'react';
import { connect } from 'react-redux';

const Count = (props) => {
    const { jumlahMurid, jumlahSiswaDariSekolahLain } = props;
    return (
        <div>
            <span>total Jumlah {jumlahMurid}</span>
            <br/>
            <br/>
    <h1 style={{color:"red"}}>dari sekolah lain {jumlahSiswaDariSekolahLain}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        jumlahSiswaDariSekolahLain: state.jumlahSiswa
    }
}

export default connect(mapStateToProps)(Count)