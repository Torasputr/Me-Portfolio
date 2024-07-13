import React from "react";

function Contacts() {
  return (
    <>
      <div className="bg-secondary p-20">
        <div className="p-20 w-full rounded-3xl bg-gradient-to-tr from-gradient-start to-gradient-end">
          <h1 className="text-center text-white text-6xl font-bold">
            Let's Make Your{" "}
            <span className="text-primary">Idea a Reality!</span>
          </h1>
          <h1 className="text-center text-white text-3xl font-bold py-5">
            <span className="text-primary">Discuss With Me</span> About Your
            Dream Project!
          </h1>
          <div class="text-4xl flex justify-evenly pt-10">
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
    </>
  );
}

export default Contacts;
