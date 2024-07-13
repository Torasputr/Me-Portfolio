import React from "react";

function Services() {
  return (
    <>
      <div className="bg-secondary px-20 py-12">
        <div className="grid grid-cols-2 items-center gap-20">
          <div className="flex justify-center">
            <div className="text-white ">
              <h1 className="text-6xl font-bold">
                My <span className="text-primary">Services</span>
              </h1>
              <h1 className="text-justify pt-5 text-xl">
                As a full stack developer, I offer a comprehensive range of
                services to help you build and maintain high-quality web
                applications. From frontend design to back-end development and
                everything in between, I provide solutions tailored to your
                needs.
              </h1>
            </div>
          </div>
          <div className="text-white flex justify-center">
            <div className="grid grid-cols-2 gap-5">
              <div className="border-5 rounded-xl border-white px-8 py-8">
                <i class="flex justify-center lni lni-layout text-7xl pb-4 "></i>
                <h1 className="text-center font-bold text-2xl">
                  Frontend Development
                </h1>
              </div>
              <div className="border-5 rounded-xl border-white px-8 py-8">
                <i class="flex justify-center lni lni-database text-7xl pb-4 "></i>
                <h1 className="text-center font-bold text-2xl">
                  Backend Development
                </h1>
              </div>
              <div className="border-5 rounded-xl border-white px-8 py-8">
                <i class="flex justify-center lni lni-mobile text-7xl pb-4 "></i>
                <h1 className="text-center font-bold text-2xl">
                  Mobile Development
                </h1>
              </div>
              <div className="border-5 rounded-xl border-white px-8 py-8">
                <i class="flex justify-center lni lni-invention text-7xl pb-4 "></i>
                <h1 className="text-center font-bold text-2xl pt-4">
                  AI Engineering
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
