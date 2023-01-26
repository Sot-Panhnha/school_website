import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import data from "/src/data/blog_data.json";
const BlogPageLayout = () => {
  return (
    <div className="w-full py-2 sm:py-[40px] bg-gray-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="w-full h-full grid sm:grid-cols-2 xl:grid-cols-12 gap-1 px-1 sm:px-2">
          <div class="gap-2 col-span-12 lg:col-span-8 ">
            <div className="grid grid-cols-10 sm:gap-2 xl:gap-4 ">
              <MainBlogCard />
              <MainBlogCard2 />
              <MorePost />
            </div>
          </div>
          <div className="w-full h-full grid-col-4 col-span-12 lg:col-span-8 grid xl:col-span-4 xl:pl-20 pt-3 xl:pt-0">
            <div>
               <div className="grid grid-cols-4 gap-2">
                  <RecentPost />
                  <FollowUs />
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};
const MainBlogCard = () => {
  return (
    <>
      <div className="row-span-2 col-span-10 md:col-span-6">
        <div className="bg-white overflow-hidden drop-shadow ">
          <div className="relative overflow-hidden bg-no-repeat bg-cover">
            <img
              className="h-[200px] sm:h-[300px] md:h-[400px] w-full object-cover"
              src={data[0].image}
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-30 opacity-0 bg-fixed bg-gray-300 transition duration-300 ease-in-out"></div>
          </div>
          <div className="p-3">
            <p className="font-Poppins text-gray-400 pb-1 text-sm ">
              {data[0].minutes}
            </p>
            <h3 className="font-Poppins font-bold text-xl my-1 ">
              {data[0].title}
            </h3>
            <p className="font-Poppins text-gray-900 text-start">
              {data[0].description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const MainBlogCard2 = () => {
  return (
    <>
      <div className="col-span-10 sm:col-span-5 md:col-span-4 ">
        <div className="bg-white overflow-hidden drop-shadow">
          <div className="relative overflow-hidden bg-no-repeat bg-cover">
            <img
              className="h-44 md:h-[200px]  w-full object-cover"
              src={data[1].image}
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-30 opacity-0 bg-fixed bg-gray-300 transition duration-300 ease-in-out"></div>
          </div>
          <div className="p-3">
            <p className="font-Poppins text-gray-400 pb-1 text-sm ">
              {data[1].minutes}
            </p>
            <h3 className="font-Poppins font-bold text-xl my-1 ">
              {data[1].title}
            </h3>
            <p className="font-Poppins text-gray-900 text-start">
              {data[1].description}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-10 sm:col-span-5 md:col-span-4 ">
        <div className="bg-white overflow-hidden drop-shadow">
          <div className="relative overflow-hidden bg-no-repeat bg-cover">
            <img
              className="h-44 md:h-[200px]  w-full object-cover"
              src={data[1].image}
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-30 opacity-0 bg-fixed bg-gray-300 transition duration-300 ease-in-out"></div>
          </div>
          <div className="p-3">
            <p className="font-Poppins text-gray-400 pb-1 text-sm ">
              {data[1].minutes}
            </p>
            <h3 className="font-Poppins font-bold text-xl my-1 ">
              {data[1].title}
            </h3>
            <p className="font-Poppins text-gray-900 text-start">
              {data[1].description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const RecentPost = () => {
  return (
    <>
      <div className="p-5 bg-white col-span-4 md:col-span-2 row-span-2 xl:col-span-4 ">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="font-Poppins font-semibold text-xl">RECENT POSTS</h5>
          </div>
          <div className="w-[150px] ">
            <hr />
          </div>
        </div>
        <div>
          <div className="pt-2 px-1">
            <div className="relative overflow-hidden bg-no-repeat bg-cover">
              <img
                className="h-56 xl:h-[180px] w-full object-cover"
                src={data[3].image}
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-30 opacity-0 bg-fixed bg-gray-300 transition duration-300 ease-in-out"></div>
            </div>
            <p className="font-Poppins text-sm pt-2">{data[3].minutes}</p>
            <h5 className="pt-2 font-Poppins font-semibold">{data[3].title}</h5>
            <p className="font-Poppins pt-1">{data[3].description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
const FollowUs = () => {
  return (
    <>
      <div className="p-5 bg-white col-span-4 xl:mt-10 md:col-span-2 xl:col-span-4 lg:h-56">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="font-Poppins font-semibold text-xl">FOLLOW US</h5>
          </div>
          <div className="w-[150px] ">
            <hr />
          </div>
        </div>
        <div className="pt-5">
          <a href="#">
            <div className="flex justify-between items-center border m-1 p-1 hover:bg-green-100">
              <div className="ml-3">
                <AiFillFacebook size="1.5rem" />
              </div>
              <p className="mr-20">FaceBook</p>
              <p className="mr-2">Like</p>
            </div>
          </a>
          <a href="#">
            <div className="flex justify-between items-center border m-1 mt-2 p-1 hover:bg-green-100">
              <div className="ml-3">
                <AiOutlineTwitter size="1.5rem" />
              </div>
              <p className="mr-20">Twitter</p>
              <p className="mr-2">Follow</p>
            </div>
          </a>
          <a href="#">
            <div className="flex justify-between items-center border m-1 mt-2 p-1 hover:bg-green-100">
              <div className="ml-3">
                <AiFillYoutube size="1.5rem" />
              </div>
              <p className="mr-16">Youtube</p>
              <p className="mr-2">Subscribe</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
const MorePost = () => {
  return (
    <>
      <div className="col-span-10 pt-5">
        <div className="flex justify-between items-center pb-5">
          <div>
            <h5 className="font-Poppins font-semibold text-xl">RECENT POSTS</h5>
          </div>
          <div className="w-[200px] md:w-[500px]">
            <hr />
          </div>
        </div>
        <div className="bg-white mt-2">
          <div className="grid grid-cols-10 grid-rows-2">
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src={data[0].image}
                  alt="image"
                  className="h-44 md:h-[250px] w-full object-cover"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-30 opacity-0 bg-fixed bg-gray-300 transition duration-300 ease-in-out"></div>
              </div>
            </div>
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="p-3">
                <h3 className="font-Poppins font-bold text-xl my-1 ">
                  {data[1].title}
                </h3>
                <p className="font-Poppins text-gray-900 text-start">
                  {data[1].description}
                </p>
                <p className="font-Poppins text-gray-400 pt-3 text-sm ">
                  {data[1].minutes}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mt-2">
          <div className="grid grid-cols-10 grid-rows-2">
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src={data[0].image}
                  alt="image"
                  className="h-44 md:h-[250px] w-full object-cover"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-30 opacity-0 bg-fixed bg-gray-300 transition duration-300 ease-in-out"></div>
              </div>
            </div>
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="p-3">
                <h3 className="font-Poppins font-bold text-xl my-1 ">
                  {data[1].title}
                </h3>
                <p className="font-Poppins text-gray-900 text-start">
                  {data[1].description}
                </p>
                <p className="font-Poppins text-gray-400 pt-3 text-sm ">
                  {data[1].minutes}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mt-2">
          <div className="grid grid-cols-10 grid-rows-2">
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src={data[0].image}
                  alt="image"
                  className="h-44 md:h-[250px] w-full object-cover"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-30 opacity-0 bg-fixed bg-gray-300 transition duration-300 ease-in-out"></div>
              </div>
            </div>
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="p-3">
                <h3 className="font-Poppins font-bold text-xl my-1 ">
                  {data[1].title}
                </h3>
                <p className="font-Poppins text-gray-900 text-start">
                  {data[1].description}
                </p>
                <p className="font-Poppins text-gray-400 pt-3 text-sm ">
                  {data[1].minutes}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mt-2">
          <div className="grid grid-cols-10 grid-rows-2">
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src={data[0].image}
                  alt="image"
                  className="h-44 md:h-[250px] w-full object-cover"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-30 opacity-0 bg-fixed bg-gray-300 transition duration-300 ease-in-out"></div>
              </div>
            </div>
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="p-3">
                <h3 className="font-Poppins font-bold text-xl my-1 ">
                  {data[1].title}
                </h3>
                <p className="font-Poppins text-gray-900 text-start">
                  {data[1].description}
                </p>
                <p className="font-Poppins text-gray-400 pt-3 text-sm ">
                  {data[1].minutes}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mt-2">
          <div className="grid grid-cols-10 grid-rows-2">
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src={data[0].image}
                  alt="image"
                  className="h-44 md:h-[250px] w-full object-cover"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-30 opacity-0 bg-fixed bg-gray-300 transition duration-300 ease-in-out"></div>
              </div>
            </div>
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="p-3">
                <h3 className="font-Poppins font-bold text-xl my-1 ">
                  {data[1].title}
                </h3>
                <p className="font-Poppins text-gray-900 text-start">
                  {data[1].description}
                </p>
                <p className="font-Poppins text-gray-400 pt-3 text-sm ">
                  {data[1].minutes}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mt-2">
          <div className="grid grid-cols-10 grid-rows-2">
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src={data[0].image}
                  alt="image"
                  className="h-44 md:h-[250px] w-full object-cover"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden hover:opacity-30 opacity-0 bg-fixed bg-gray-300 transition duration-300 ease-in-out"></div>
              </div>
            </div>
            <div className="col-span-10 row-span-1 md:row-span-2 md:col-span-5">
              <div className="p-3">
                <h3 className="font-Poppins font-bold text-xl my-1 ">
                  {data[1].title}
                </h3>
                <p className="font-Poppins text-gray-900 text-start">
                  {data[1].description}
                </p>
                <p className="font-Poppins text-gray-400 pt-3 text-sm ">
                  {data[1].minutes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default BlogPageLayout;
