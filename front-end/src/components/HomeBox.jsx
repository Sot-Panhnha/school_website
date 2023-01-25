
export default function HomeBox(){
    return(
        <div className="flex flex-col items-center pt-10 mt-2 mb-2 md:grid-cols-2 md:grid sm:px-10 lg:px-32 justify-items-center md:my-8  xl:flex xl:flex-row xl:justify-center ">

            {[
                ['src/asset/fav-icons/graduation-hat.png','Education','Non-profit organization share knowledge to students from kindergarten to high school.'],
                ['src/asset/fav-icons/heart.png',"Healthy", 'Free check physical health for every year for student under 18 years old.'],
                ['src/asset/fav-icons/football.png',"Sports",'students to play football and volley ball as the team and play with other students from another team.'],
                ['src/asset/fav-icons/culture.png','Culture','There are a place that teach royal ballet Apsara dance to students who want to study.'],
            ].map(([image,title,description])=>
                <div className="w-80 h-52 xl:h-60 xl:w-72  rounded-2xl my-5 xl:my-1 grid grid-cols-1 justify-items-center mx-5">
                        <img src={image} alt="" className="w-14 h-14 mt-2"/>
                        <h5 className="font-bold mt-3 mb-3 xl:mt-6 x:mb-6 text-green-900 font-Poppins text-xl">{title}</h5>
                        <div className="mx-2 flex justify-center text-center ">
                            <p className='indent-2 rounded-xl h-24 font-Poppins text-green-700 '>{description}</p>
                        </div>


                </div>
            )}

        </div>
    )
}