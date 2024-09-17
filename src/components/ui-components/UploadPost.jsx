// import React, { useState } from 'react'
// import { Client, Storage,Databases } from 'appwrite';

// function UploadPost() {
//   let client = new Client()

//     client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bc1d290020c462b668")
//   let storage = new Storage(client)
//   let database = new Databases(client)

//   let [input,setInput] = useState()
//   let [title,setTitle] = useState()
//   let [description,setDescription] = useState()
  
//     let createFile = async()=>{
//       try{
//         let response = await storage.createFile("66c595cc00017a8688f3","unique()",input)

//         let fileId = response.$id




// createDocuments(fileId)
//       }catch(e){
//         console.log("Error uploading file:", e);
//       }
//     }


//     let createDocuments = async (fileId)=>{
      
//       const data = {
//           title: title,
//           description: description,
//           fileId: fileId
//         };

//       try{
//         if (!title || !description || !fileId) {
//           throw new Error("All fields are required");
//         }

        

//          await  database.createDocument("66bc1d7b002d58cc9878","66c6050b001d93c50215","unique()",data)

//          console.log("file created succesfully");
         
//       }catch(e){
//         console.log("error in create documents", e)
//       }
   
//       console.log("hello")
//     }
    
    

//   input && console.log(input)
//   return (

//     <>
//     <div className='w-full h-full flex justify-center items-center flex-col gap-6'>
//     {/* <input  onChange={(e)=>{setInput(prev=>e.target.value)}} className='w-1/2 h-5' placeholder='+' type="file" /> */}

//     <label className="w-12 h-12 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-full cursor-pointer hover:bg-gray-200">
//         <span className="text-xl text-gray-500">+</span>
//         <input type="file" className="hidden" onChange={(e) => setInput(prev => e.target.files[0])} />
//     </label>
//     <input  type="text" onChange={(e)=>{setTitle(prev=>e.target.value)}} placeholder='Enter your title' className=''/>
//     <textarea onChange={(e)=>{setDescription(prev=>e.target.value)}} maxLength={1000} placeholder='enter your description' className='w-1/6 h-20'></textarea>

//     <button onClick={createFile} className='bg-white rounded-xl h-7 w-40'>Add post</button>

//     </div>
    
//     </>
//   )
// }

// export default UploadPost




// import React, { useState } from 'react';
// import { Client, Storage, Databases } from 'appwrite';

// function UploadPost() {
//   const client = new Client();
//   client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bc1d290020c462b668");
//   const storage = new Storage(client);
//   const database = new Databases(client);

//   const [input, setInput] = useState();
//   const [preview, setPreview] = useState(); // Preview state
//   const [title, setTitle] = useState();
//   const [description, setDescription] = useState();

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setInput(file);

//     if (file) {
//       // Create a preview URL for images
//       if (file.type.startsWith('image/')) {
//         const filePreviewUrl = URL.createObjectURL(file);
//         setPreview(<img src={filePreviewUrl} alt="Preview" className="w-12 h-12 object-cover rounded-full" />);
//       } else {
//         // If not an image, show file name or icon
//         setPreview(<span className="text-sm">{file.name}</span>);
//       }
//     }
//   };

//   const createFile = async () => {
//     try {
//       let response = await storage.createFile("66c595cc00017a8688f3", "unique()", input);
//       let fileId = response.$id;
//       createDocuments(fileId);
//     } catch (e) {
//       console.log("Error uploading file:", e);
//     }
//   };

//   const createDocuments = async (fileId) => {
//     const data = {
//       title: title,
//       description: description,
//       fileId: fileId,
//     };

//     try {
//       if (!title || !description || !fileId) {
//         throw new Error("All fields are required");
//       }

//       await database.createDocument("66bc1d7b002d58cc9878", "66c6050b001d93c50215", "unique()", data);
//       console.log("File created successfully");
//     } catch (e) {
//       console.log("Error in creating document", e);
//     }
//   };

//   return (
//     <>
//       <div className='w-full h-screen flex justify-center items-center flex-col gap-6'>

//         <label className="w-12 h-12 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-full cursor-pointer hover:bg-gray-200">
//           {preview || <span className="text-xl text-gray-500">+</span>}
//           <input type="file" className="hidden" onChange={handleFileChange} />
//         </label>
//         <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Enter your title' className='' />
//         <textarea onChange={(e) => setDescription(e.target.value)} maxLength={1000} placeholder='Enter your description' className='w-1/6 h-20'></textarea>
//         <button onClick={createFile} className='bg-white rounded-xl h-7 w-40 active:scale-90'>Add post</button>
//       </div>
//     </>
//   );
// }

// export default UploadPost;






import React, { useState } from 'react';
import { Client, Storage, Databases } from 'appwrite';

function UploadPost() {
  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bc1d290020c462b668");
  const storage = new Storage(client);
  const database = new Databases(client);

  const [input, setInput] = useState();
  const [preview, setPreview] = useState(); // Preview state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadStatus, setUploadStatus] = useState(''); // New state for upload status

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setInput(file);
    setErrorMessage(''); // Reset error message when file changes

    if (file) {
      // Video preview
      if (file.type.startsWith('video/')) {
        const videoPreviewUrl = URL.createObjectURL(file);
        setPreview(
          <video className="w-full h-full object-cover" controls>
            <source src={videoPreviewUrl} type={file.type} />
            Your browser does not support the video tag.
          </video>
        );
      } else if (file.type.startsWith('image/')) {
        // Image preview
        const filePreviewUrl = URL.createObjectURL(file);
        setPreview(<img src={filePreviewUrl} alt="Preview" className="w-full h-full object-cover" />);
      } else {
        // If not an image or video, show file name or icon
        setPreview(<span className="text-sm">{file.name}</span>);
      }
    }
  };

  const createFile = async () => {
    if (!title || !description || !input) {
      setErrorMessage('All fields are required');
      return;
    }

    try {
      setUploadStatus('Uploading...'); // Show "Uploading..." when upload starts
      let response = await storage.createFile("66c595cc00017a8688f3", "unique()", input);
      let fileId = response.$id;

      setUploadStatus('Uploaded'); // Show "Uploaded" when upload is complete
      createDocuments(fileId);
    } catch (e) {
      console.log("Error uploading file:", e);
      setUploadStatus('Upload failed'); // Show "Upload failed" if there's an error
    }
  };

  const createDocuments = async (fileId) => {
    const data = {
      title: title,
      description: description,
      fileId: fileId,
    };

    try {
      if (!title || !description || !fileId) {
        throw new Error("All fields are required");
      }

      await database.createDocument("66bc1d7b002d58cc9878", "66c6050b001d93c50215", "unique()", data);
      console.log("File created successfully");
    } catch (e) {
      console.log("Error in creating document", e);
    }
  };

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center flex-col gap-6'>
        
        {/* Updated Preview Box */}
        <label className="w-64 h-36 flex items-center justify-center border-2 border-dashed border-gray-400 cursor-pointer hover:bg-gray-200">
          {preview || <span className="text-xl text-gray-500">+</span>}
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>

        {/* Title Input */}
        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Enter your title' className='w-64 sm:w-1/3 md:w-1/4 xl:w-1/5 h-14 pl-3 font-bold rounded-xl' />
        
        {/* Description Input */}
        <textarea onChange={(e) => setDescription(e.target.value)} maxLength={1000} placeholder='Enter your description' className='w-64 sm:w-1/3 md:w-1/4 xl:w-1/5 h-20 pt-3 rounded-xl pl-3 font-bold'></textarea>

        {/* Submit Button */}
        <button onClick={createFile} className='bg-white font-bold rounded-xl h-12 w-40 active:scale-90'>Add post</button>

        {/* Upload Status */}
        {uploadStatus && <p className="text-blue-500 text-sm mt-2">{uploadStatus}</p>}

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
      </div>
    </>
  );
}

export default UploadPost;
