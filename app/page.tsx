"use client";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiCake2Fill } from "react-icons/ri";
import { IoSchoolSharp } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import connectMongoDb from "@/libs/dataBase/mongoDb";
import axios from "axios";
import { useState } from "react";
export default function Home() {
  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function uploadPhoto() {
    document.getElementById("uploadPhoto").click();
  }
  async function uploadPhotoImage(e) {
    console.log(e.target.files[0])
    var form = new FormData();
    form.append("image", e.target.files[0]);

    axios
      .post(
        "https://api.imgbb.com/1/upload?expiration=600&key=9310914e0d6137e3ed5a685d6487caf6",
        form
      )
      .then((response) => {
        console.log("response URL", response.data.data.image.url);
        updatePhoto(response.data.data.image.url)
      })
      .catch((error) => {
        console.log("error");
      });
  }function uploadPhotoID() {
    document.getElementById("uploadPhotoID").click();
  }
  async function uploadCollageID(e) {
    console.log(e.target.files[0])
    var form = new FormData();
    form.append("image", e.target.files[0]);

    axios
      .post(
        "https://api.imgbb.com/1/upload?expiration=600&key=9310914e0d6137e3ed5a685d6487caf6",
        form
      )
      .then((response) => {
        console.log("response URL", response.data.data.image.url);
        updateIdPhoto(response.data.data.image.url)
      })
      .catch((error) => {
        console.log("error");
      });
  }

  async function submita(referalMangerID,name,fatherName,dob,course,collage,university,
    address,mobileNumber,emailId,photo,idPhoto){
    const res = await fetch("api/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          referalMangerID:referalMangerID,
          name:name,fatherName:fatherName,dob:dob,course:course,collage:collage,university:university,
          address:address,mobileNumber:mobileNumber,emailId:emailId,photo:photo,idPhoto:idPhoto
        }),
      });
      

    if(res.ok){
        console.log(res)

    }
    else{
        console.log(res)
    }
    
  }
  let [referalMangerID,updateReferalMangerID] = useState()
  let [name,updateName] = useState()
  let [fatherName,updateFatherName] = useState()
  let [dob,updateDob] = useState()
  let [course,updateCourse] = useState()
  let [collage,updateCollage] = useState()
  let [university,updateUniversity] = useState()
  let [address,updateAddress] = useState()
  let [mobileNumber,updateMobileNumber] = useState()
  let [emailId,updateEmailID] = useState()
  let [photo,updatePhoto] = useState()
  let [idPhoto,updateIdPhoto] = useState()
  return (
    <>
      <div className=" fixed top-0 ">
        <img
          src="background.jpg"
          className="flex w-[100vw] h-[100vh] object-fill"
        />
      </div>
      <main className="ml-[5vw] p-4 mt-[5vh] bg-white rounded-xl absolute z-50 w-[90vw]">
        <section>
          <div className="p-3">
            <div>
              <label className="text-2xl font-bold ">
                <span className=" text-red-500">Internship </span> Request Form
              </label>
            </div>
            <div className="flex pt-14 w-full justify-evenly space-x-12 pl-6 pr-6 ">
              <div className="flex flex-col space-y-6 w-full">
                <TextFiled
                  Icon={AiOutlineFileSearch}
                  value={"Referal Manager ID"} onChangeFunction={updateReferalMangerID}
                />
                <TextFiled Icon={IoPersonCircleOutline} value={"Full Name"} onChangeFunction={updateName} />
                <TextFiled
                  Icon={IoPersonCircleOutline}
                  value={"Fathers Name"}
                  onChangeFunction={updateFatherName}
                />
                <TextFiled Icon={RiCake2Fill} value={"Date Of Birth"} onChangeFunction={updateDob}/>
                <TextFiled Icon={IoSchoolSharp} value={"Course"} onChangeFunction={updateCourse} />
                <TextFiled Icon={IoSchoolSharp} value={"Collage"} onChangeFunction={updateCollage} />
                <TextFiled Icon={CiBank} value={"University"} onChangeFunction={updateUniversity} />

                <div
                  onClick={() => {
                    uploadPhoto();
                  }}
                  className="flex rounded-lg h-fit w-fit p-2 px-10 space-x-10 items-center justify-start border border-zinc-700"
                >
                  <label>Upload A Photo</label>
                  <input
                    type="file"
                    name="Upload A Photo"
                    onChange={uploadPhotoImage}
                    id="uploadPhoto"
                    className="hidden"
                  />
                  <i className="text-xl ">
                    <MdOutlineFileUpload />
                  </i>
                </div>
              </div>
              <div className="flex flex-col space-y-6 w-full">
                <Adress Icon={IoLocationOutline} value={"Adress"} />
                <TextFiled Icon={FaPhoneAlt} value={"Mobile Number"} onChangeFunction={updateMobileNumber} />
                <TextFiled Icon={MdEmail} value={"Email ID"} onChangeFunction={updateEmailID}/>

                <div
                  onClick={() => {
                    uploadPhotoID();
                  }}
                  className="flex rounded-lg h-fit w-fit p-2 px-10 space-x-10 items-center justify-start border border-zinc-700"
                >
                  <label>Upload Colage Id Card</label>
                  <input
                    type="file"
                    name="Upload A Photo"
                    onChange={uploadCollageID}
                    id="uploadPhotoID"
                    className="hidden"
                  />
                  <i className="text-xl ">
                    <MdOutlineFileUpload />
                  </i>
                </div>
                <div 
                onClick={()=>{
                  submita(referalMangerID,name,fatherName,dob,course,collage,university,
                    address,mobileNumber,emailId,photo,idPhoto)
                }}
                  className=" flex justify-center items-centr bg-red-500 text-white text-xl w-fit h-fit px-4 py-2 
                                rounded-xl "
                >
                  sumbit
                </div>
              </div>
            </div>
            <div className="mt-[4vh] ml-[7vw] bg-red-600 h-[1px] w-[70vw] flex justify-center"></div>
            <div className="mt-[2vh] text-center flex flex-col ">
              <h2 className=" text-2xl ">
                Please pay the registration fees to the following Bank Account
              </h2>
              <div className="flex  pt-[2vh] ">
                <div className="flex flex-col justify-start text-start pl-[3vh]  space-y-2">
                  <label className="text-lg ">
                    Bank Name :{" "}
                    <span className="font-bold">Kotak Mahindra Bank</span>
                  </label>
                  <label className="text-lg ">
                    Account Holder Name :{" "}
                    <span className="font-bold">
                      Lorence Jayanand Raj Solay
                    </span>
                  </label>
                  <label className="text-lg ">
                    Account Number :{" "}
                    <span className="font-bold">1112395954</span>
                  </label>
                  <label className="text-lg ">
                    IFSC Code : <span className="font-bold">KKBK0007453</span>
                  </label>
                  <label className="text-lg">
                    You may even forward to 8977362436(Paytm / Phone Pay /
                    Google Pay)
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-[4vh] ml-[7vw] bg-red-600 h-[1px] w-[70vw] flex justify-center"></div>
            <div className="mt-[2vh] text-center flex flex-col ">
              <h2 className=" text-2xl ">Instructions to the candidates</h2>
              <div className="pt-[2vh] pr-[2vh]">
                <div className="flex flex-col justify-start text-start pl-[3vh] pt-[2vh]  space-y-2">
                  <label className="font-bold text-xl">
                    Step 1 :{" "}
                    <span className="font-normal">
                      Take print of this copy and sign wherever required{" "}
                    </span>
                  </label>
                  <label className="font-bold text-xl">
                    Step 2 :{" "}
                    <span className="font-normal">
                      Pay the refundable* Registration fee(Rs 500/-) into the
                      above mentioned account and take print copy of the payment
                      reciept{" "}
                    </span>
                  </label>
                  <label className="font-bold text-xl">
                    Step 3 :{" "}
                    <span className="font-normal">
                      Take a picture of your identity Card(Collage ID)
                    </span>
                  </label>
                  <label className="font-bold text-xl">
                    Step 4 :{" "}
                    <span className="font-normal">
                      Open the site agaibn and ogin with your credentials, that
                      you entered while registration
                    </span>
                  </label>
                  <label className="font-bold text-xl">
                    Step 5 :{" "}
                    <span className="font-normal">
                      upload the copies of document mentioned in above steps
                      1,2,3. Upon submit of document after login, your payment
                      shall be verified
                    </span>
                  </label>
                  <label className="font-bold text-xl">
                    Step 6 :{" "}
                    <span className="font-normal">
                      Upon successful verification, your intership Offer Letter
                      Shall be mailed to your register mail ID.
                    </span>
                  </label>
                  <label className="font-bold text-xl">
                    Step 7 :{" "}
                    <span className="font-normal">
                      Submit the uploaded document to our Manger and your
                      intership will start right away
                    </span>
                  </label>
                </div>
                <h2 className="text-xl pt-[2vh]">
                  We Welcome you to our family.
                </h2>
              </div>
            </div>
            <div className="flex justify-between mt-[6vh] pl-[4vh] pr-[4vh] ">
              <h3 className="flex text-xl">Sd /-</h3>
              <h3 className="flex text-2xl">Applications Signature</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function TextFiled({ Icon, value,onChangeFunction }) {
  return (
    <>
      <article>
        <div
          className="flex space-x-2 text-black outline-none font-md items-center  border border-zinc-700 rounded-lg
                p-2 "
        >
          <i className="text-xl ">
            <Icon />
          </i>
          <input
            className="border-none outline-none text-black"
            type="text"
            placeholder={value}
            onChange={(e)=>{onChangeFunction(e.target.value)}}
          />
        </div>
      </article>
    </>
  );
}
function Adress({ Icon, value }) {
  return (
    <>
      <article>
        <div
          className="flex space-x-2 text-black outline-none font-md items-start  border border-zinc-700 rounded-lg
                p-2 "
        >
          <i className="text-xl ">
            <Icon />
          </i>
          <textarea
            className=" overflow-hidden resi  border-none outline-none text-black"
            placeholder={value}
          />
        </div>
      </article>
    </>
  );
}
