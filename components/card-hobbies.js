export default function Card({ img, title, desc }) {
  return (
    <div className="">
      <li className="h-full cursor-default flex flex-col py-8 px-7 rounded-2xl bg-navy hover:bg-hover duration-500 hover:-translate-y-2 ">
        <div className="flex justify-between py-5 -mt-5">
          <div className="folder-icon">
            <img src={img} className="rounded-xl" />
          </div>
          {/* <span className="flex">
            <a className="github-icon" href="#">
              <svg className="fill-abu w-5 mt-1.5" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
              </svg>
            </a>
            <a className="ml-2" href="#">
              <svg className="fill-abu w-7 mt-0.5" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path>
              </svg>
            </a>
          </span> */}
        </div>
        <div className="font-bold text-ijo text-24px mb-1">{title}</div>

        <div className="text-18px mb-4">{desc}</div>
      </li>
    </div>
  );
}
