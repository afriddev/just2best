"use client";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiCake2Fill } from "react-icons/ri";
import { IoSchoolSharp } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
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
    console.log(e.target.files[0]);
    var form = new FormData();
    form.append("image", e.target.files[0]);

    axios
      .post(
        "https://api.imgbb.com/1/upload?expiration=600&key=9310914e0d6137e3ed5a685d6487caf6",
        form
      )
      .then((response) => {
        console.log("response URL", response.data.data.image.url);
        updatePhoto(response.data.data.image.url);
      })
      .catch((error) => {
        console.log("error");
      });
  }
  function uploadPhotoID() {
    document.getElementById("uploadPhotoID").click();
  }
  async function uploadCollageID(e) {
    console.log(e.target.files[0]);
    var form = new FormData();
    form.append("image", e.target.files[0]);

    axios
      .post(
        "https://api.imgbb.com/1/upload?expiration=600&key=9310914e0d6137e3ed5a685d6487caf6",
        form
      )
      .then((response) => {
        console.log("response URL", response.data.data.image.url);
        updateIdPhoto(response.data.data.image.url);
      })
      .catch((error) => {
        console.log("error");
      });
  }

  async function submita(
    referalMangerID,
    name,
    fatherName,
    dob,
    course,
    collage,
    university,
    address,
    mobileNumber,
    emailId,
    photo,
    idPhoto
  ) {
    const res = await fetch("api/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        referalMangerID: referalMangerID,
        name: name,
        fatherName: fatherName,
        dob: dob,
        course: course,
        collage: collage,
        university: university,
        address: address,
        mobileNumber: mobileNumber,
        emailId: emailId,
        photo: photo,
        idPhoto: idPhoto,
      }),
    });

    if (res.ok) {
      console.log(res);
    } else {
      console.log(res);
    }
  }
  let [referalMangerID, updateReferalMangerID] = useState();
  let [name, updateName] = useState();
  let [fatherName, updateFatherName] = useState();
  let [dob, updateDob] = useState();
  let [course, updateCourse] = useState();
  let [collage, updateCollage] = useState();
  let [university, updateUniversity] = useState();
  let [address, updateAddress] = useState();
  let [mobileNumber, updateMobileNumber] = useState();
  let [emailId, updateEmailID] = useState();
  let [photo, updatePhoto] = useState();
  let [idPhoto, updateIdPhoto] = useState();
  let [password, updatePassword] = useState();
  let [reEnterPassword, updateReEnterPassword] = useState();
  
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
            <div className="flex  items-center justify-between mt-[3vh] flex-col lg:flex lg:flex-row ">
              <div className="flex flex-col space-x-4 w-[90vw] p-4">
                <h3 className="font-bold text-2xl  ">Career</h3>
                <p className="pt-3 flexx ">
                  SocioSaints is a dynamic and innovative branding, marketing,
                  and event management company dedicated to providing
                  comprehensive and tailored solutions to enhance the visibility
                  and success of our clients. With a passion for creativity and
                  a commitment to excellence, we specialize in crafting unique
                  and memorable brand experiences that resonate with target
                  audiences and leave a lasting impression.
                </p>
              </div>
              <div>
                <img
                  src="careerImage.webp"
                  className="flex obejct-cover  pr-[6vh]  h-[30vh] w-[100vw] lg:w-[50vw] lg:h-[40vh] rounded-xl pt-8   "
                />
              </div>
            </div>
            <div className=" flex justify-between   px-10 py-4 bg-gray-100 rounded-md  p-3 m-0 text-xs
           mt-[5vh] mb-[4vh] lg:w-[60vw] " >
              <div className="flex flex-col space-y-3 text-xs w-[22vw] text-center  items-center justify-between">
                <h1 className="font-bold text-xs lg:text-xl  border-b border-black w-fit">Criteria</h1>
                <h2 className=" text-xs font-thin lg:text-xl">Eligibility</h2>
                <h2 className="text-x text-xs font-thin lg:text-xl">Duration</h2>
                <h2 className="t font-thin text-xs lg:text-xl">StiPend</h2>
                <h2 className="font-bold  text-xs lg:text-xl">Reg.Fee</h2>
                
              </div>
              <div className=" flex-col space-y-3 pl-4 w-[23vw] text-center flex items-center justify-center">
                <h1 className="font-bold text-xs lg:text-xl  border-b w-fit border-black">Organiser</h1>
                <h2 className=" text-xs font-thin lg:text-xl">MBA FINAL YEAR</h2>
                <h2 className=" text-xs font-thin lg:text-xl">100 days</h2>
                <h2 className=" text-xs font-thin lg:text-xl">10,000 /-</h2>
                <h2 className="font-bold text-xs lg:text-xl ">500 /-</h2>
                
              </div>
              <div className="flex flex-col space-y-3 pl-4 w-[23vw] text-center  items-center justify-center ">
                <h1 className="font-bold text-xs  border-b w-fit border-black lg:text-xl">Criteria</h1>
                <h2 className="text-xs font-thin lg:text-xl">GRAND FINAL YEAR</h2>
                <h2 className=" text-xs font-thin lg:text-xl">100 days</h2>
                <h2 className=" text-xs font-thin lg:text-xl">5,000 /-</h2>
                <h2 className="font-bold text-xs lg:text-xl">500 /-</h2>
                
              </div>
            </div>
            <div className="mt-8">
              <label className="text-2xl font-bold ">
                <span className=" text-red-500">Internship </span> Request Form
              </label>
            </div>
            <div className="flex  flex-col   w-full justify-evenly  pt-4 lg:flex lg:flex-row lg:space-x-10 lg:justify-between ">
              <div className="flex flex-col space-y-6 w-full lg:w-[40vw] ">
                <TextFiled
                  Icon={AiOutlineFileSearch}
                  value={"Referal Manager ID"}
                  onChangeFunction={updateReferalMangerID}
                />
                <TextFiled
                  Icon={IoPersonCircleOutline}
                  value={"Full Name"}
                  onChangeFunction={updateName}
                />
                <TextFiled
                  Icon={IoPersonCircleOutline}
                  value={"Fathers Name"}
                  onChangeFunction={updateFatherName}
                />
                <TextFiled
                  Icon={RiCake2Fill}
                  value={"Date Of Birth"}
                  onChangeFunction={updateDob}
                />
                <TextFiled
                  Icon={IoSchoolSharp}
                  value={"Course"}
                  onChangeFunction={updateCourse}
                />
                <TextFiled
                  Icon={IoSchoolSharp}
                  value={"Collage"}
                  onChangeFunction={updateCollage}
                />
                <TextFiled
                  Icon={CiBank}
                  value={"University"}
                  onChangeFunction={updateUniversity}
                />

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
              <div className="flex flex-col space-y-6 w-full  p-0 pt-4 float-start  lg:pt-0 lg:w-[40vw] ">
                <Adress Icon={IoLocationOutline} value={"Adress"} />
                <TextFiled
                  Icon={FaPhoneAlt}
                  value={"Mobile Number"}
                  onChangeFunction={updateMobileNumber}
                />
                <TextFiled
                  Icon={MdEmail}
                  value={"Email ID"}
                  onChangeFunction={updateEmailID}
                />
                <TextFiled
                  Icon={RiLockPasswordLine}
                  value={"Password"}
                  onChangeFunction={updatePassword}
                />
                <TextFiled
                  Icon={RiLockPasswordLine}
                  value={"Re Enter Password"}
                  onChangeFunction={updateReEnterPassword}
                />

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
                  onClick={() => {
                    submita(
                      referalMangerID,
                      name,
                      fatherName,
                      dob,
                      course,
                      collage,
                      university,
                      address,
                      mobileNumber,
                      emailId,
                      photo,
                      idPhoto
                    );
                  }}
                  className=" flex justify-center items-centr bg-red-500 text-white text-xl w-fit h-fit px-4 py-2 
                                rounded-xl "
                >
                  sumbit
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function TextFiled({ Icon, value, onChangeFunction }) {
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
            onChange={(e) => {
              onChangeFunction(e.target.value);
            }}
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
