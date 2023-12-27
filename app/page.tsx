import { AiOutlineFileSearch } from "react-icons/ai"
import { IoPersonCircleOutline } from "react-icons/io5"
import { RiCake2Fill } from "react-icons/ri"
import { IoSchoolSharp } from "react-icons/io5"
import { CiBank } from "react-icons/ci"
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";

export default function Home() {



    return (
        <>
            <div className=" fixed top-0 ">
                <img src="background.jpg" className="flex w-[100vw] h-[100vh] object-fill" />
            </div>
            <main className="ml-[5vw] p-4 mt-[5vh] bg-white rounded-xl absolute z-50 w-[90vw]">
                <section>
                    <div className="p-3">
                        <div>
                            <label className="text-2xl font-bold "><span className=" text-red-500">Internship </span> Request Form</label>
                        </div>
                        <div className="flex pt-14 w-full justify-evenly space-x-12 pl-6 pr-6 ">
                            <div className="flex flex-col space-y-6 w-full">
                                <TextFiled Icon={AiOutlineFileSearch} value={"Referal Manager ID"} />
                                <TextFiled Icon={IoPersonCircleOutline} value={"Full Name"} />
                                <TextFiled Icon={IoPersonCircleOutline} value={"Father's Name"} />
                                <TextFiled Icon={RiCake2Fill} value={"Date Of Birth"} />
                                <TextFiled Icon={IoSchoolSharp} value={"Course"} />
                                <TextFiled Icon={IoSchoolSharp} value={"Collage"} />
                                <TextFiled Icon={CiBank} value={"University"} />
                                <div className="flex rounded-lg h-fit w-fit p-2 px-10 space-x-10 items-center justify-start border border-zinc-700">
                                    <label>Upload A Photo</label>
                                    <i className="text-xl " ><MdOutlineFileUpload /></i>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-6 w-full">
                                <Adress Icon={IoLocationOutline} value={"Adress"} />
                                <TextFiled Icon={FaPhoneAlt} value={"Mobile Number"} />
                                <TextFiled Icon={MdEmail} value={"Email ID"} />
                                <div className="flex rounded-lg h-fit w-fit p-2 px-10 space-x-10 items-center justify-start border border-zinc-700">
                                    <label>Upload Colage I'd Card</label>
                                    <i className="text-xl " ><MdOutlineFileUpload /></i>
                                </div>
                                <div className=" flex justify-center items-centr bg-red-500 text-white text-xl w-fit h-fit px-4 py-2 
                                rounded-xl ">
                                    sumbit
                                </div>

                            </div>
                        </div>
                        <div className="mt-[4vh] ml-[7vw] bg-red-600 h-[1px] w-[70vw] flex justify-center">
                        </div>
                        <div className="mt-[2vh] text-center flex flex-col ">
                            <h2 className=" text-2xl ">Please pay the registration fees to the following Bank Account</h2>
                            <div className="flex  pt-[2vh] ">
                                <div className="flex flex-col justify-start text-start pl-[3vh]  space-y-2">
                                    <label className="text-lg ">Bank Name : <span className="font-bold">Kotak Mahindra Bank</span></label>
                                    <label className="text-lg ">Account Holder Name : <span className="font-bold">Lorence Jayanand Raj Solay</span></label>
                                    <label className="text-lg ">Account Number : <span className="font-bold">1112395954</span></label>
                                    <label className="text-lg ">IFSC Code : <span className="font-bold">KKBK0007453</span></label>
                                    <label className="text-lg">You may even forward to 8977362436(Paytm / Phone Pay / Google Pay)</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[4vh] ml-[7vw] bg-red-600 h-[1px] w-[70vw] flex justify-center">
                        </div>
                        <div className="mt-[2vh] text-center flex flex-col ">
                            <h2 className=" text-2xl ">Instructions to the candidates</h2>
                            <div className="pt-[2vh] pr-[2vh]">
                                <div className="flex flex-col justify-start text-start pl-[3vh] pt-[2vh]  space-y-2">
                                    <label className="font-bold text-xl">Step 1 : <span className="font-normal">Take print of this copy and sign
                                        wherever required </span></label>
                                    <label className="font-bold text-xl">Step 2 : <span className="font-normal">
                                        Pay the refundable* Registration fee(Rs 500/-) into the above mentioned account and take print copy of the
                                        payment reciept </span></label>
                                    <label className="font-bold text-xl">Step 3 : <span className="font-normal">Take a picture of your identity Card(Collage ID)</span></label>
                                    <label className="font-bold text-xl">Step 4 : <span className="font-normal">Open the site agaibn and ogin with your credentials,
                                        that you entered while registration</span></label>
                                    <label className="font-bold text-xl">Step 5 : <span className="font-normal">upload the copies of document
                                        mentioned in above steps 1,2,3. Upon submit of document after login, your payment shall be verified</span></label>
                                    <label className="font-bold text-xl">Step 6 : <span className="font-normal">Upon successful verification, your intership Offer Letter Shall be
                                        mailed to your register mail ID.</span></label>
                                    <label className="font-bold text-xl">Step 7 : <span className="font-normal">Submit the uploaded document to our Manger and your intership
                                        will start right away</span></label>

                                </div>
                                <h2 className="text-xl pt-[2vh]">We Welcome you to our family.</h2>
                            </div>
                        </div>
                        <div className="flex justify-between mt-[6vh] pl-[4vh] pr-[4vh] ">
                            <h3 className="flex text-xl">Sd /-</h3>
                            <h3 className="flex text-2xl">Application's Signature</h3>
                        </div>
                    </div>

                </section>
            </main>


        </>
    )
}

function TextFiled({ Icon, value }) {
    return (
        <>
            <article>
                <div className="flex space-x-2 text-black outline-none font-md items-center  border border-zinc-700 rounded-lg
                p-2 ">
                    <i className="text-xl ">
                        <Icon />
                    </i>
                    <input className="border-none outline-none text-black" type="text" placeholder={value} />
                </div>
            </article>
        </>
    )
}
function Adress({ Icon, value }) {
    return (
        <>
            <article>
                <div className="flex space-x-2 text-black outline-none font-md items-start  border border-zinc-700 rounded-lg
                p-2 ">
                    <i className="text-xl ">
                        <Icon />
                    </i>
                    <textarea className=" overflow-hidden resi  border-none outline-none text-black" placeholder={value} />
                </div>
            </article>
        </>
    )



}