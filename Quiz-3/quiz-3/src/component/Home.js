import React, { useState, useEffect } from "react";
import axios from "axios";


const Home = () => {
  const [daftarBuku, setDaftarBuku] = useState(null);

  useEffect(() => {
    if (daftarBuku === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/books`)
        .then((res) =>
          setDaftarBuku(
            res.data.map((el) => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                review: el.review,
                release_year: el.release_year,
                halaman: el.halaman,
                price: el.price,
                image_url: el.image_url,
              };
            })
          )
        );
    }
  });

  return (
    <section>
      <h1>Daftar Buku-buku pilihan</h1>
      <div className="article-list">
        {daftarBuku !== null &&
          daftarBuku.map((item, index) => {
            return (
              <div key={index} className="buku">
                <h3>{item.title}</h3>
                <div style={{ display: "flex" }}>
                  <img
                    className="imgBuku"
                    src={item.image_url}
                    alt={item.title}
                  />

                  <div style={{ marginLeft: 20 }}>
                    <h4>Tahun Terbit :{item.release_year}</h4>
                    <h4>Harga :{item.price}</h4>
                    <h4>Jumlah Halaman :{item.halaman}</h4>
                  </div>
                </div>

                <p>{item.description}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Home;
