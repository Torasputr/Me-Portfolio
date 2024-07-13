import React from "react";

export default function MeProjects() {
  return (
    <>
      <div className="bg-secondary px-20 py-20">
        <h1 className="text-white text-center text-6xl font-bold pb-20">
          My <span className="text-primary">Projects</span>
        </h1>
        <div className="grid grid-cols-3 justify-center items-center gap-20">
          <div className="w-96 h-96 border-5 col-span-1 border-primary rounded-xl">
            <img
              className="h-full object-cover rounded-xl relative left-9 top-9"
              src="/src/assets/images/Projects/Web/itsscale.png"
              alt=""
            />
          </div>
          <div className="text-white col-span-2">
            <h1 className="text-6xl font-bold text-primary pb-5">
              ITSScale Website
            </h1>
            <h1 className="text-justify text-xl">
              We developed a dynamic website for PT. Internasional Teknik
              Solusindo, a leader in digital scales, using Laravel and
              Bootstrap. This user-friendly, visually appealing site features a
              detailed product catalog, inquiry form, news section, and customer
              testimonials. With advanced search capabilities and responsive
              design, it ensures seamless performance on all devices, enhancing
              the company's online presence and reaching a broader audience.
            </h1>
            <div className="flex justify-center pt-5">
              <a
                className="text-xl font-semibold border-3 border-primary rounded-full px-10 py-2 pt-1 text-primary hover:border-white hover:bg-white hover:text-gradient-end transition-all duration-300"
                href="https://itsscale.com"
              >
                Open Website
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-center items-center gap-20 pt-20">
          <div className="text-white col-span-2">
            <h1 className="text-6xl font-bold text-primary pb-5">Project T</h1>
            <h1 className="text-justify text-xl">
              A secret project that is not ready to be published yet. More
              information will be given soon when the project has been
              developped more and further.
            </h1>
          </div>
          <div className="w-96 h-96 border-5 col-span-1 border-primary rounded-xl">
            <img
              className="h-full object-cover rounded-xl relative right-9 top-9"
              src="/src/assets/images/Projects/bweee.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
