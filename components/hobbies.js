import Card from "./card-hobbies";

export default function Hobbies() {
  return (
    <div id="hobbies" className="bg-dasar font-ntr">
      <main className="min-h-screen md:pl-15% pt-80 md:pr-12 lg:pr-17% lg:pt-5% pb-5% text-abugelap">
        <div className="pb-42px flex">
          <span className="font-ntr text-32px lg:text-46px font-bold text-abu">/ hobbies</span>
          <div className="lg:block hidden w-300px h-1px mt-39px ml-5 bg-abugaris" />
        </div>
        <div className="project-container">
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-2.5 gap-5">
            <Card img={"/football.jpg"} title="Football" desc="the word football normally means the form of football that is the most popular where the word is used." />
            <Card img={"/coding.jpg"} title="Coding" desc="Process of performing a particular computation usually by designing and building an executable computer program." />
            <Card img={"/watch.jpg"} title="Watch a Movie" desc="watching movies is more than just a hobby, but generally talking." />
          </ul>
        </div>
      </main>
    </div>
  );
}
