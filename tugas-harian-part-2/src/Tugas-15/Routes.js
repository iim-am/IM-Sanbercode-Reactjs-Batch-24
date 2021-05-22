import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Tugas9 from '../Tugas-9/tugas9';
import Tugas10 from '../Tugas-10/ListBuah';
import Tugas11 from '../Tugas-11/tugas11';
import Tugas12 from '../Tugas-12/tugas12';
import Tugas13 from '../Tugas-13/tugas13';
import Tugas14 from '../Tugas-14/DaftarMahasiswa';
import Tugas15 from '../Tugas-15/SwitchTheme';
import Tabel1 from '../Tugas-15/DaftarMahasiswa';





import Nav from './Nav';
import { DaftarMahasiswaProvider } from "./DaftarMahasiswaContext";

export default function App() {
  return (
      <>
        <Router>
          <DaftarMahasiswaProvider>
            <Nav/>
            <Switch>
              <Route exact path="/">
                <Tugas9 />
              </Route>

              <Route exact path="/tugas10">
                <Tugas10 />
              </Route>

              <Route exact path="/tugas11">
                <Tugas11 start={200} />
              </Route>

              <Route path="/tugas12">
                <Tugas12 />
              </Route>
              
              <Route path="/tugas13">
                <Tugas13 />
              </Route>

              <Route path="/tugas14">
                <Tugas14 />
              </Route>

              <Route path="/tugas15">
                <Tugas15 />
                <Tabel1/>
                

              </Route>
            
            </Switch>
          </DaftarMahasiswaProvider>
        </Router>    
      </>
  );
}