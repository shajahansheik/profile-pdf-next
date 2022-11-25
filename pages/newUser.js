import axios from "axios";
import { useState } from "react";
import Router from "next/router";
const initialDetails = {
    firstName: '',
    lastName: '',
    password:'',
    father: '',
    mother: '',
    phoneNumber: '',
    mail: '',
    aadharNo: '',
    panNo: ''
}
function NewUser() {
    const [userData, setUserData] = useState(initialDetails);

    const addData = (event) => {
        // const [name,value]= event.target;

        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const submit = () => {
        console.log("userData", userData)
        axios.post('http://localhost:3000/api/createpdf',userData).then(res=>{
            // setUserData(initialDetails);
            // Router.push('/')
            console.log(res)
        })
        // const res = await fetch(`http://localhost:3000/api/`);
        // let data = (await res.json())?.data;
    }

    return (
        <div >
            <div className="relative h-screen overflow-hidden px-3">
                <div className="flex items-center justify-between  h-16 top-0 bg-white w-full">
                    <h2 className="text-2xl font-bold">Registration Form</h2>
                    <button className="px-4 py-2 bg-emerald-500 rounded-md text-white relative right-12" onClick={submit}>Submit</button>
                </div>
                <form className="w-full relative px-2  space-y-3 h-full">

                    <div className="space-y-5 h-[90vh] pb-5  overflow-scroll">
                        <div className="space-y-2">
                            <h2 className="text-xl">Personal Details</h2>

                            <div className="grid grid-cols-3 gap-5 pl-3">
                                <div>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type='text' id="firstName" name="firstName" value={userData?.firstName} placeholder="Enter Your First Name" className="input-field " onChange={(e) => addData(e)} />
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type='text' id="lastName" name="lastName" value={userData?.lastName} placeholder="Enter Your Last Name" className="input-field " onChange={(e) => addData(e)} />
                                </div>
                                <div>
                                    <label htmlFor="mail">Email</label>
                                    <input type='mail' id="mail" name="mail" value={userData?.mail} placeholder="Enter Your Email" className="input-field " onChange={(e) => addData(e)} />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type='password' id="password" name="password" value={userData?.password} placeholder="Enter Your Password" className="input-field " onChange={(e) => addData(e)} />
                                </div>
                                <div>
                                    <label htmlFor="father">Father Name</label>
                                    <input type='text' id="father" name="father" value={userData?.father} placeholder="Enter Your Father Name" className="input-field " onChange={(e) => addData(e)} />
                                </div>
                                <div>
                                    <label htmlFor="mother">Mother Name</label>
                                    <input type='text' id="mother" name="mother" value={userData?.mother} placeholder="Enter Your Mother Name" className="input-field " onChange={(e) => addData(e)} />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type='tel' id="phoneNumber" name="phoneNumber" value={userData?.phoneNumber} placeholder="Enter Your Phone Number" className="input-field " onChange={(e) => addData(e)} />
                                </div>
                                <div>
                                    <label htmlFor="aadharNo">Aadhar Number</label>
                                    <input type='text' id="aadharNo" name="aadharNo" value={userData?.aadharNo} placeholder="Enter Your Aadhar Number" className="input-field " onChange={(e) => addData(e)} />
                                </div>
                                <div>
                                    <label htmlFor="panNo">Pan Number</label>
                                    <input type='text' id="panNo" name="panNo" value={userData?.panNo} placeholder="Enter Your Pan Number" className="input-field " onChange={(e) => addData(e)} />
                                </div>
                            </div>
                        </div>

                        {/* <div className="space-y-2">
                            <h2 className="text-xl">Address</h2>
                            <div className="grid grid-cols-3 gap-5 pl-3">
                                <div>
                                    <label htmlFor="houseNo">H No</label>
                                    <input type='text' id="houseNo" name="houseNo" placeholder="Enter Your H No" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="street">Street</label>
                                    <input type='text' id="street" name="street" placeholder="Enter Your Street" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="village">Village</label>
                                    <input type='text' id="village" name="village" placeholder="Enter Your Village" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="mandal">Mandal</label>
                                    <input type='text' id="mandal" name="mandal" placeholder="Enter Your Mandal" className="input-field " />
                                </div>

                                <div>
                                    <label htmlFor="district">District</label>
                                    <input type='text' id="district" name="district" placeholder="Enter Your District" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="state">State</label>
                                    <input type='text' id="state" name="state" placeholder="Enter Your State" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="constitution">Constitution</label>
                                    <input type='text' id="constitution" name="constitution" placeholder="Enter Your Constitution" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="country">Country</label>
                                    <input type='text' id="country" name="country" placeholder="Enter Your Country" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="pincode">Zip/Postal Code </label>
                                    <input type='text' id="pincode" name="pincode" placeholder="Enter Your Pincode" className="input-field " />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl">Education Details</h2>
                            <div className="grid grid-cols-3 gap-5 pl-3">
                                <div>
                                    <label htmlFor="hallTicketNo">Hall Ticket Number</label>
                                    <input type='text' id="hallTicketNo" name="hallTicketNo" placeholder="Enter Your Hall Ticket Number" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegeName">College Name</label>
                                    <input type='text' id="collegeName" name="collegeName" placeholder="Enter Your College Name" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="education">Education</label>
                                    <input type='text' id="education" name="education" placeholder="Enter Your Education" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="passingYear">Year of Complete</label>
                                    <input type='text' id="passingYear" name="passingYear" placeholder="Enter Your Year of Complete" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="university">University</label>
                                    <input type='text' id="university" name="university" placeholder="Enter Your University" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegevillage">Village</label>
                                    <input type='text' id="collegevillage" name="collegevillage" placeholder="Enter Your College Area/Village" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegemandal">Mandal</label>
                                    <input type='text' id="collegemandal" name="collegemandal" placeholder="Enter Your Mandal" className="input-field " />
                                </div>

                                <div>
                                    <label htmlFor="collegedistrict">District</label>
                                    <input type='text' id="collegedistrict" name="collegedistrict" placeholder="Enter Your  District" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegestate">State</label>
                                    <input type='text' id="collegestate" name="collegestate" placeholder="Enter Your State" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegeconstitution">Constitution</label>
                                    <input type='text' id="collegeconstitution" name="collegeconstitution" placeholder="Enter Your Constitution" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegecountry">Country</label>
                                    <input type='text' id="collegecountry" name="collegecountry" placeholder="Enter Your Country" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegepincode">Zip/Postal Code </label>
                                    <input type='text' id="collegepincode" name="collegepincode" placeholder="Enter Your Pincode" className="input-field " />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-xl">Employment Details</h2>
                            <div className="grid grid-cols-3 gap-5 pl-3">
                                <div>
                                    <label htmlFor="empId">Employee Id</label>
                                    <input type='text' id="empId" name="empId" placeholder="Enter Your Employee Id" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="designation">Designation</label>
                                    <input type='text' id="designation" name="designation" placeholder="Enter Your Designation" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="package">Package</label>
                                    <input type='text' id="package" name="package" placeholder="Enter Your Package" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="officeName">Company Name</label>
                                    <input type='text' id="officeName" name="officeName" placeholder="Enter Your Company Name" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegevillage">Village</label>
                                    <input type='text' id="collegevillage" name="collegevillage" placeholder="Enter Your College Area/Village" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegemandal">Mandal</label>
                                    <input type='text' id="collegemandal" name="collegemandal" placeholder="Enter Your Mandal" className="input-field " />
                                </div>

                                <div>
                                    <label htmlFor="collegedistrict">District</label>
                                    <input type='text' id="collegedistrict" name="collegedistrict" placeholder="Enter Your  District" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegestate">State</label>
                                    <input type='text' id="collegestate" name="collegestate" placeholder="Enter Your State" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegeconstitution">Constitution</label>
                                    <input type='text' id="collegeconstitution" name="collegeconstitution" placeholder="Enter Your Constitution" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegecountry">Country</label>
                                    <input type='text' id="collegecountry" name="collegecountry" placeholder="Enter Your Country" className="input-field " />
                                </div>
                                <div>
                                    <label htmlFor="collegepincode">Zip/Postal Code </label>
                                    <input type='text' id="collegepincode" name="collegepincode" placeholder="Enter Your Pincode" className="input-field " />
                                </div>
                            </div>
                        </div> */}

                    </div>

                </form>
            </div>
        </div>
    );
}

export default NewUser;