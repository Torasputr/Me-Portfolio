import React from "react";

function About() {
  return (
    <>
      <div className="bg-gradient-to-r from-gradient-end to-gradient-start py-16 px-20">
        <h1 className="text-center text-white text-6xl font-bold pb-16">
          More <span className="text-primary">About</span> Me
        </h1>
        <div className="grid grid-cols-2 text-white items-center">
          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-3xl">My Education</h1>
              <div className="pt-5">
                <h1 className="text-2xl font-bold text-primary">
                  Master of Computer Science
                </h1>
                <h1 className="text-lg font-semibold">2025-2026</h1>
              </div>
              <div className="pt-10">
                <h1 className="text-2xl font-bold text-primary">
                  Computer Science
                </h1>
                <h1 className="text-lg font-semibold">2021-2025</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-3xl">My Skills</h1>
              <div className="grid grid-cols-3 pt-8 gap-10 justify-between">
                <div className="flex justify-center">
                  <div>
                    <div className="flex justify-center">
                      <i class="text-center lni lni-tailwindcss text-4xl icons border-primary border-3 rounded-full text-primary"></i>
                    </div>
                    <h1 class="text-primary text-lg font-bold">TailwindCSS</h1>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <div className="flex justify-center">
                      <i class="lni lni-react text-4xl icons border-primary border-3 rounded-full text-primary"></i>
                    </div>
                    <h1 class=" text-primary text-lg font-bold">React.js</h1>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <div className="flex justify-center">
                      <i class="lni lni-firebase text-4xl icons border-primary border-3 rounded-full text-primary"></i>
                    </div>
                    <h1 class=" text-primary text-lg font-bold">Firebase</h1>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <div className="flex justify-center">
                      <i class="lni lni-laravel text-4xl icons border-primary border-3 rounded-full text-primary"></i>
                    </div>
                    <div className="flex justify-center">
                      <h1 class=" text-primary text-lg font-bold">Laravel</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <div className="flex justify-center">
                      <i class="lni lni-mysql text-4xl icons border-primary border-3 rounded-full text-primary"></i>
                    </div>
                    <div className="flex justify-center">
                      <h1 class=" text-primary text-lg font-bold">MySQL</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <div className="flex justify-center">
                      <i class="lni lni-flutter text-4xl icons border-primary border-3 rounded-full text-primary"></i>
                    </div>
                    <div className="flex justify-center">
                      <h1 class=" text-primary text-lg font-bold">Flutter</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <div className="flex justify-center">
                      <i class="text-center lni lni-mongodb text-4xl icons border-primary border-3 rounded-full text-primary"></i>
                    </div>
                    <div className="flex justify-center">
                      <h1 class="text-primary text-lg font-bold">MongoDB</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <div className="flex justify-center">
                      <i class="text-center lni lni-bootstrap text-4xl icons border-primary border-3 rounded-full text-primary"></i>
                    </div>
                    <h1 class="text-primary text-lg font-bold">Bootstrap</h1>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <div className="flex justify-center">
                      <i class="text-center lni lni-python text-4xl icons border-primary border-3 rounded-full text-primary"></i>
                    </div>
                    <h1 class="text-primary text-lg font-bold">Python</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
