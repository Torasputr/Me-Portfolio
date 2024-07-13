import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end w-full">
        <div className="grid grid-cols-3 items-center px-20 gap-20">
          {/* Left Column */}
          <div className="col-span-2">
            <div className="pt-10 pb-12">
              <h1 className="text-6xl font-bold text-white">
                Hello! I'm <span className="text-primary">Tootnoot!</span>
              </h1>
              <h1 className="text-4xl font-bold text-white pb-4">
                I'm a <span className="text-primary">Fullstack Developer</span>
              </h1>
              <h1 className="text-white text-xl text-justify">
                I'm a passionate full stack developer with over 5 years of
                experience building dynamic, responsive, and user-friendly web
                applications. I thrive on tackling complex problems and turning
                ideas into reality.
              </h1>
              <div className="flex justify-center py-5">
                <button className="text-gradient-end text-xl pb-2 border-2 border-white bg-white rounded-full px-5 py-1 my-5 hover:scale-110 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                  Download CV
                </button>
              </div>
              <div class="text-4xl flex justify-evenly">
                <a
                  href="https://github.com/Torasputr"
                  class="border-3 border-primary rounded-full icons hover:bg-white hover:border-white text-primary hover:text-gradient-end transition-all duration-300ms"
                >
                  <i class="lni lni-github-original"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/tora-sangputra-yopie-winarto-a43337220/"
                  class="border-3 border-primary rounded-full icons hover:bg-white hover:border-white text-primary hover:text-gradient-end transition-all duration-300ms"
                >
                  <i class="lni lni-linkedin-original"></i>
                </a>
                <a
                  href="https://discordapp.com/users/403349187753672725"
                  class="border-3 border-primary rounded-full icons hover:bg-white hover:border-white text-primary hover:text-gradient-end transition-all duration-300ms"
                >
                  <i class="lni lni-discord-alt "></i>
                </a>
                <a
                  href=""
                  class="border-3 border-primary rounded-full icons hover:bg-white hover:border-white text-primary hover:text-gradient-end transition-all duration-300ms"
                >
                  <i class="lni lni-whatsapp "></i>
                </a>
                <a
                  href="https://www.instagram.com/torasputr/"
                  class="border-3 border-primary rounded-full icons hover:bg-white hover:border-white text-primary hover:text-gradient-end transition-all duration-300ms"
                >
                  <i class="lni lni-instagram-original "></i>
                </a>
              </div>
            </div>
          </div>
          {/* Left Column */}
          {/* Right Column */}
          <div className="col-span-1 py-20">
            <img src="/src/assets/images/hero.png" alt="" />
          </div>
          {/* Right Column */}
        </div>
      </div>
    </>
  );
}

export default Hero;
