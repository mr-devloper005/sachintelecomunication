// import React, { useEffect, useState } from 'react'



// import { Client,Storage,Databases,ID } from 'appwrite';

// let client = new Client()


// client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bc1d290020c462b668")

// let database = new Databases(client)
// let storage = new Storage(client)    

// function CurrentStock() {
  
//   let [data,setData] = useState()
  

//   useEffect(()=>{
// async function fetchFile(){

//   try {

//    let response =  await database.listDocuments("66bc1d7b002d58cc9878","66cca883000abcc8bdfe")
//     setData(response.documents)



//   } catch (error) {

//     console.log("error in fetching file",error);
    
    
//   }


// }
// fetchFile()
//   },[])
//   return (
//     <div className='w-full h-full bg-slate-600 p-10'>
//   <div className='w-1/6 h-1/2 rounded-lg bg-pink-200'><img src="apple-iphone-14.jpg" className='h-1/2 w-full rounded-lg' alt="" />
  
//   <div>
    
//     <span className=''>price-120000</span>
//     </div></div>
  

      
//     </div>
//   )
// }

// export default CurrentStock




// import React, { useEffect, useState } from 'react';
// import { Client, Databases } from 'appwrite';

// // Initialize Appwrite client
// const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("66bc1d290020c462b668");

// const database = new Databases(client);

// function CurrentStock() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // Fetch documents
//         const response = await database.listDocuments("66bc1d7b002d58cc9878", "66cca883000abcc8bdfe");
//         setData(response.documents);
//       } catch (error) {
//         console.log("Error in fetching data", error);
//       }
//     }
//     fetchData();
//   }, []);

//   const generateFileUrl = (fileId) => {
//     // Construct the file URL using the file ID
//     return `https://cloud.appwrite.io/v1/storage/buckets/66ccad43002d4b8e7360/files/${fileId}/view`;
//   };

//   return (
//     <div className='w-full h-full bg-slate-600 p-10'>
//       <div className='flex flex-wrap gap-5'>
//         {data.map((item) => (
//           <div key={item.$id} className='w-1/6 h-1/2 rounded-lg bg-pink-200'>
//             {item.fileId ? (
//               <img src={generateFileUrl(item.fileId)} className='h-1/2 w-full rounded-lg' alt={item.Modelname} />
//             ) : (
//               <div className='h-1/2 w-full bg-gray-300 rounded-lg flex items-center justify-center'>
//                 <span>No Image</span>
//               </div>
//             )}
//             <div>
//               <span className='block'>Price: {item.price}</span>
//               <span className='block'>Model: {item.Modelname}</span>
//               <span className='block'>Specification 1: {item.spec1}</span>
//               <span className='block'>Specification 2: {item.spec2}</span>
//               <span className='block'>Specification 3: {item.spec3}</span>
//               <span className='block'>Specification 4: {item.spec4}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CurrentStock;


// import React, { useEffect, useState } from 'react';
// import { Client, Databases, Storage } from 'appwrite';
// import { NavLink } from 'react-router-dom';

// // Initialize Appwrite client
// const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("66bc1d290020c462b668");


//   // https://appwrite.my-app.com/v1
// const database = new Databases(client);
// const storage = new Storage(client);

// function CurrentStock() {
//   const [dataWithImages, setDataWithImages] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // Fetch documents
//         const response = await database.listDocuments("66bc1d7b002d58cc9878","66cca883000abcc8bdfe");

//         // Fetch images and create a new array with image URLs
//         const documentsWithImages = response.documents.map((item) => {
//           if (item.fileId) {
//             // Generate a direct URL for the file
//             const fileURL = storage.getFileView("66ccad43002d4b8e7360", item.fileId);
//             console.log(item);
            
            
//             // Return a new object with all original data and the image URL
//             return { ...item, imageUrl: fileURL };
//           }
//           return item; // Return the item if there's no fileId
//         });

//         setDataWithImages(documentsWithImages); // Set state with new data array

//       } catch (error) {
//         console.log("Error in fetching data", error);
//       }
//     }

//     fetchData();
//   },[]);

//   return (
//     // <div className='w-full min-h-screen bg-slate-600 p-10'>
//     //   <div className='flex flex-wrap gap-5'>
//     //     {dataWithImages.map((item) => (
//     //       <div key={item.$id} className='w-1/6 h-1/2 rounded-lg bg-pink-200'>
//     //         {item.imageUrl ? (
//     //           <img src={item.imageUrl} className='h-1/2 w-full rounded-lg' alt={item.Modelname} />
//     //         ) : (
//     //           <div className='h-1/2 w-full bg-gray-300 rounded-lg flex items-center justify-center'>
//     //             <span>No Image</span>
//     //           </div>
//     //         )}
//     //         <div>
//     //           <span className='block'>Price: {item.price}</span>
//     //           <span className='block'>Model: {item.Modelname}</span>
//     //           <span className='block'>Specification 1: {item.spec1}</span>
//     //           <span className='block'>Specification 2: {item.spec2}</span>
//     //           <span className='block'>Specification 3: {item.spec3}</span>
//     //           <span className='block'>Specification 4: {item.spec4}</span>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>



// // <div className='w-full min-h-screen bg-gray-200 p-5'>
// // <h1 className='font-bold text-center text-4xl'>Products</h1>

// //   <div className='grid mt-5 grid-cols-1 h-96 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'> {/* gap-2 for spacing */}
// //     {dataWithImages.map((item) => (
// //       <div key={item.$id} className='bg-white rounded-lg h-96 w-full'>
// //         {item.imageUrl ? (
// //           <img src={item.imageUrl} className='h-60 w-full rounded-lg' alt={item.Modelname} />
// //         ) : (
// //           <div className=' w-full bg-gray-300 rounded-lg flex items-center justify-center'>
// //             <span>No Image</span>
// //           </div>
// //         )}
// // <div className='p-4 h-40  grid grid-cols-2 gap-4'> {/* 2 columns with gap */}
// //   <span className='block'>Price: {item.price}</span>
// //   <span className='block'>Model: {item.Modelname}</span>
// //   <span className='block pt-1 bg-gray-300 w-32 pl-4 rounded-xl items-center justify-center'> {item.spec1}</span>
// //   <span className='block pt-1 bg-gray-300 w-32 pl-4 rounded-xl items-center justify-center'> {item.spec2}</span>
// //   <span className='block pt-1 bg-gray-300 w-32 pl-4 rounded-xl items-center justify-center'> {item.spec3}</span>
// //   <span className='block pt-1 bg-gray-300 w-32 pl-4 rounded-xl items-center justify-center'>  {item.spec4}</span>
// // </div>


// //       </div>
// //     ))} 
// //   </div>
// // </div>


// <div className='w-full min-h-screen dark:bg-black bg-gray-200 p-5'>
//   <h1 className='font-bold text-center text-4xl dark:text-white  mb-5'>Products</h1>

//   <div className='grid mt-5 grid-cols-1 h-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
//     {dataWithImages.map((item) => (
//       <NavLink to={'/contactus'} key={item.$id} className='bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden'>
//         {item.imageUrl ? (
//           <img
//             src={item.imageUrl}
//             className='h-72 w-full object-cover' // Adjusted height for better visibility
//             alt={item.ModelName}
//           />
//         ) : (
//           <div className='h-80 w-full bg-gray-300 flex items-center justify-center'>
//             <span>No Image</span>
//           </div>
//         )}
//         <div className='p-4 dark:text-white'>
//           <h2 className='text-xl font-semibold mb-2'>{item.ModelName}</h2> {/* Added margin */}
//           <div className='grid grid-cols-2 gap-4'>
//             <span className='block'>Price: {item.price}</span>
//             <span className='block'>Model: {item.ModelName}</span>
//             <span className='block pt-1 dark:bg-gray-600 bg-gray-300 w-full rounded-xl p-2'>{item.spec1}</span>
//             <span className='block pt-1 dark:bg-gray-600 bg-gray-300 w-full rounded-xl p-2'>{item.spec2}</span>
//             <span className='block pt-1 dark:bg-gray-600 bg-gray-300 w-full rounded-xl p-2'>{item.spec3}</span>
//             <span className='block pt-1 dark:bg-gray-600 bg-gray-300 w-full rounded-xl p-2'>{item.spec4}</span>
//           </div>
//         </div>
//       </NavLink>
//     ))}
//   </div>
// </div>



//   );
// }

// export default CurrentStock;




import React, { useEffect, useState } from 'react';
import { Client, Databases, Storage } from 'appwrite';
import { NavLink } from 'react-router-dom';

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66bc1d290020c462b668");

const database = new Databases(client);
const storage = new Storage(client);

// Loader Component
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
};

function CurrentStock() {
  const [dataWithImages, setDataWithImages] = useState([]);
  const [loading, setLoading] = useState(true); // Loader ke liye state

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch documents
        const response = await database.listDocuments("66bc1d7b002d58cc9878", "66cca883000abcc8bdfe");

        // Fetch images and create a new array with image URLs
        const documentsWithImages = response.documents.map((item) => {
          if (item.fileId) {
            // Generate a direct URL for the file
            const fileURL = storage.getFileView("66ccad43002d4b8e7360", item.fileId);
            return { ...item, imageUrl: fileURL };
          }
          return item; // Return the item if there's no fileId
        });

        setDataWithImages(documentsWithImages); // Set state with new data array
        setLoading(false); // Data load ho gaya, loader ko remove karo
      } catch (error) {
        console.log("Error in fetching data", error);
        setLoading(false); // Error ho jaye to bhi loader remove karo
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loader />; // Agar loading ho raha hai, to loader dikhao
  }

  return (
    <div className='w-full min-h-screen dark:bg-black bg-gray-200 p-5'>
      <h1 className='font-bold text-center text-4xl dark:text-white mb-5'>Products</h1>

      <div className='grid mt-5 grid-cols-1 h-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {dataWithImages.map((item) => (
          <NavLink to={'/contactus'} key={item.$id} className='bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden'>
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                className='h-72 w-full object-cover' // Adjusted height for better visibility
                alt={item.ModelName}
              />
            ) : (
              <div className='h-80 w-full bg-gray-300 flex items-center justify-center'>
                <span>No Image</span>
              </div>
            )}
            <div className='p-4 dark:text-white'>
              <h2 className='text-xl font-semibold mb-2'>{item.ModelName}</h2> {/* Added margin */}
              <div className='grid grid-cols-2 gap-4'>
                <span className='block'>Price: {item.price}</span>
                <span className='block'>Model: {item.ModelName}</span>
                <span className='block pt-1 dark:bg-gray-600 bg-gray-300 w-full rounded-xl p-2'>{item.spec1}</span>
                <span className='block pt-1 dark:bg-gray-600 bg-gray-300 w-full rounded-xl p-2'>{item.spec2}</span>
                <span className='block pt-1 dark:bg-gray-600 bg-gray-300 w-full rounded-xl p-2'>{item.spec3}</span>
                <span className='block pt-1 dark:bg-gray-600 bg-gray-300 w-full rounded-xl p-2'>{item.spec4}</span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default CurrentStock;
