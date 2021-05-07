import React, { Component } from 'react'
import SatuanBuah from './SatuanBuah'


class ListBuah extends Component {
    render() {
    let dataHargaBuah = [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
    ]

    return (
    <>
        <h1 style={{textAlign : "center"}}> Tabel Harga Buah</h1>
        <table style={{border: "1px solid", width: "40%", margin: "0 auto"}}>
            <thead style={{background: "#aaa"}}>
            <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
            </tr>
            </thead>
            <tbody style={{background: "coral"}}>
                {dataHargaBuah.map((el, index)=> {
                return (
                <>
                    <SatuanBuah item={el} key={index}/>
                </>
                )
            })}
            </tbody>
        </table>
    </>
    )}}

export default ListBuah