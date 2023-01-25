
export default function TextArea(){
    return(
        <div className="grid grid-cols-1 px-5 pt-10">
            {[
            ['KEP GARDENS', 'Kep Gardens is a community development project. It is a non-profit, non-government organization with no political or religious affiliations. Kep Gardens is committed to the training and education of young people in a rural Cambodian community.'],
            ['OUR VISION', 'Our visions is for a self-sustaining site providing education through an Education Centre, Trade Centre and Career Students programmed to enable rural youth to gain employment.'],
            ].map(([title,description])=>
                <div className="mb-20">
                    <h3 className="flex justify-center font-Poppins text-2xl font-bold mb-5">{title}</h3>
                    <p className="flex justify-center font-Poppins font-medium indent-5 text-center lg:mx-36 xl:mx-64">{description}</p>
                </div>
            )}
        </div>
    )
}