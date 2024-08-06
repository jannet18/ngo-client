import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { GoEye } from "react-icons/go";
import Header from "../components/Header";

function Shop() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 p-4 rounded-md">
            <div className="mb-4 border rounded-3xl p-6">
              <div className="flex items-center justify-between gap-6">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none border rounded-2xl p-3 w-full"
                />
                <GoSearch />
              </div>
            </div>
            <div className="mb-4 border rounded-3xl p-6">
              <h4 className="font-bold mb-2">Filter by Price</h4>
              <input
                type="range"
                min={0}
                max={1000}
                className="w-full bg-[#0a4446]"
              />
              <div className="flex items-center justify-between">
                Ksh. 100 - Ksh. 1000
                <div className="flex items-center gap-2">
                  <Link className="underline">Reset</Link>
                  <Link className="bg-[#fbd459] rounded-3xl px-3 py-1 uppercase text-xs font-bold">
                    Apply
                  </Link>
                </div>
              </div>
            </div>
            <div className="border rounded-3xl p-6 ">
              <h4 className="font-bold mb-2">Categories</h4>
              <ul className="space-y-3">
                <li className="text-gray-600 hover:bg-[#f9f4e8] p-2 rounded-3xl hover:font-bold">
                  T-shirt
                </li>
                <li className="text-gray-600 hover:bg-[#f9f4e8] p-2 rounded-3xl hover:font-bold">
                  Hoodie
                </li>
                <li className="text-gray-600 hover:bg-[#f9f4e8] p-2 rounded-3xl hover:font-bold">
                  Mugs
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="border rounded-3xl">
                <div className="relative group w-full rounded-t-3xl overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1155855515/vector/vector-t-shirt-mockup-template-with-shadow-top-view.jpg?s=612x612&w=0&k=20&c=w7D-Fa9p85JgUxG2A01kgYL4RZxDqX89XzXwOkujEPY="
                    className="w-full h-50 object-cover mb-4 "
                    alt=""
                  />
                  <div className="flex items-start justify-end p-2 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2">
                      <Link className="border  bg-white p-2 rounded-full">
                        <FaRegHeart />
                      </Link>
                      <Link className="border  bg-white p-2 rounded-full">
                        <GoEye />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                  <h4 className="text-xl font-bold capitalize">T-shirt</h4>
                  <span className="text-gray-500">Ksh. 600.00</span>
                  <Link className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]">
                    Select options
                  </Link>
                  <Link className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]">
                    Add to Cart
                  </Link>
                </div>
              </div>
              <div className="border rounded-3xl">
                <div className="relative group w-full rounded-t-3xl overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1155855515/vector/vector-t-shirt-mockup-template-with-shadow-top-view.jpg?s=612x612&w=0&k=20&c=w7D-Fa9p85JgUxG2A01kgYL4RZxDqX89XzXwOkujEPY="
                    className="w-full h-50 object-cover mb-4 "
                    alt=""
                  />
                  <div className="flex items-start justify-end p-2 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2">
                      <Link className="border  bg-white p-2 rounded-full">
                        <FaRegHeart />
                      </Link>
                      <Link className="border  bg-white p-2 rounded-full">
                        <GoEye />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                  <h4 className="text-xl font-bold capitalize">T-shirt</h4>
                  <span className="text-gray-500">Ksh. 600.00</span>
                  <Link className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]">
                    Select options
                  </Link>
                  <Link
                    to="/cart"
                    className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
              <div className="border rounded-3xl">
                <div className="relative group w-full rounded-t-3xl overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1155855515/vector/vector-t-shirt-mockup-template-with-shadow-top-view.jpg?s=612x612&w=0&k=20&c=w7D-Fa9p85JgUxG2A01kgYL4RZxDqX89XzXwOkujEPY="
                    className="w-full h-50 object-cover mb-4 "
                    alt=""
                  />
                  <div className="flex items-start justify-end p-2 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2">
                      <Link className="border  bg-white p-2 rounded-full">
                        <FaRegHeart />
                      </Link>
                      <Link className="border  bg-white p-2 rounded-full">
                        <GoEye />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                  <h4 className="text-xl font-bold capitalize">T-shirt</h4>
                  <span className="text-gray-500">Ksh. 600.00</span>
                  <Link className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]">
                    Select options
                  </Link>
                  <Link
                    to="/cart"
                    className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
              <div className="border rounded-3xl">
                <div className="relative group w-full rounded-t-3xl overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1155855515/vector/vector-t-shirt-mockup-template-with-shadow-top-view.jpg?s=612x612&w=0&k=20&c=w7D-Fa9p85JgUxG2A01kgYL4RZxDqX89XzXwOkujEPY="
                    className="w-full h-50 object-cover mb-4 "
                    alt=""
                  />
                  <div className="flex items-start justify-end p-2 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2">
                      <Link className="border  bg-white p-2 rounded-full">
                        <FaRegHeart />
                      </Link>
                      <Link className="border  bg-white p-2 rounded-full">
                        <GoEye />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                  <h4 className="text-xl font-bold capitalize">T-shirt</h4>
                  <span className="text-gray-500">Ksh. 600.00</span>
                  <Link className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]">
                    Select options
                  </Link>
                  <Link
                    to="/cart"
                    className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
              <div className="border rounded-3xl">
                <div className="relative group w-full rounded-t-3xl overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1155855515/vector/vector-t-shirt-mockup-template-with-shadow-top-view.jpg?s=612x612&w=0&k=20&c=w7D-Fa9p85JgUxG2A01kgYL4RZxDqX89XzXwOkujEPY="
                    className="w-full h-50 object-cover mb-4 "
                    alt=""
                  />
                  <div className="flex items-start justify-end p-2 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2">
                      <Link className="border  bg-white p-2 rounded-full">
                        <FaRegHeart />
                      </Link>
                      <Link className="border  bg-white p-2 rounded-full">
                        <GoEye />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                  <h4 className="text-xl font-bold capitalize">T-shirt</h4>
                  <span className="text-gray-500">Ksh. 600.00</span>
                  <Link className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]">
                    Select options
                  </Link>
                  <Link
                    to="/cart"
                    className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
              <div className="border rounded-3xl">
                <div className="relative group w-full rounded-t-3xl overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1155855515/vector/vector-t-shirt-mockup-template-with-shadow-top-view.jpg?s=612x612&w=0&k=20&c=w7D-Fa9p85JgUxG2A01kgYL4RZxDqX89XzXwOkujEPY="
                    className="w-full h-50 object-cover mb-4 "
                    alt=""
                  />
                  <div className="flex items-start justify-end p-2 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2">
                      <Link className="border  bg-white p-2 rounded-full">
                        <FaRegHeart />
                      </Link>
                      <Link className="border  bg-white p-2 rounded-full">
                        <GoEye />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                  <h4 className="text-xl font-bold capitalize">T-shirt</h4>

                  <>
                    <div className="prod-info grid gap-10">
                      <div>
                        <ul className="flex flex-row justify-center items-center">
                          <li className="mr-4 last:mr-0">
                            <span className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                              <a
                                href="#blue"
                                className="block w-6 h-6 bg-blue-900 rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="mr-4 last:mr-0">
                            <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                              <a
                                href="#yellow"
                                className="block w-6 h-6 bg-yellow-500 rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="mr-4 last:mr-0">
                            <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                              <a
                                href="#red"
                                className="block w-6 h-6 bg-red-500 rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="mr-4 last:mr-0">
                            <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                              <a
                                href="#green"
                                className="block w-6 h-6 bg-green-500 rounded-full"
                              ></a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                  <span className="text-gray-500">Ksh. 600.00</span>
                  <Link
                    to="/cart"
                    className="bg-[#f9f4e8] uppercase font-bold text-xs p-3 rounded-full hover:bg-[#fbd459]"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
