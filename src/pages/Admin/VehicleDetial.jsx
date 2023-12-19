import SiderBar from "./SiderBar"
import "./assign.css"
const data = [
    { id: 1, Vehiclename: 'Honda', assignedname: 'furkan', vehicletype: 'Honda', numberplate: '4325d', actions: "Active" },
    { id: 2, Vehiclename: 'suzike', assignedname: 'Zurdan', vehicletype: 'suzike', numberplate: 'W9834', actions: "Active" },
    { id: 2, Vehiclename: 'bus', assignedname: 'Zubir', vehicletype: 'bus', numberplate: 'M3457', actions: "Active" },
    { id: 2, Vehiclename: 'van Azam', assignedname: 'Ahmmad', vehicletype: 'van', numberplate: 'T79834 ', actions: "Active" },
    { id: 2, Vehiclename: 'Bus', assignedname: 'Yahya', vehicletype: 'Bus', numberplate: 'F43554', actions: "Active" },
    { id: 2, Vehiclename: 'truck', assignedname: 'Anas ', vehicletype: 'truck', numberplate: 'W4353', actions: "noActive" },
    { id: 2, Vehiclename: 'Hondx', assignedname: 'Saood', vehicletype: 'Hondx', numberplate: 'k54665', actions: "Active" },
    { id: 2, Vehiclename: 'Tesle', assignedname: 'daivd', vehicletype: 'Tesle X ', numberplate: 'z8654', actions: "Active" },
    { id: 2, Vehiclename: 'Ferrir', assignedname: 'admin', vehicletype: 'Ferrir ', numberplate: 'Q4563', actions: "Active" },
    { id: 2, Vehiclename: 'lamborghini', assignedname: 'admin', vehicletype: 'lamborghini', numberplate: 'W5361', actions: "noActive" },
    { id: 2, Vehiclename: 'Toyata', assignedname: 'gmail.', vehicletype: 'Toyata', numberplate: 'h34523', actions: "Active" },
    // Add more data as needed
];

function AssignVehicle() {


    return <div className='w-100 d-flex  overflow-hidden '><SiderBar showText={true} />
        <AssignVehicleTable />
    </div>

}
function AssignVehicleTable() {
    return (
        <div className="d-flex flex-column w-100  gap-4 p-sm-4 p-lg-4  ps-2 pt-3 vh-100 forsiderpadding  overflow-hidden">
            <div className="d-flex  justify-content-between align-items-center ">
                <h5 className='m-0'>Vehicle Detials</h5>
                <button className='backbtn'><img src="./image/arrow.png" alt="" className='arrow' />Back</button>
            </div>
            <div className="d-flex justify-content-start align-items-center w-100 seainp gap-2 gap-lg-4 gap-sm-4 gap- flex-wrap">
                <input type="text" name="" id="" placeholder='Search Name' />
                <input type="text" name="" id="" placeholder='Search Vehicle' />
            </div>
            <TableAssign />
        </div>
    )
}
export default AssignVehicle
function TableAssign() {
    return <div className="overfl tbl-contaienr ">
        <table className="table table-hover text-start  table-container tbl-fixed">
            <thead>
                <tr>
                    <th >Vehicle Name</th>
                    <th >Assigned To</th>
                    <th >Vehicle Type </th>
                    <th >Number Plate</th>
                    <th >Active/NonActive</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td><img src="./image/honda.png" alt="" className='data-image me-3' />{item.Vehiclename}</td>
                        <td><img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" className='data-image me-3' />{item.assignedname}</td>
                        <td className='pd'>{item.vehicletype}</td>
                        <td className='pd'>{item.numberplate}</td>
                        <td className='pd fw-bold'>{item.actions}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>

}

