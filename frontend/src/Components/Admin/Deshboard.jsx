import React, { useEffect, useState } from 'react'
import SiderBar from './SiderBar'
import './desh.css';
import DataTable from './DataTable';
import axios from 'axios';

const Deshboard = () => {
  return (
    <div className=' d-flex  overflow-hidden  vh-100'>
      <SiderBar />
      <DeshDetial />
    </div>
  )
}
function DeshDetial() {
  const [sumFuel, setSumFuel] = useState([])
  const [totalFuelSum, setTotalFuelSum] = useState()
  const [totalPriceSum, setTotalPriceSum] = useState()
  let totalFuel = 0
  let totalPr = 0
  
  useEffect(() => {
    const fetchFuelHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/fuel-history');
        console.log(response.data);
        setSumFuel(response.data);
        
      } catch (error) {
        console.error('Error fetching fuel history:', error.message);
      }
    };

    fetchFuelHistory();
  }, []);

  useEffect(()=>{
    try {
      sumFuel.map((i)=>{
        return totalFuel += i.totalLiters
      })
      sumFuel.map((i)=>{
        return totalPr += i.totalPrice
      })
      localStorage.setItem("totalFuel",JSON.stringify(totalFuel))
      localStorage.setItem("totalPr",JSON.stringify(totalPr))
      const tf = localStorage.getItem('totalFuel')
      const tp = localStorage.getItem('totalPr')
      setTotalFuelSum(tf);
      setTotalPriceSum(tp);
    } catch (error) {
      console.error('Error fetching fuel history:', error.message);
    }
  }, [sumFuel])
  return (<div className='d-flex flex-column w-100  vh-100 forsiderpadding responsivewidht gap-1 p-sm-2 p-lg-2  ps-2 pt-3  '>
    <div className='forheight'>
      <div className="d-flex justify-content-between align-items-center hg pt-4 pb-3 w-sm-75 w-100 custpd">
        <h3 className='m-0'>DeshBoard</h3>
        <button className='backbtn'><img src="./image/arrow.png" alt="" className='arrow' />Back</button>
      </div>
      <div className="d-flex align-items-center gap-md-2 gap-lg-4 gap-2 flex-wrap  px-1">
        <Records img={"./image/1.png"} price={totalPriceSum} paragraphic={"total feul Record"} color={'box1'} />
        <Records img={"./image/2.png"} price={23} paragraphic={"Cost per liter"} color={'box2'} />
        <Records img={"./image/4.png"} price={234} paragraphic={"Avg fuel economany"} color={'box3'} />
        <Records img={"./image/3.png"} price={totalFuelSum} paragraphic={"Total Liter "} color={'box4'} />
      </div>
      <div className="inputbox-width d-flex gap-md-5 gap-lg-5 gap-3 py-4 flex-wrap">
        <input type="text" name="" id="" placeholder='Search Here' className='firstbox boxinp p-1' />
        <input type="text" name="" id="" placeholder='Today ' className='secondbox-width boxinp p-1' />
        <input type="text" name="" id="" placeholder='dat 34 23 ' className='thridbox boxinp p-1' />
      </div>
      <DataTable />
    </div>
  </div>

  )
}
export default Deshboard

function Records({ img, price, paragraphic, color }) {
  return (
    <div className={`box  ${color}`}>
      <div className="d-flex  align-items-center gap-sm-3 gap-lg-3 gap-1 ">
        <img src={img} alt="" className='widthimage' />
        <p className='m-0'>{price}PKR</p>
      </div>
      <p className='m-0 pt-1'>{paragraphic}</p>
    </div>
  )
}