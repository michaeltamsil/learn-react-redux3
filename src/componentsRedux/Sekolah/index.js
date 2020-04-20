import React from 'react';
import Count from './Count';

export default (props) => {
    const { jumlahMurid } = props;
    return (
        <div>
            <h1>Sekolah Coding</h1>
            <h3>Jumlah peserta
                <Count jumlahMurid = {jumlahMurid} />
            </h3>
        </div>
    )
}