// import React from 'react'

// function MobileStock() {
//   return (
//     <>
// <div className='w-full h-full flex justify-center items-center bg-gray-600'>

//   <div className='w-1/2 h-1/2 bg-black flex flex-col gap-5 justify-center items-center'>
//   <input type="file" placeholder='image' />
//   <input  placeholder='Phone Name' className='w-1/2 h-1/6' />
//   <input type="number" placeholder='Phone price' className='w-1/2 h-1/6' />
//   <div className='w-1/2 h-1/6 grid grid-cols-2 gap-4'><input placeholder='specification 1' type="text" className='w-full h-full ' /><input placeholder='specification 2' type="text" className='w-full h-full '/><input placeholder='specification 3' type="text" className='w-full h-full '/><input placeholder='specification 4' type="text" className='w-full h-full '/></div>
  
//   </div>
  
// </div>

//     </>
//   )
// }

// export default MobileStock


// import React, { useState } from 'react';

// import { Client,Storage,Databases,ID } from 'appwrite';

// let client = new Client()


// client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bc1d290020c462b668")

// let database = new Databases(client)
// let storage = new Storage(client)    


// function MobileStock() {
//   const [image, setImage] = useState(null);
//   const [fileId,setFileId] = useState(ID.unique())
//   let [modelName,setModelName] = useState()
//   let [number,setNumber] = useState()
//   let [spec1,setSepc1] = useState()
//   let [spec2,setSepc2] = useState()
//   let [spec3,setSepc3] = useState()
//   let [spec4,setSepc4] = useState()

//   const handleImageChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setImage(selectedFile); // Store the File object
//     }
//   };


//   const handelCreateFile=async ()=>{

//     let data = {
//       ModelName:modelName,
//       fileId:fileId,
//       price:number,
//       spec1:spec1,
//       spec2:spec2,
//       spec3:spec3,
//       spec4:spec4

//     }

//     try{
//       await  storage.createFile("66ccad43002d4b8e7360",fileId,image,[])


//       await database.createDocument("66bc1d7b002d58cc9878","66cca883000abcc8bdfe","unique()",data)

//       console.log("file created succesfully");
      
//     }catch(e){
//    console.log("error in uploading file",e)
//     }
//   }


//   return (
//     <div className='w-full min-h-screen flex justify-center items-center '>
//       <div className='w-full min-h-screen bg-black  flex flex-col gap-5 justify-center items-center'>
//         {!image ? (
//           <input type="file" onChange={handleImageChange} />
//         ) : (
//           <img src={image} alt="Selected" className='w-1/2 h-1/6 object-contain' />
//         )}
//         <input placeholder='Phone Name' onChange={(e)=>{setModelName(e.target.value)}} className='w-1/2 h-1/6 text-xl pl-4' />
//         <input type="number" placeholder='Phone price' onChange={(e)=>{setNumber(e.target.value)}} className='w-1/2 h-1/6 text-xl pl-4' />
//         <div className='w-1/2 h-1/6 grid grid-cols-2 gap-4'>
//           <input placeholder='specification 1' onChange={(e)=>{setSepc1(e.target.value)}} type="text" className='w-full h-full text-xl pl-4' />
//           <input placeholder='specification 2' onChange={(e)=>{setSepc2(e.target.value)}} type="text" className='w-full h-full text-xl pl-4' />
//           <input placeholder='specification 3' onChange={(e)=>{setSepc3(e.target.value)}} type="text" className='w-full h-full text-xl pl-4' />
//           <input placeholder='specification 4' onChange={(e)=>{setSepc4(e.target.value)}} type="text" className='w-full h-full text-xl pl-4' />
//         </div>

//         <button onClick={handelCreateFile} className='bg-slate-400 h-1/6 w-1/5 active:scale-90'>submit</button>
//       </div>
//     </div>
//   );
// } 


// export default MobileStock;
import React, { useState, useRef } from 'react';
import {Client, Storage, Databases, ID} from 'appwrite';

let client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bc1d290020c462b668");

let database = new Databases(client);
let storage = new Storage(client);

function MobileStock() {
  const [file, setFile] = useState(null); 
  const [filePreview, setFilePreview] = useState(null); 
  const fileInputRef = useRef(null); 
  const [fileId, setFileId] = useState(ID.unique());
  const [modelName, setModelName] = useState("");
  const [number, setNumber] = useState("");
  const [spec1, setSepc1] = useState("");
  const [spec2, setSepc2] = useState("");
  const [spec3, setSepc3] = useState("");
  const [spec4, setSepc4] = useState("");
  const [errors, setErrors] = useState({}); // Store error messages
  const [uploadStatus, setUploadStatus] = useState(""); // For showing upload messages

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  const openFileSelector = () => {
    fileInputRef.current.click();
  };

  const validateFields = () => {
    let errors = {};
    if (!modelName) errors.modelName = "Please fill this input field";
    if (!number) errors.number = "Please fill this input field";
    if (!spec1) errors.spec1 = "Please fill this input field";
    if (!spec2) errors.spec2 = "Please fill this input field";
    if (!spec3) errors.spec3 = "Please fill this input field";
    if (!spec4) errors.spec4 = "Please fill this input field";
    if (!file) errors.file = "Please select a file";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreateFile = async () => {

    if (!validateFields()) {
      return; // Stop execution if validation fails
    }

    setUploadStatus("Uploading..."); // Show uploading message

    let data = {
      ModelName: modelName,
      fileId: fileId,
      price: number,
      spec1: spec1,
      spec2: spec2,
      spec3: spec3,
      spec4: spec4,
    };

    try {
      await storage.createFile("66ccad43002d4b8e7360", fileId, file, []);
      await database.createDocument("66bc1d7b002d58cc9878", "66cca883000abcc8bdfe", "unique()", data);
      setUploadStatus("Uploaded successfully"); // Show success message
    } catch (e) {
      console.log("Error in uploading file", e);
      setUploadStatus("Error uploading file"); // Show error message if any
    }

    setModelName("")
    setNumber("")
    setSepc1("")
    setSepc2("")
    setSepc3("")
    setSepc4("")
    setErrors("")
    setFilePreview("")

  };

  return (
    <div className='w-full min-h-screen gap-8 pt-5 flex flex-col items-center justify-center'>

      <div className="relative w-3/4 h-80 bg-gray-200 dark:bg-zinc-900 rounded-md overflow-hidden flex justify-center items-center">
        {!filePreview ? (
          <div onClick={openFileSelector} className="cursor-pointer flex flex-col justify-center items-center text-gray-500">
            +
            <p>Select File</p>
          </div>
        ) : (
          file.type.startsWith('image/') ? (
            <img src={filePreview} alt="Selected" className="object-cover w-full h-full" />
          ) : file.type.startsWith('video/') ? (
            <video controls src={filePreview} className="object-cover w-full h-full" />
          ) : (
            <p>{file.name}</p>
          )
        )}

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      {errors.file && <p className="text-red-500">{errors.file}</p>} {/* File error */}

      {/* Form Inputs */}
      <div className=' flex flex-col justify-center items-center gap-3 w-full h-1/3'>
  
  {/* Phone Name */}
  <div className="w-3/4">
    <input
      placeholder='Phone Name'
      value={modelName}
      onChange={(e) => setModelName(e.target.value)}
      className='w-full h-16 rounded-xl text-xl pl-4 mt-5'
    />
    {/* Reserve space for error messages */}
    <p className="text-red-500 h-5">{errors.modelName}</p>
  </div>

  {/* Phone Price */}
  <div className="w-3/4">
    <input
      type="number"
      placeholder='Phone price'
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      className='w-full h-16 rounded-xl text-xl pl-4'
    />
    <p className="text-red-500 h-5">{errors.number}</p>
  </div>

  {/* Specifications */}
  <div className='w-full h-32 p-3 grid grid-cols-2 gap-4'>
    <div className="w-full">
      <input
        required
        placeholder='specification 1'
        value={spec1}
        onChange={(e) => setSepc1(e.target.value)}
        type="text"
        className='w-full rounded-xl h-full text-xl pl-4'
      />
      <p className="text-red-500 h-5">{errors.spec1}</p>
    </div>

    <div className="w-full">
      <input
        required
        placeholder='specification 2'
        value={spec2}
        onChange={(e) => setSepc2(e.target.value)}
        type="text"
        className='w-full rounded-xl h-full text-xl pl-4'
      />
      <p className="text-red-500 h-5">{errors.spec2}</p>
    </div>

    <div className="w-full">
      <input
        required
        placeholder='specification 3'
        value={spec3}
        onChange={(e) => setSepc3(e.target.value)}
        type="text"
        className='w-full rounded-xl h-full text-xl pl-4'
      />
      <p className="text-red-500 h-5">{errors.spec3}</p>
    </div>

    <div className="w-full">
      <input
        required
        placeholder='specification 4'
        value={spec4}
        onChange={(e) => setSepc4(e.target.value)}
        type="text"
        className='w-full rounded-xl h-full text-xl pl-4'
      />
      <p className="text-red-500 h-5">{errors.spec4}</p>
    </div>
  </div>
</div>

      

      

      <button
        onClick={handleCreateFile}
        className='bg-cyan-600 h-16 font-extrabold text-2xl rounded-xl w-28 active:scale-90 '
      >
        Submit
      </button>

      {/* Upload Status Message */}
      
      <div>{uploadStatus && <p className="text-green-500 mt-3">{uploadStatus}</p>}</div>
    </div>
  );
}

export default MobileStock;
