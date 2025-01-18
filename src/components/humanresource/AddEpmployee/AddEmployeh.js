import { Link } from "react-router-dom";
import BasicInformation from "./BasicInformation";
import PositionInfo from "./PositionInfo";
import { useState } from "react";
import Benefits from "./Benefits";
import Supervisor from "./Supervisor";
import BiographicalInfo from "./BiographicalInfo";
import AdditionalAddress from "./AdditionalAddress";
import EmergencyContact from "./EmergencyContact";
import Custom from "./Custom";

function AddEmployeeH() {
    const [tab, TabSet] = useState(0);

    const HandleTab = () => {
        // TabSet((prevTab) => prevTab + 1);
        // console.log(tab + 1);
        if(tab === 7){
            TabSet((prevTab) => prevTab + 0);
        }else{
            TabSet((prevTab) => prevTab + 1);
        }
    };
    const HandleTabLess = () => {
        TabSet((prevTab) => prevTab - 1);
        console.log(tab - 1);
    };
    return (
        <div className="row m-2 m-lg-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">
                                <i className="fa-solid fa-house text-success"></i> Employees
                            </h4>
                        </div>
                    </div>
                    <ul className="mt-2 gap-2 p-0 d-flex">
                        <li className={`px-3 py-2 rounded shadow ${tab === 0 ? "bg-success text-white" : "bg-primary text-white"}`}>
                            Basic Information
                        </li>
                        <li className={`px-3 py-2 rounded shadow ${tab === 1 ? "bg-success text-white" : "bg-primary text-white"}`}>
                            Position Info
                        </li>
                        <li className={`px-3 py-2 rounded shadow ${tab === 2 ? "bg-success text-white" : "bg-primary text-white"}`}>
                            Benefits
                        </li>
                        <li className={`px-3 py-2 rounded shadow ${tab === 3 ? "bg-success text-white" : "bg-primary text-white"}`}>
                            Supervisor
                        </li>
                        <li className={`px-3 py-2 rounded shadow ${tab === 4 ? "bg-success text-white" : "bg-primary text-white"}`}>
                            Biographical Info
                        </li>
                        <li className={`px-3 py-2 rounded shadow ${tab === 5 ? "bg-success text-white" : "bg-primary text-white"}`}>
                            Additional Address
                        </li>
                        <li className={`px-3 py-2 rounded shadow ${tab === 6 ? "bg-success text-white" : "bg-primary text-white"}`}>
                            Emergency Contact
                        </li>
                        <li className={`px-3 py-2 rounded shadow ${tab === 7 ? "bg-success text-white" : "bg-primary text-white"}`}>
                            Custom
                        </li>
                    </ul>
                    <div>
                        {tab === 0 && <BasicInformation />}
                        {tab === 1 && <PositionInfo />}
                        {tab === 2 && <Benefits />}
                        {tab === 3 && <Supervisor />}
                        {tab === 4 && <BiographicalInfo />}
                        {tab === 5 && <AdditionalAddress />}
                        {tab === 6 && <EmergencyContact />}
                        {tab === 7 && <Custom />}
                    </div>
                    <div className="d-flex gap-2 mt-3 justify-content-end">
                         <button className={`btn btn-primary m-0 ${tab === 0 ? "d-none" : "d-block"}`} type="button" onClick={HandleTabLess}>
                            Previous
                        </button>
                        <button className="btn btn-success m-0" type="button" onClick={HandleTab}>
                            {tab === 7 ? "Save" : "Next"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeH;
