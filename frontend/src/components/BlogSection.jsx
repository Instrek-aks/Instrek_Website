// import React from "react";

// const BlogSection = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       date: { day: "22", month: "Mar" },
//       title: "SUSPENDISSE INTERDUM TORTOR AUGUE",
//       excerpt:
//         "Vivamus fringilla eu nisl non laoreet. Maecenas ac velit condimentum, condimentum ante at, sodales justo. Vivamus suscipit nunc ut condimentum feugiat. Praesent imperdiet sollicitudin pulvinar. Pellentesque interdum sem a ligula scelerisque bibendum. Donec aliquam mattis neque quis pretium. Pellentesque felis leo, consequat nec aliquet vitae, tempor nec nisl. Curabitur ultrices leo non ligula venenatis, a viverra urna pulvinar. Morbi auctor semper tellus sit amet gravida. Curabitur accumsan convallis aliquet. Proin hendrerit eros quis ultricies feugiat.",
//       meta: "March 22, 2016 | Admin | 2 Comments | Audio",
//       image:
//         "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 2,
//       date: { day: "09", month: "Mar" },
//       title: "SED GRAVIDA NEQUE MI, SED",
//       excerpt:
//         "Maecenas ac velit condimentum, condimentum ante at, sodales justo. Vivamus suscipit nunc ut condimentum feugiat. Praesent imperdiet sollicitudin pulvinar. Pellentesque interdum sem a ligula scelerisque bibendum. Donec aliquam mattis neque quis pretium. Pellentesque felis leo, consequat nec aliquet vitae, tempor nec nisl. Curabitur ultrices leo non ligula venenatis, a viverra urna pulvinar. Morbi auctor semper tellus sit amet gravida. Curabitur accumsan convallis aliquet. Proin hendrerit eros quis ultricies feugiat. Vestibulum scelerisque enim rutrum nisl blandit, eget commodo nunc ultrices. Vivamus",
//       meta: "March 09, 2016 | Audio | 2 Comments | Design",
//       isVideo: true,
//     },
//     {
//       id: 3,
//       date: { day: "28", month: "Feb" },
//       title: "SED GRAVIDA NEQUE MI, SED",
//       excerpt:
//         "Maecenas ac velit condimentum, condimentum ante at, sodales justo. Vivamus suscipit nunc ut condimentum feugiat. Praesent imperdiet sollicitudin pulvinar. Pellentesque interdum sem a ligula scelerisque bibendum. Donec aliquam mattis neque quis pretium. Pellentesque felis leo, consequat nec aliquet vitae, tempor nec nisl. Curabitur ultrices leo non ligula venenatis, a viverra urna pulvinar. Morbi auctor semper tellus sit amet gravida. Curabitur accumsan convallis aliquet. Proin hendrerit eros quis ultricies feugiat. Vestibulum scelerisque enim rutrum nisl blandit, eget commodo nunc ultrices. Vivamus",
//       meta: "February 28, 2016 | Audio | 2 Comments | Audio",
//       isAudio: true,
//       image:
//         "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="mb-16">
//           <h2 className="text-6xl font-black mb-4">
//             <span className="text-gray-800">BLOG</span>
//             <span className="text-cyan-400"> /</span>
//           </h2>
//           <div className="text-4xl font-light text-gray-300">
//             LATEST FROM
//             <br />
//             OUR BLOG
//             <span className="text-xl text-gray-400 ml-8">2016/2015/2014</span>
//           </div>
//         </div>

//         {/* Blog Posts */}
//         <div className="space-y-16">
//           {blogPosts.map((post, index) => (
//             <article key={post.id} className="group">
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 {/* Date and Content */}
//                 <div
//                   className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
//                 >
//                   <div className="flex items-start space-x-6">
//                     {/* Date Circle */}
//                     <div className="bg-pink-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-cyan-400 transition-colors duration-300">
//                       <span className="text-2xl font-bold">
//                         {post.date.day}
//                       </span>
//                       <span className="text-sm">{post.date.month}</span>
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
//                         {post.title}
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed mb-6">
//                         {post.excerpt}
//                       </p>

//                       {/* Meta */}
//                       <div className="flex flex-wrap items-center gap-4 text-sm text-cyan-400">
//                         <span>📅 {post.meta.split(" | ")[0]}</span>
//                         <span>👤 {post.meta.split(" | ")[1]}</span>
//                         <span>💬 {post.meta.split(" | ")[2]}</span>
//                         <span>🏷️ {post.meta.split(" | ")[3]}</span>
//                       </div>

//                       <button className="mt-6 text-cyan-400 font-bold hover:text-pink-500 transition-colors duration-300">
//                         / READ MORE
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Media */}
//                 <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
//                   {post.isVideo ? (
//                     <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video group-hover:shadow-2xl transition-shadow duration-300">
//                       <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-pink-500/20"></div>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <button className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl hover:bg-red-700 transition-colors duration-300 hover:scale-110 transform">
//                           ▶
//                         </button>
//                       </div>
//                       <div className="absolute top-4 left-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
//                         INK DROPS 4K (ULTRA HD)
//                       </div>
//                     </div>
//                   ) : post.isAudio ? (
//                     <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video group-hover:shadow-2xl transition-shadow duration-300">
//                       <img
//                         src={post.image}
//                         alt={post.title}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
//                         <div className="flex items-center space-x-4 text-white">
//                           <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
//                             ▶
//                           </button>
//                           <div className="flex-1">
//                             <div className="w-full bg-white/20 rounded-full h-2">
//                               <div className="bg-cyan-400 h-2 rounded-full w-1/3"></div>
//                             </div>
//                             <div className="text-xs mt-1">0:00 / 7:07</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="relative rounded-lg overflow-hidden group-hover:shadow-2xl transition-shadow duration-300">
//                       <img
//                         src={post.image}
//                         alt={post.title}
//                         className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      date: { day: "22", month: "Mar" },
      title: "Smart Cities",
      shortDescription:
        "Instrek is building smarter, cleaner, and more connected cities by integrating AI, IoT, clean energy, and citizen first digital platforms. Here's how we make smart cities truly intelligent.",
      longDescription:
        "When people hear the term Smart City, they often think of flashy gadgets, futuristic roads, or buildings loaded with sensors. But a truly smart city is much more than that. It’s a living ecosystem one that uses technology not as a showpiece, but as a tool for impact......",
      meta: "March 22, 2016 | Admin | 2 Comments | Audio",
      image: "./images/smartcity2.jpg",
    },
    {
      id: 2,
      date: { day: "09", month: "Mar" },
      title: "Next Gen Technologies ",
      shortDescription:
        "From Agentic AI to blockchain and IoT, Instrek is turning emerging tech into practical, people-first platforms that solve real-world challenges across education, governance, and public services.",
      longDescription:
        "Terms like AI, IoT, and Blockchain often sound like the language of big tech companies. But at Instrek, we see them as practical tools meant to solve real-world problems, not just look good on a presentation slide....",
      meta: "March 09, 2016 | Audio | 2 Comments | Design",
      isVideo: true,
      video: "./pathDetector.mp4",
    },
    {
      id: 3,
      date: { day: "28", month: "Feb" },
      title: "Sociopreneur Foundation -  Innovation with a Purpose",
      shortDescription:
        "Instrek empowers social innovators, nonprofits, and grassroots changemakers by providing purpose-built tech, training, and tools that amplify social impact and promote inclusive growth.",
      longDescription:
        "Innovation isn't just for unicorn startups or MNCs. It should also serve grassroots changemakers—the ones improving lives in real, measurable ways. That’s why Instrek supports nonprofits, social enterprises, and mission-led teams through the Sociopreneur Foundation model.",
      meta: "February 28, 2016 | Audio | 2 Comments | Audio",

      image: "./images/robo.jpg",
    },
    {
      id: 4,
      date: { day: "22", month: "Mar" },
      title: "Broadcasting Innovation - From Signal to Story",
      shortDescription:
        "Instrek is building smarter, cleaner, and more connected cities by integrating AI, IoT, clean energy, and citizen-first digital platforms. Here's how we make smart cities truly intelligent.",
      longDescription:
        "When people hear the term Smart City, they often think of flashy gadgets, futuristic roads, or buildings loaded with sensors. But a truly smart city is much more than that. It’s a living ecosystem—one that uses technology not as a showpiece, but as a tool for impact......",
      meta: "March 22, 2016 | Admin | 2 Comments | Audio",
      image: "./images/bulb.jpg",
    },
  ];

  return (
    <section
      className="py-20 bg-[rgb(14,0,51)] text-white  text-[15px]"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-left">
          <h2 className="text-6xl font-black mb-4">
            <span>BLOG</span>
          </h2>
          <div className="text-4xl font-light text-gray-300">
            LATEST FROM
            <br />
            OUR BLOG
            <span className="text-xl text-gray-400 ml-8">2016/2015/2014</span>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-16">
          {blogPosts.map((post, index) => (
            <article key={post.id} className="group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-start space-x-6">
                    {/* Date Circle */}
                    <div className="bg-[#EA6220] text-white rounded-full w-20 h-20 flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <span className="text-2xl font-bold">
                        {post.date.day}
                      </span>
                      <span className="text-sm">{post.date.month}</span>
                    </div>

                    {/* Text Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#EA6220] transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-[#EA6220] b-2">
                        {post.shortDescription}
                      </p>
                      <p className="text-gray-400 mb-4">
                        {post.longDescription}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#EA6220]">
                        <span>📅 {post.meta.split(" | ")[0]}</span>
                        <span>👤 {post.meta.split(" | ")[1]}</span>
                        <span>💬 {post.meta.split(" | ")[2]}</span>
                        <span>🏷️ {post.meta.split(" | ")[3]}</span>
                      </div>

                      <button className="mt-6 text-[#EA6220] font-bold hover:text-pink-500 transition-colors duration-300">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>

                {/* Media (image/video/audio) */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {post.isVideo ? (
                    <div className="relative rounded-lg overflow-hidden group-hover:shadow-2xl transition-shadow duration-300">
                      <video
                        controls
                        className="w-full h-full object-cover aspect-video"
                        poster={post.image}
                        autoPlay
                        muted
                        loop
                      >
                        <source src={post.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : post.isAudio ? (
                    <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video group-hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                        <div className="flex items-center space-x-4 text-white">
                          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                            ▶
                          </button>
                          <div className="flex-1">
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div className="bg-[#EA6220] h-2 rounded-full w-1/3"></div>
                            </div>
                            <div className="text-xs mt-1">0:00 / 7:07</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative rounded-lg overflow-hidden group-hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
