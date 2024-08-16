import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <>
      {/* <div className="min-w-screen min-h-screen bg-gray-50 py-5"> */}
      <div className="px-5">
        <div className="mb-2">
          <a
            href="#"
            className="focus:outline-none hover:underline text-gray-500 text-sm"
          >
            <i className="mdi mdi-arrow-left text-gray-400"></i>Back
          </a>
        </div>
        <div className="mb-2 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-600 ">
            Checkout.
          </h1>
        </div>
        {/* <div className="mb-5 text-gray-400">
          <a
            href="#"
            className="focus:outline-none hover:underline text-gray-500"
          >
            Home
          </a>{" "}
          /{" "}
          <a
            href="#"
            className="focus:outline-none hover:underline text-gray-500"
          >
            Cart
          </a>{" "}
          / <span className="text-gray-600">Checkout</span>
        </div> */}
      </div>
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div className="w-full">
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-7/12 lg:pr-10">
              {/* <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                <div className="w-full flex items-center">
                  <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-semibold uppercase text-gray-600">
                      Ray Ban Sunglasses.
                    </h6>
                    <p className="text-gray-400">x 1</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600 text-xl">
                      $210
                    </span>
                    <span className="font-semibold text-gray-600 text-sm">
                      .00
                    </span>
                  </div>
                </div>
              </div> */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="-mx-2 flex items-end justify-end">
                  {/* <div className="flex-grow px-2 lg:max-w-xs">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Discount code
                    </label>
                    <div>
                      <input
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="XXXXXX"
                        type="text"
                      />
                    </div>
                  </div> */}
                  {/* <div className="px-2">
                    <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                      APPLY
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                <div className="w-full flex mb-3 items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Subtotal</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">Ksh. 1950.00</span>
                  </div>
                </div>
                <div className="w-full flex items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Taxes (GST)</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">Ksh. 190.50</span>
                  </div>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                <div className="w-full flex items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Total</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold text-gray-400 text-sm">
                      KSH.
                    </span>{" "}
                    <span className="font-semibold">2150.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-5/12">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-3 items-center">
                  <div className="w-32">
                    <span className="text-gray-600 font-semibold">Contact</span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>Scott Windon</span>
                  </div>
                </div>
                <div className="w-full flex items-center">
                  <div className="w-32">
                    <span className="text-gray-600 font-semibold">
                      Billing Address
                    </span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>123 George Street, Sydney, NSW 2000 Australia</span>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                <div className="w-full p-3 border-b border-gray-200">
                  <div className="mb-5">
                    <label
                      for="type1"
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-indigo-500"
                        name="type"
                        id="type1"
                        checked
                      />
                      <img
                        src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                        className="h-6 ml-3"
                      />
                    </label>
                  </div>
                  <div>
                    <div className="mb-3">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Name on card
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="John Smith"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Card number
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="mb-3 -mx-2 flex items-end">
                      <div className="px-2 w-1/4">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Expiration date
                        </label>
                        <div>
                          <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                            <option value="01">01 - January</option>
                            <option value="02">02 - February</option>
                            <option value="03">03 - March</option>
                            <option value="04">04 - April</option>
                            <option value="05">05 - May</option>
                            <option value="06">06 - June</option>
                            <option value="07">07 - July</option>
                            <option value="08">08 - August</option>
                            <option value="09">09 - September</option>
                            <option value="10">10 - October</option>
                            <option value="11">11 - November</option>
                            <option value="12">12 - December</option>
                          </select>
                        </div>
                      </div>
                      <div className="px-2 w-1/4">
                        <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                        </select>
                      </div>
                      <div className="px-2 w-1/4">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Security code
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="000"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-3">
                  <label
                    for="type2"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-indigo-500"
                      name="type"
                      id="type2"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                      width="80"
                      className="ml-3"
                    />
                  </label>
                </div>
                <div className="w-full p-3">
                  <label
                    for="type2"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-indigo-500"
                      name="type"
                      id="type2"
                    />
                    <img
                      src="data:image/png;base64,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"
                      width="80"
                      className="ml-3"
                    />
                  </label>
                </div>
              </div>
              <div>
                <button className="block w-full max-w-xs mx-auto bg-[#fbd459] hover:bg-[#273733] focus:bg-[#273733] text-white rounded-lg px-3 py-2 font-semibold">
                  <i className="mdi mdi-lock-outline mr-1"></i>
                  <Link to="/mpesa">PAY NOW</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Checkout;
