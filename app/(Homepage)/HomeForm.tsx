import React from "react";

const HomeForm = () => {
  return (
    <div className="py-28">
      <div className="container mx-auto">
        <h1 className="text-5xl font-[600] text-center">
          Get in <span className="text-blue-500">Touch with Us</span>
        </h1>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-7 mt-12">
          <div className="w-full h-[630px]">
            <img
              className="w-full h-full object-cover"
              src={"/contactImage.png"}
              alt={""}
            />
          </div>
          <form className="space-y-8 w-full">
            <div>
              <label className="">Full Name</label>
              <input
                className="w-full mt-1 bg-slate-200 px-4 py-[.7rem] rounded-lg"
                placeholder="Enter full Name"
              />
            </div>
            <div>
              <label className="">Contact Number</label>
              <input
                className="w-full mt-1 bg-slate-200 px-4 py-[.7rem] rounded-lg"
                placeholder="Enter Phone"
              />
            </div>
            <div>
              <label className="">Email</label>
              <input
                className="w-full mt-1 bg-slate-200 px-4 py-[.7rem] rounded-lg"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label className="">Message</label>
              <textarea
                rows={5}
                className="w-full mt-1 bg-slate-200 px-4 py-[.7rem] rounded-lg resize-none"
                placeholder="Enter your message"
              />
            </div>
            <button className="bg-gradient-to-br px-6 py-[.45rem] text-sm rounded-lg text-slate-50 flex items-center gap-2 from-[#387EF0] to-[#2651C2]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
