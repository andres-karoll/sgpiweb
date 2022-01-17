import React from 'react'
import Navar from  '../../components/Navar'
import Footer from '../../components/Footer'
import Search from './Search';
// import NotFoundImg from '../images/404.png'

const SearchP = () => (
  <div style={{backgroundColor: "#080424"}}>
    <Navar/>
    <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12" ></div>
      </div>
    </div>
  </div>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12" ></div>
      </div>
    </div>
  </div>

    <Search/>
    <Footer/>
    </div>
);

export default SearchP