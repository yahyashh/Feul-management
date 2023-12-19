import React from 'react'
import SiderBar from './SiderBar'
import './desh.css';
import DataTable from './DataTable';

const Deshboard = () => {
  return (
    <div className='d-flex'>
      <SiderBar />
      <DeshDetial />
    </div>
  )
}
function DeshDetial() {
  return (
    <div className='w-100 vh-100 px-5'>
      <div className="d-flex justify-content-between align-items-center hg pt-4 pb-3">
        <h5>feuling Record</h5>
        <button className='backbtn'><img src="./image/arrow.png" alt="" className='arrow' />Back</button>
      </div>
      <div className="d-flex align-items-center gap-4">
        <Records img={"./image/1.png"} price={235} paragraphic={"total feul Record"} color={'box1'} />
        <Records img={"./image/2.png"} price={23} paragraphic={"Cost per liter"} color={'box2'} />
        <Records img={"./image/4.png"} price={234} paragraphic={"Avg fuel economany"} color={'box3'} />
        <Records img={"./image/3.png"} price={23} paragraphic={"Total Liter "} color={'box4'} />
      </div>
      <div className="inputbox-width d-flex gap-5 py-4">
        <input type="text" name="" id="" placeholder='Search Here' className='firstbox boxinp p-1' />
        <input type="text" name="" id="" placeholder='Today ' className='secondbox-width boxinp p-1' />
        <input type="text" name="" id="" placeholder='dat 34 23 ' className='thridbox boxinp p-1' />
      </div>
      <DataTable />
    </div>
  )
}
export default Deshboard

function Records({ img, price, paragraphic, color }) {
  return (
    <div className={`box  ${color}`}>
      <div className="d-flex  align-items-center gap-3 ">
        <img src={img} alt="" className='widthimage' />
        <p className='m-0'>{price}PKR</p>
      </div>
      <p className='m-0 pt-1'>{paragraphic}</p>
    </div>
  )
}