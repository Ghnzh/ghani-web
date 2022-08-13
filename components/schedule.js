export default function Schedule() {
  return (
    <div className="bg-dasar font-ntr">
      <main className="min-h-screen md:pl-15% lg:pt-5% pt-[450px] pb-5% lg:pb-5% text-abugelap">
        <div id="schedule">
          <div className="fade-in-section is-visible">
            <div className="pb-42px flex">
              <span className="font-ntr text-32px lg:text-46px font-bold text-abu">/ schedule school</span>
              <div className="md:w-300px w-[80px] h-1px md:mt-39px mt-[24px] ml-5 bg-abugaris" />
            </div>
            <div className="jss1 lg:flex grow cursor-pointer">
              <div className="overflow-x-auto relative">
                <table className="w-full text-xl text-left">
                  <thead className="border-b border-ijo">
                    <tr>
                      <th scope="col" className="py-3 px-4 lg:px-8 border-r border-ijo">
                        Senin
                      </th>
                      <th scope="col" className="py-3 px-4 lg:px-8 border-r border-ijo">
                        Selasa
                      </th>
                      <th scope="col" className="py-3 px-4 lg:px-8 border-r border-ijo">
                        Rabu
                      </th>
                      <th scope="col" className="py-3 px-4 lg:px-8 border-r border-ijo">
                        Kamis
                      </th>
                      <th scope="col" className="py-3 px-4 lg:px-8">
                        Jumat
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="border-b border-ijo">
                      <td scope="row" className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">
                        PBO
                      </td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">Matematika</td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">PKKWU</td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">PWPB</td>
                      <td className="py-4 px-4 lg:px-8 hover:text-black hover:font-semibold hover:bg-ijo">Basis Data</td>
                    </tr>
                    <tr className="border-b border-ijo">
                      <td scope="row" className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">
                        PKKWU
                      </td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">Bahasa Jepang</td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">PWPB</td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">PWPB</td>
                      <td className="py-4 px-4 lg:px-8 hover:text-black hover:font-semibold hover:bg-ijo">Bahasa Indonesia</td>
                    </tr>
                    <tr className="border-b border-ijo">
                      <td scope="row" className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">
                        Bahasa Inggris
                      </td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">PBO</td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">Agama</td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo hover:text-black hover:font-semibold hover:bg-ijo">PWPB</td>
                      <td className="py-4 px-4 lg:px-8 hover:text-black hover:font-semibold hover:bg-ijo">PPKN</td>
                    </tr>
                    <tr className="">
                      <td scope="row" className="py-4 px-4 lg:px-8 border-r border-ijo"></td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo"> </td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo"> </td>
                      <td className="py-4 px-4 lg:px-8 border-r border-ijo"> </td>
                      <td className="py-4 px-4 lg:px-8 "> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
