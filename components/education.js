export default function Education() {
  return (
    <div className="bg-dasar font-ntr">
      <main className="min-h-screen md:pl-15% lg:pt-5% pt-30% pb-5% lg:pb-15% text-abugelap">
        <div id="education">
          <div className="fade-in-section is-visible">
            <div className="pb-42px flex">
              <span className="font-ntr text-32px lg:text-46px font-bold text-abu">/ education</span>
              <div className="md:w-300px w-[170px] h-1px md:mt-39px mt-[24px] ml-5 bg-abugaris" />
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
                      <span className="lg:block hidden text-ijo">School</span>
                      <span className="lg:hidden">School</span>
                    </button>
                    <button className="min-w-72px lg:min-w-160px max-w-264px py-1.5 px-3 min-h-48px relative uppercase tracking-wide text-left" tabindex="-1" type="button" role="tab" aria-selected="false" id="vertical-tab-1">
                      <span className="lg:block hidden">University</span>
                      <span className="lg:hidden">University</span>
                    </button>
                  </div>
                  <span className="jss3 jss5 MuiTabs-indicator jss6"></span>
                </div>
              </div>
              <div className="lg:-mt-28px lg:pl-25px">
                <div className="p-6 pb-0">
                  <p className="text-base m-0">
                    <span className="text-22px lg:text-28px font-bold text-abu">Sekolah Dasar </span>
                    <span className="text-22px lg:text-28px text-ijo font-bold">Imam Asy - Syafi'i</span>
                    <div className="text-18px">JUL 2011 - JUN 2017</div>
                    <ul className="pt-[12px] max-w-600px text-20px mb-4">
                      <div className="flex before:content-['▹'] before:text-ijo before:absolute">
                        <li className="text-18px pb-4 pl-30px relative">Jl. Delima Gg. Delima XII No.4, RW.1, Delima, Kec. Tampan, Kota Pekanbaru, Riau 28294</li>
                      </div>
                    </ul>
                  </p>
                </div>
                <div className="px-6">
                  <p className="text-base m-0">
                    <span className="text-22px lg:text-28px font-bold text-abu">Sekolah Menengah Pertama </span>
                    <span className="text-22px lg:text-28px text-ijo font-bold">Imam An - Nawawi</span>
                    <div className="text-18px">JUL 2017 - JUN 2020</div>
                    <ul className="pt-[12px] max-w-600px text-20px mb-4">
                      <div className="flex before:content-['▹'] before:text-ijo before:absolute">
                        <li className="text-18px pb-4 pl-30px relative">Jalan Marsan Sejahtera, RT.01/RW.06, Sidomulyo Barat, Tampan, Sidomulyo Bar., Kec. Tampan, Kota Pekanbaru, Riau 28293</li>
                      </div>
                    </ul>
                  </p>
                </div>
                <div className="px-6">
                  <p className="text-base m-0">
                    <span className="text-22px lg:text-28px font-bold text-abu">Sekolah Menengah Kejuruan </span>
                    <span className="text-22px lg:text-28px text-ijo font-bold">Smkn 2 Pekanbaru</span>
                    <div className="text-18px">
                      JUL 2020 - <span className="text-ijo font-medium">NOW</span>
                    </div>
                    <ul className="pt-[12px] max-w-600px text-20px mb-4">
                      <div className="flex before:content-['▹'] before:text-ijo before:absolute">
                        <li className="text-18px pb-4 pl-30px relative">Jl. Pattimura No.14, Cinta Raja, Kec. Sail, Kota Pekanbaru, Riau 28131</li>
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
