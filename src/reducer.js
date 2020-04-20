const initialState = {
    jumlahSiswa: 1000,
    nilaiSiswa: 0
}

export default (state = initialState, action = {}) => {

    switch(action.type){
        case 'TAMBAHSISWA':
            return Object.assign( {}, state, { jumlahSiswa: state.jumlahSiswa + 1} )
        case 'DROPOUT':
            return Object.assign( {}, state, { jumlahSiswa: state.jumlahSiswa - 1} )
        default: 
            return state;
    }
}