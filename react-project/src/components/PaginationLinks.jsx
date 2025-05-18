export default function PaginationLinks({ meta, onPageClick }) {
  const onClick = (e, link) => {
    e.preventDefault();

    if (!link.url) {
      return;
    }

    onPageClick(link);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 shadow-md mt-4">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          onClick={(e) => onClick(e, meta.links[0])}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          onClick={(e) => onClick(e, meta.links[meta.links.length - 1])}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{meta.from}</span> to{" "}
            <span className="font-medium">{meta.to}</span> of{" "}
            <span className="font-medium">{meta.total}</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-xs"
          >
            {meta.links &&
              meta.links.map((link, index) => (
                <a
                  href="#"
                  key={index}
                  onClick={(e) => onClick(e, link)}
                  aria-current="page"
                  className={
                    "relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0 " +
                    (index === 0 ? "rounded-l-md " : "") +
                    (index === meta.links.length - 1 ? "rounded-r-md " : "") +
                    (link.active
                      ? "bg-indigo-600 text-white focus-visible:outline-indigo-600 focus-visible:outline-offset-2 focus:z-20 focus-visible:outline-2 hover "
                      : "hover:bg-gray-50")
                  }
                  dangerouslySetInnerHTML={{ __html: link.label }}
                ></a>
              ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
