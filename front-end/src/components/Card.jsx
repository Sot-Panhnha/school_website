export default function Card(){
    return(
        <div className="flex flex-col items-center mt-2 mb-2 md:grid-cols-2 md:grid sm:px-10 lg:px-32 justify-items-center md:my-8  xl:flex xl:flex-row xl:justify-center">
            {[
                ['src/asset/hero-image.jpg','Title','Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'],
                ['src/asset/hero-image.jpg','Title','Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'],
                ['src/asset/hero-image.jpg','Title','Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'],
                ['src/asset/hero-image.jpg','Title','Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'],
            ].map(([img,title,description])=>
                <div className="overflow-hidden bg-no-repeat bg-cover container bg-white mb-10 h-[380px] w-[340px] xl:w-80 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700 lg:mx-3 xl:mr-10 xl:mr-10">
                    <a href="#">
                        <img className="object-cover w-[340px] h-[200px] rounded-tl-2xl rounded-tr-2xl hover:scale-110 transition duration-300 ease-in-ou " src={img} alt=""/>
                    </a>
                    <div className="p-3">
                        <a href="#">
                            <h5 className="mb-1 font-bold font-Poppins text-gray-900 dark:text-white">{title}</h5>
                        </a>
                        <p className="xl:mb-5 mb-2 font-Poppins font-thin text-gray-700 dark:text-gray-400">{description}</p>
                        <a href="#"
                           className="inline-flex items-center px-2 py-2 text-sm font-medium font-Poppins text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>

                </div>
            )}
        </div>
    )
}