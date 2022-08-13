export default function About() {
  return (
    <div id="about" className="text-white bg-dasar font-ntr">
      <main className="min-h-screen md:pl-15% md:pt-5% pt-25% md:pr-25% text-abu">
        <div className="pb-42px flex">
          <span className="font-ntr text-32px lg:text-46px font-bold">/ about me</span>
          <div className="md:w-300px w-[170px] h-1px md:mt-39px mt-[24px] ml-5 bg-abugaris" />
        </div>
        <div className="flex">
          <div className="text-abugelap m-0 text-20px max-w-700px">
            <p className="mb-4">
              I am currently studying <b>Computer Science</b> at <br />{" "}
              <a href="https://smkn2-pekanbaru.sch.id/index.php/en/" className="text-ijo font-semibold">
                Smkn 2 Pekanbaru
              </a>{" "}
              , with a focus in Software Systems. Last year, I was on a one year internship at{" "}
              <a href="https://rsiazainab.co.id" className="text-ijo font-semibold">
                Tabrani Group
              </a>{" "}
              as a <b>Software Engineer</b>.
            </p>
            <p className="mb-4">
              I'm into any sort of <b>software development</b> that requires creativity. My other areas of interest include <b>machine learning</b>, <b>human-computer interactions</b> and <b>frontend development</b>. I also like the{" "}
              <b>UI/UX</b>. In my free time, I eat guava fruit and play video games, also expand my portfolio.
            </p>
            Here are some technologies I have been working with:
            <ul className="grid grid-cols-cardtech pt-5 text-18px">
              <div className="fade-in-section is-visible">
                <li className="before:content-['▹'] before:text-ijo"> Javascript ES6+</li>
              </div>
              <div className="fade-in-section is-visible">
                <li className="before:content-['▹'] before:text-ijo"> Tailwind</li>
              </div>
              <div className="fade-in-section is-visible">
                <li className="before:content-['▹'] before:text-ijo"> React.js</li>
              </div>
              <div className="fade-in-section is-visible">
                <li className="before:content-['▹'] before:text-ijo"> Java</li>
              </div>
              <div className="fade-in-section is-visible">
                <li className="before:content-['▹'] before:text-ijo"> Next.js</li>
              </div>
              <div className="fade-in-section is-visible">
                <li className="before:content-['▹'] before:text-ijo"> HTML &amp; CSS</li>
              </div>
            </ul>
          </div>
          <div className="hidden relative lg:block pl-10 ">
            <img
              src="/profil.jpg"
              className="max-w-300px h-auto hover:-translate-y-2 duration-500 
            rounded-xl border-2 border-ijo "
            />
          </div>
        </div>
      </main>
    </div>
  );
}
