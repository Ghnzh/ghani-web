// import Sidebar from "./sidebar";

export default function Home() {
  return (
    <div id="home" className="text-white bg-dasar font-ntr md:text-left text-center">
      <main className="min-h-screen md:pl-15% md:pt-5% text-abu">
        <div className="pt-12 md:pt-16 pl-[27%] md:pl-0 pb-4 md:pb-0">
          <img src="/profil instagram.jpg" className="bg-ijo rounded-full w-28 ml-4" />
        </div>
        <span className="font-ntr text-46px md:text-86px ">
          hi, <span className="font-bold text-ijo">ghani</span> here.
        </span>
        <span className="text-ijo text-46px md:text-86px opacity-100 animate-blink">|</span>
        <div className="fade-in-section is-visible text-abugelap">
          <div className="md:-mt-9 text-light text-28px md:text-55px">I create stuff sometimes.</div>
          <div className="text-18px md:text-20px md:max-w-55% pb-10">
            I'm a software engineer and artist based in Indonesia. I have profound interest in full-stack development, machine learning, human-computer interactions, and everything in between.
          </div>
          <a href="mailto:ghani.azh@gmail.com" className="md:m-0 m-auto scale-90 md:scale-100 h-16 w-150px items-center flex border-1 border-ijo rounded px-5 py-2.5 hover:bg-hover">
            <svg className="w-7 h-7 fill-ijo" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
            </svg>
            <span className="text-ijo text-22px pl-1">Say hello</span>
          </a>
        </div>
      </main>
    </div>
  );
}
