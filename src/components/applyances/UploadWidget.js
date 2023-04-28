// import { useEffect, useRef } from "react"

// export const UploadWidget = () => {
//     const cloudinaryRef = useRef();
//     const widgetRef = useRef();
//     useEffect(
//     () => {
//         cloudinaryRef.current = window.cloudinary;
//         widgetRef.current = cloudinaryRef.current.createUploadWidget({
//             cloudName: "dq4w2zwr2",
//             uploadPreset: "fe_capstone"
//         }, function (error, result) {
//             if (!error && result && result.event === "success") {
//                 console.log(result.info.url)
//                 const copy = { ...applyance }
//                 copy.picture = result.info.url
//                 update(copy)
//             }
//             console.log(result.info.url);
            
//         });
//     },
//     [])

// }

// // import { Upload Widget } on the component where we want to run this