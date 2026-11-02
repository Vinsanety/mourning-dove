import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col items-start justify-center px-6 py-24 md:px-10 lg:px-16">
      <p className="eyebrow text-honey-mark">404</p>
      <h1 className="section-title mt-5">This table is empty.</h1>
      <p className="mt-6 max-w-md text-xl leading-9 text-moss">
        That page is not on the menu. Head home, or find a seat at the bar.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-5 rounded-full bg-honey py-2.5 pr-2.5 pl-6 text-base font-semibold text-forest transition hover:bg-[#f0c780]"
        >
          Back home
          <span className="grid size-10 place-items-center rounded-full bg-forest text-lg text-white">→</span>
        </Link>
        <Link
          href="/#visit"
          className="inline-flex items-center border-b border-forest pb-1 text-base font-bold"
        >
          Visit us
        </Link>
      </div>
    </div>
  );
}
