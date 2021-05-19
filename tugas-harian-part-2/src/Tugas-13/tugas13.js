import React, {useState, useEffect} from "react"
import axios from "axios"
import "./tugas13.css"

const DaftarMahasiswa = () => {  
  const [daftarMahasiswa, setDaftarMahasiswa] =  useState(null)
  const [input, setInput]  =  useState({name: "", matkul: "", nilai: 0, id: null})

  useEffect( () => {
    if (daftarMahasiswa === null){
      axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
      .then(res => {
        setDaftarMahasiswa(res.data.map(el=>{ return {id: el.id, name: el.name, matkul: el.matkul, nilai: el.nilai }} ))
      })
    }
  }, [daftarMahasiswa])
  
  const handleDelete = (event) => {
    let ID_STUDENt = parseInt(event.target.value)

   

    // cara 2
    axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENt}`)
    .then(() => {
      setDaftarMahasiswa(null)
    })
          
    
  }
  
  const handleEdit = (event) =>{
   
    let ID_STUDENt = parseInt(event.target.value)
        
    axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENt}`)
    .then(res => {
      let dataMahasiswa = res.data
      setInput({name: dataMahasiswa.name, matkul: dataMahasiswa.matkul, nilai: dataMahasiswa.nilai, id: ID_STUDENt})
    })
  
  }

  const handleChange = (event) =>{
    let typeOfInput = event.target.name

    switch (typeOfInput){
      case "name":
      {
        setInput({...input, name: event.target.value});
        break
      }
      case "matkul":
      {
        setInput({...input, matkul: event.target.value});
        break
      }
      case "nilai":
      {
        setInput({...input, nilai: event.target.value});
          break
      }
    default:
      {break;}
    }
  }

  const handleSubmit = (event) =>{
    // menahan submit
    event.preventDefault()

    let name = input.name
    let matkul = input.matkul.toString()
    

    if (input.id === null){        
      axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name, matkul, nilai: input.nilai})
      .then(res => {
          setDaftarMahasiswa([
            ...daftarMahasiswa, 
            { id: res.data.id, 
              name, 
              matkul,
              nilai: input.nilai
            }])
      })
    }else{
      axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${input.id}`, {name, matkul, nilai: input.nilai})
      .then(() => {
          let dataMahasiswa = daftarMahasiswa.find(el=> el.id === input.id)
          dataMahasiswa.name = name
          dataMahasiswa.matkul = matkul
          dataMahasiswa.nilai = input.nilai
          setDaftarMahasiswa([...daftarMahasiswa])
      })
    }

    // reset input form to default
    setInput({name: "", matkul: "", nilai: 0, id: null})

  }

  function getIndeks(nilai){
    if (nilai >= 80){
      return("A")
    }else if(nilai >= 70 && nilai < 80){
      return ("B")
    }else if(nilai >=60 && nilai < 70){
      return ("C")
    }else if (nilai >= 50 && nilai < 60){
      return ("D")
    }else{
      return("E")
    }
  }

  return(
    <>
      <h1>Daftar Nilai Mahasiswa</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Indeks Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>

            {
              daftarMahasiswa !== null && daftarMahasiswa.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.matkul}</td>
                    <td>{item.nilai} </td>
                    <td>
                      {getIndeks(item.nilai)}
                    </td>
                    <td>
                      <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      {/* Form */}
      <h1>Form Nilai Mahasiswa</h1>

      <div style={{width: "50%", margin: "0 auto", display: "block"}}>
        <div style={{border: "1px solid #aaa", padding: "20px"}}>
          <form onSubmit={handleSubmit}>
            <label style={{float: "left"}}>
              Nama:
            </label>
            <input style={{float: "right"}} type="text" required name="name" value={input.name} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Mata Kuliah:
            </label>
            <input style={{float: "right"}} type="text" required name="matkul" value={input.matkul} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Nilai:
            </label>
            <input style={{float: "right"}} type="number" required name="nilai" value={input.nilai} onChange={handleChange}/>
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

export default DaftarMahasiswa