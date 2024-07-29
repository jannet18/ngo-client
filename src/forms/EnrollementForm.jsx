import React from "react";

function EnrollementForm() {
  return (
    <div>
      <div className="max-w-7xl mx-auto m-10">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-3xl">Enrollment Form</h1>
        </div>
        <form className="flex flex-col items-start justify-center p-10 gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" className="border p-1 rounded-md outline-none" />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  className="border p-1 rounded-md outline-none"
                >
                  <option value="">Find Option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="date">Date</label>
                <select className="border p-1 rounded-md outline-none">
                  {/* calender */}
                  <option value="">dd/mm/yyyy</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="text"
                className="border p-1 rounded-md outline-none"
              />
            </div>
          </div>
          <div className="flex md:flex-row gap-10">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="Church">Church</label>
              <input
                type="text"
                className="border p-1 rounded-md outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="Program">Program</label>
              <select className="border w-full p-1 rounded-md outline-none">
                <option value="">Select Program</option>
                <option value="">Worship Leader</option>
                <option value="">Vocalist</option>
                <option value="">Sound Engineering</option>
                <option value="">Media</option>
                <option value="">Instrumentalist</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="text" className="border p-1 rounded-md outline-none" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              Describe your role or responsibility in your Church
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              Give a brief description of how you came to faith
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              What is the motivation behind your service in Church
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              What are some challenges that you have faced while serving ?
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              Are you able to commit for a month for the Entrust Training
            </label>
            <select className="border p-1 rounded-md outline-none">
              <option value="yes">Yes</option>
              <option value="yes">No</option>
            </select>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              List any other commitments that might affect your participation
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="">
              What do you hope to achieve or learn through the training ?
            </label>
            <textarea
              rows={4}
              className="border p-1 rounded-md outline-none"
            ></textarea>
          </div>
          <button className="text-white bg-[#0a4446] px-4 py-3 rounded-3xl text-xs font-bold uppercase hover:text-gray-800 hover:bg-[#fbd459]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnrollementForm;
