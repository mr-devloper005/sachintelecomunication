// import React from 'react'
// import { useState } from 'react';


// function SeePost() {
  // let client = new Client()
  
  //   client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bc1d290020c462b668")
  
  //   const videos = [
    //     "/public/Video1.mp4",
    //     "/public/Video2.mp4",
    //     "/public/Video3.mp4",
    //     // Add more video URLs here
    //   ];
    
    //   const [currentIndex, setCurrentIndex] = useState(0);
    //   let touchStartY = 0;
    
    //   const handleTouchStart = (e) => {
      //     touchStartY = e.touches[0].clientY;
      //   };
      
      //   const handleTouchMove = (e) => {
        //     const touchEndY = e.touches[0].clientY;
        //     const distanceY = touchEndY - touchStartY;
        
        //     // Check for a swipe: if the distance is significant, we consider it a swipe
        //     if (Math.abs(distanceY) > 50) {
          //       if (distanceY > 0) {
            //         // Swiped down - show previous video
            //         setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
            //       } else {
              //         // Swiped up - show next video
              //         setCurrentIndex((prevIndex) => (prevIndex < videos.length - 1 ? prevIndex + 1 : prevIndex));
              //       }
              //     }
              //   };
              
              
              //   return (
//     <>

// <div
//       style={{ height: '100vh', overflow: 'hidden' }}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//     >
//       <video
//         width="100%"
//         height="100%"
//         controls
//         autoPlay
//         loop
//         muted
//         style={{ objectFit: 'cover' }}
//       >
//         <source src={videos[currentIndex]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>

//     </>
//   )
// }

// export default SeePost


// import { Client, Storage,Databases } from 'appwrite';

// import React, { useEffect, useState } from 'react';


// function SeePost() {
//   const client = new Client();
  
//   client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bc1d290020c462b668");

//   let database = new Databases(client)
//   let storage = new Storage(client)

 

//   const videos = [
//     "/Video1.mp4",
//     "/Video2.mp4",
//     "/Video3.mp4",
      
//       ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [touchStartY, setTouchStartY] = useState(0);

//   const handleTouchStart = (e) => {
//     setTouchStartY(e.touches[0].clientY);
//     console.log("Touch Start Y:", e.touches[0].clientY);
//   };
//   const handleTouchEnd = (e) => {
//     const touchEndY = e.changedTouches[0].clientY;
//     const distanceY = touchEndY - touchStartY;
//     console.log("Touch End Y:", touchEndY);
//     console.log("Distance Y:", distanceY);
  
//     if (Math.abs(distanceY) > 50) {
//       if (distanceY > 0) {
//         console.log("Swiped down - show previous video");
//         setCurrentIndex((prevIndex) => {
//           const newIndex = prevIndex > 0 ? prevIndex - 1 : prevIndex;
//           console.log("New Index (down):", newIndex);
//           return newIndex;
//         });
//       } else {
//         console.log("Swiped up - show next video");
//         setCurrentIndex((prevIndex) => {
//           const newIndex = prevIndex < videos.length - 1 ? prevIndex + 1 : prevIndex;
//           console.log("New Index (up):", newIndex);
//           return newIndex;
//         });
//       }
//     }
//   };

//   let [data,setData] = useState([])

//    useEffect(()=>{
    
//      async function  fetchData (){
//       try{

//         let response = await database.listDocuments("66bc1d7b002d58cc9878","66c6050b001d93c50215")

//         setData(response.documents)
// }catch(e){
//       console.error("error in fetching data",e)
//     }
//       }

//       fetchData()
    
//    },[])



//    useEffect(()=>{
//     async function fetchFile (){


//       try{
//         let response = await storage.getFileView('66c595cc00017a8688f3')
//       }catch(e){
//         console.error("error in fetching File",e)
//       }
//     }
//    },[])
   

//   return (
//     <div
//       style={{ height: '100vh', overflow: 'hidden' }}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       <video
//       key={currentIndex}
//         width="100%"
//         height="100%"
//         controls
//         autoPlay
//         loop
//         muted
//         style={{ objectFit: 'cover' }}
//       >
//         <source src={videos[currentIndex]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

// export default SeePost;


import React, { useEffect, useState } from 'react';
import { Client, Storage, Databases } from 'appwrite';

function SeePost() {
  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bc1d290020c462b668");

  const databases = new Databases(client);
  const storage = new Storage(client);

  const [data, setData] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  // Step 1: Fetch Data from Database
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await databases.listDocuments("66bc1d7b002d58cc9878", "66c6050b001d93c50215");
        setData(response.documents); // Store documents
      } catch (e) {
        console.error("Error in fetching data", e);
      }
    }
    fetchData();
  }, []);

  // Step 2: Fetch Video File from Storage
  useEffect(() => {
    async function fetchFile() {
      if (data.length > 0) {
        try {
          const currentFileId = data[currentIndex].fileId; // Get fileId from the current document
          let response = await storage.getFileView('66c595cc00017a8688f3', currentFileId);
          setVideoUrl(response.href); // Set the video URL
        } catch (e) {
          console.error("Error in fetching file", e);
        }
      }
    }
    fetchFile();
  }, [currentIndex, data]);

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const distanceY = touchEndY - touchStartY;

    if (Math.abs(distanceY) > 50) {
      if (distanceY > 0) {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      } else {
        setCurrentIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex));
      }
    }
  };

  return (
    <div
      style={{ height: '100vh', overflow: 'hidden' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {data.length > 0 && videoUrl ? (
        <div>
          <h1>{data[currentIndex].title}</h1>
          <p>{data[currentIndex].description}</p>
          <video
            key={currentIndex}
            width="100%"
            height="100%"
            controls
            autoPlay
            loop
            muted
            style={{ objectFit: 'cover' }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SeePost;



