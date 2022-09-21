export default function Experience() {
  return (
    <div className="bg-dasar font-ntr">
      <main className="min-h-screen md:pl-15% lg:pt-5% pt-[60%] pb-5% lg:pb-15% text-abugelap">
        <div id="experience">
          <div className="fade-in-section is-visible">
            <div className="pb-42px flex">
              <span className="font-ntr text-32px lg:text-46px font-bold text-abu">/ experience</span>
              <div className="md:w-300px w-[140px] h-1px md:mt-39px mt-[24px] ml-5 bg-abugaris" />
            </div>
            <div className="jss1 h-300px lg:flex grow">
              <div className="lg:border-r-1 border-solid border-navy flex-col flex overflow-hidden">
                <div className="MuiTabs-scrollable"></div>
                <div className="mb-0 flex-auto inline-block relative flex-nowrap">
                  <div className="flex lg:flex-col" role="tablist">
                    <button
                      className="min-w-72px lg:min-w-160px max-w-264px py-1.5 px-3 min-h-48px relative uppercase tracking-wide text-left lg:border-0 lg:border-r-1 border-b-2 border-solid border-ijo active:bg-ijo"
                      tabindex="0"
                      type="button"
                      role="tab"
                      aria-selected="true"
                      id="vertical-tab-0"
                    >
                      <span className="lg:block hidden text-ijo">Non-Academic</span>
                      <span className="lg:hidden">Non-Academic</span>
                    </button>
                    <button className="min-w-72px lg:min-w-160px max-w-264px py-1.5 px-3 min-h-48px relative uppercase tracking-wide text-left" tabindex="-1" type="button" role="tab" aria-selected="false" id="vertical-tab-4">
                      <span className="lg:block hidden">Academic</span>
                      <span className="lg:hidden">Academic</span>
                    </button>
                  </div>
                  <span className="jss3 jss5 MuiTabs-indicator jss6"></span>
                </div>
              </div>
              <div className="lg:-mt-28px lg:pl-25px">
                <div className="p-6 pb-0">
                  <p className="text-base m-0">
                    <span className="text-22px lg:text-28px font-bold text-abu">Member of </span>
                    <span className="text-22px lg:text-28px text-ijo font-bold">Pekanbaru City Soccer School</span>
                    <div className="text-18px">OKT 2017 - DES 2017</div>
                    <ul className="pt-24px max-w-600px text-20px mb-4">
                      <div className="flex before:content-['▹'] before:text-ijo before:absolute">
                        <li className="text-18px pb-4 pl-30px relative">Jl. Pinang, Wonorejo, Pekanbaru, Kota Pekanbaru, Indonesia 28128</li>
                      </div>
                    </ul>
                  </p>
                </div>
                <div className="px-6">
                  <p className="text-base m-0">
                    <span className="text-22px lg:text-28px font-bold text-abu capitalize">the champion of the </span>
                    <span className="text-22px lg:text-28px text-ijo font-bold capitalize">futsal competition</span>
                    <div className="text-18px">NOV 2018</div>
                    <ul className="pt-24px max-w-600px text-20px mb-4">
                      <div className="flex before:content-['▹'] before:text-ijo before:absolute">
                        <li className="text-18px pb-4 pl-30px relative">SMP Islam Al Azhar 37 Pekanbaru Jl. Swakarya No.17, Tuah Karya, Kec. Tampan, Kota Pekanbaru Prov. Riau</li>
                      </div>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
