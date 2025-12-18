// import React from 'react'
// import useGetAll from '../../../../hooks/UseGetAll'

// function OurCommand () {
//   const { data, isLoading, isError } = useGetAll('/OurCommand', ['ourcommand'])

//   if (isLoading) {
//     return (
//       <div className='w-full h-[70vh] flex items-center justify-center text-xl text-blue-400'>
//         Loading...
//       </div>
//     )
//   }

//   if (isError) {
//     return (
//       <div className='w-full h-[70vh] flex items-center justify-center text-xl text-red-500'>
//         Failed to load data
//       </div>
//     )
//   }

//   return (
//     <div className='w-full min-h-screen px-4 md:px-12 py-16 text-blue-900'>
//       <h1 className='text-3xl md:text-5xl font-bold text-center mb-12 text-blue-700'>
//         Our Command
//       </h1>

//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
//         {data?.map(item => (
//           <div
//             key={item.id}
//             className='bg-white rounded-2xl p-5 shadow-lg border border-blue-200 hover:shadow-xl hover:scale-[1.02] duration-300'
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className='w-full h-56 object-cover rounded-xl mb-5'
//             />

//             <h2 className='text-xl font-semibold text-blue-700'>
//               {item.name}
//             </h2>
//             <p className='text-blue-500 text-sm mb-2'>{item.role}</p>

//             <p className='text-blue-800 text-sm'>{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default OurCommand
// import React from "react";
// import useGetAll from "../../../../hooks/UseGetAll";

// const FALLBACK_AVATAR =
//   "https://cdn-icons-png.flaticon.com/512/149/149071.png";

// function OurCommand() {
//   const { data, isLoading, isError } = useGetAll("/OurCommand", ["ourcommand"]);

//   if (isLoading) {
//     return (
//       <div className="w-full h-[60vh] flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="w-full h-[60vh] flex items-center justify-center text-red-500">
//         Error
//       </div>
//     );
//   }

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-20">
//       <h1 className="text-5xl font-bold mb-16">Our Team</h1>

//       {/* CARD GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {data?.map((item) => (
//           <div
//             key={item.id}
//             className="border rounded-2xl p-6 hover:shadow-xl transition"
//           >
//             {/* IMAGE */}
//             <img
//               src={item.image || FALLBACK_AVATAR}
//               onError={(e) => (e.target.src = FALLBACK_AVATAR)}
//               alt={item.name}
//               className="w-full h-[320px] object-cover rounded-xl mb-6"
//             />

//             {/* NAME */}
//             <h2 className="text-2xl font-bold mb-2">
//               {item.name}
//             </h2>

            

//             {/* DESCRIPTION */}
//             <p className="text-sm text-gray-700 leading-relaxed">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default OurCommand;


import React from "react";
import useGetAll from "../../../../hooks/UseGetAll";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const FALLBACK_AVATAR =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png";

function OurCommand() {
  const { data, isLoading, isError } = useGetAll("/OurCommand", ["ourcommand"]);

  if (isLoading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center text-red-500">
        Error
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-16">Our Team</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl p-6 hover:shadow-xl transition flex flex-col"
          >
            
            <img
              src={item.image || FALLBACK_AVATAR}
              onError={(e) => (e.currentTarget.src = FALLBACK_AVATAR)}
              alt={item.name}
              className="w-full h-[320px] object-cover rounded-xl mb-6"
            />

            
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>

            
            <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
              {item.description}
            </p>

         
            <div className="flex justify-between gap-4 mt-auto">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2
                             border rounded-full hover:bg-black hover:text-white transition"
                >
                  
                  <FaGithub /> GitHub
                </a>
              )}

              {item.ContactTelegramUs && (
                <a
                  href={item.ContactTelegramUs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2
                             border rounded-full hover:bg-blue-500 hover:text-white transition"
                >
                  
                  <FaTelegram /> Telegram
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurCommand;
