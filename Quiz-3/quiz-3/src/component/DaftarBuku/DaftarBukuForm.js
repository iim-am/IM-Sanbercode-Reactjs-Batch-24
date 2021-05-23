import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { DaftarBukuContext } from "./DaftarBukuContext";

const DaftarBukuForm = () => {
  let inputBuku = {
    title: "",
    description: "",
    review: "",
    release_year: 2020,
    halaman: 0,
    price: 0,
    image_url: "",
  };
  const [daftarBuku, setDaftarBuku] = useContext(DaftarBukuContext);
  const [input, setInput] = useState(inputBuku);

  useEffect(() => {
    if (daftarBuku.statusForm === "changeToEdit") {
      let dataBuku = daftarBuku.lists.find(
        (el) => el.id === daftarBuku.selectedId
      );
      setInput({
        id: dataBuku.id,
        title: dataBuku.title,
        description: dataBuku.description,
        review: dataBuku.review,
        release_year: dataBuku.release_year,
        halaman: dataBuku.halaman,
        price: dataBuku.price,
        image_url: dataBuku.image_url,
      });
      setDaftarBuku({ ...daftarBuku, statusForm: "edit" });
    }
  }, [daftarBuku, setDaftarBuku]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (daftarBuku.statusForm === "create") {
      axios
        .post(`http://backendexample.sanbercloud.com/api/books`, {
          id: input.id,
          title: input.title,
          description: input.description,
          review: input.review,
          release_year: input.release_year,
          halaman: input.halaman,
          price: input.price,
          image_url: input.image_url,
        })
        .then((res) => {
          setDaftarBuku({
            statusForm: "create",
            selectedId: 0,
            lists: [
              ...daftarBuku.lists,
              {
                id: res.data.id,
                title: input.title,
                description: input.description,
                review: input.review,
                release_year: input.release_year,
                halaman: input.halaman,
                price: input.price,
                image_url: input.image_url,
              },
            ],
          });
          alert("data ditambah");
        });
    } else if (daftarBuku.statusForm === "edit") {
      console.log(daftarBuku.selectedId);
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/books/${daftarBuku.selectedId}`,
          input
        )
        .then(() => {
          let dataBuku = daftarBuku.lists.find(
            (el) => el.id === daftarBuku.selectedId
          );
          dataBuku.id = input.id;
          dataBuku.title = input.title;
          dataBuku.description = input.description;
          dataBuku.review = input.review;
          dataBuku.release_year = input.release_year;
          dataBuku.halaman = input.halaman;
          dataBuku.price = input.price;
          dataBuku.image_url = input.image_url;
          setDaftarBuku({
            statusForm: "create",
            selectedId: 0,
            lists: [...daftarBuku.lists],
          });
          alert("dapatdiedit");
        });
    }

    setInput(inputBuku);
  };

  const handleChange = (event) => {
    let typeOfInput = event.target.name;

    switch (typeOfInput) {
      case "title": {
        setInput({ ...input, title: event.target.value });
        break;
      }
      case "description": {
        setInput({ ...input, description: event.target.value });
        break;
      }
      case "review": {
        setInput({ ...input, review: event.target.value });
        break;
      }
      case "release_year": {
        setInput({ ...input, release_year: event.target.value });
        break;
      }
      case "halaman": {
        setInput({ ...input, halaman: event.target.value });
        break;
      }
      case "price": {
        setInput({ ...input, price: event.target.value });
        break;
      }
      case "image_url": {
        setInput({ ...input, image_url: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <>
      <h1>Books Form</h1>
      <div style={{ width: "50%", margin: "0 auto", display: "block" }}>
        <div style={{ border: "1px solid #aaa", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <label style={{ float: "left" }}>Title</label>
            <input
              style={{ float: "right" }}
              type="text"
              name="title"
              value={input.title}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Description</label>
            <textarea
              style={{ float: "right" }}
              name="description"
              value={input.description}
              onChange={handleChange}
              rows="4"
              required
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <label style={{ float: "left" }}>Review</label>
            <textarea
              style={{ float: "right" }}
              name="review"
              value={input.review}
              onChange={handleChange}
              rows="4"
              required
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            
          
            <label style={{ float: "left" }}>Year</label>
            <input
              style={{ float: "right" }}
              type="number"
              name="release_year"
              value={input.release_year}
              onChange={handleChange}
              min="1980"
              max="2020"
              required
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Total Page</label>
            <input
              style={{ float: "right" }}
              type="number"
              name="halaman"
              value={input.halaman}
              onChange={handleChange}
              required
            />
            <br />
            <br />
          
            <label style={{ float: "left" }}>Price</label>
            <input
              style={{ float: "right" }}
              type="number"
              name="price"
              value={input.price}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Img Url</label>
            <textarea
              style={{ float: "right" }}
              name="image_url"
              value={input.image_url}
              onChange={handleChange}
              rows="4"
              required
            />
            <br />
            <br />
            <br />
            <br />
            <input type="submit" value="Submit" />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default DaftarBukuForm;
