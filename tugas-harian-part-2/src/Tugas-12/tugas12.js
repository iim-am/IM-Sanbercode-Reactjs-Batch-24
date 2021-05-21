import React, {Component} from "react"
import "./JutsuPerubahan.css"

class AkangBuah extends Component{

  constructor(props){
    super(props)
    this.state = {
            daftarBuah : [
            {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
            {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
            {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
            {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
            {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
          ],
     inputName : "",
     inputHarga : 0,
     inputBerat : 2000,
     /// array tidak punya index -1
     indexOfForm: -1    
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
 
  handleDelete(event){
    let index = event.target.value
    let newDaftarBuah = this.state.daftarBuah
    let editedDataBuah = newDaftarBuah[this.state.indexOfForm]
    newDaftarBuah.splice(index, 1)

    if (editedDataBuah !== undefined){
      // array findIndex baru ada di ES6
      var newIndex = newDaftarBuah.findIndex((el) => el === editedDataBuah)
      this.setState({daftarBuah: newDaftarBuah, indexOfForm: newIndex})
      
    }else{
      
      this.setState({daftarBuah: newDaftarBuah})
    }
    
  }
  
  handleEdit(event){
    let index = event.target.value
    let dataBuah = this.state.daftarBuah[index]
    this.setState({
      inputName: dataBuah.nama,
      inputHarga: dataBuah.hargaTotal,
      inputBerat: dataBuah.beratTotal,
      indexOfForm: index
    })
  }

  handleChange(event){
    let typeOfInput = event.target.name
    switch (typeOfInput){
      case "name":
      {
        this.setState({inputName: event.target.value});
        break
      }
      case "harga":
      {
        this.setState({inputHarga: event.target.value});
        break
      }
      case "berat":
      {
        this.setState({inputBerat: event.target.value});
          break
      }
    default:
      {break;}
    }
  }

  handleSubmit(event){
    // menahan submit
    event.preventDefault()

    let nama = this.state.inputName
    let hargaTotal= this.state.inputHarga.toString()
    let beratTotal = this.state.inputBerat


    let newDaftarBuah = this.state.daftarBuah
    let index = this.state.indexOfForm
    
    if (index === -1){
      newDaftarBuah = [...newDaftarBuah, {nama, hargaTotal, beratTotal}]
    }else{
      newDaftarBuah[index] = {nama, hargaTotal, beratTotal}
    }

    this.setState({
      daftarBuah: newDaftarBuah,
      inputName: "",
      inputHarga: "",
      inputBerat: 0
    })

  }

  render(){
    return(
      <>
        <h1>Daftar Harga Buah</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga Total</th>
              <th>Berat Total</th>
              <th>Harga per Kg</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.daftarBuah.map((item, index)=>{
                  return(                    
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.nama}</td>
                      <td>{item.hargaTotal}</td>
                      <td>{item.beratTotal/1000} kg</td>
                      <td>{item.hargaTotal/(item.beratTotal/1000)}</td>
                      <td>
                        <button onClick={this.handleEdit} value={index}>Edit</button>
                        &nbsp;
                        <button onClick={this.handleDelete} value={index}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Daftar Harga Buah</h1>
        <div style={{width: "50%", margin: "0 auto", display: "block"}}>
          <div style={{border: "1px solid #aaa", padding: "20px"}}>
            <form onSubmit={this.handleSubmit}>
              <label style={{float: "left"}}>
                Nama:
              </label>
              <input style={{float: "right"}} type="text" required name="name" value={this.state.inputName} onChange={this.handleChange}/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Harga Total:
              </label>
              <input style={{float: "right"}} type="text" required name="harga" value={this.state.inputHarga} onChange={this.handleChange}/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Berat Total (dalam gram):
              </label>
              <input style={{float: "right"}} type="number" required name="berat" value={this.state.inputBerat} onChange={this.handleChange}/>
              <br/>
              <br/>
              <div style={{width: "100%", paddingBottom: "20px"}}>
                <button style={{ float: "right"}}>submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default AkangBuah