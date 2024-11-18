import Image from "next/image";
import Link from "next/link";

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Hot Network</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {TEST_DATA.NETWORK_LINKS.map((link) => (
            <Link
              className="flex cursor-pointer items-center justify-between gap-7"
              key={link.route}
              href={link.route}
            >
              <p className="body-medium text-dark500_light700">{link.title}</p>
              <Image
                alt={link.title}
                className="invert-colors"
                height={20}
                src={"/assets/icons/chevron-right.svg"}
                width={20}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {TEST_DATA.TAGS.map((tag) => (
            <Link
              className="flex justify-between gap-2"
              href={tag.route}
              key={tag.route}
            >
              <p className="subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300">
                {tag.title}
              </p>
              <p className="small-medium text-dark500_light700">{tag.count}+</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;

const TEST_DATA = {
  NETWORK_LINKS: [
    {
      title:
        "Would it be appropriate to point out an error in another paper during a referee report?",
      route: "/network1",
    },
    {
      title: "How can an airconditioning machine exist?",
      route: "/network2",
    },
    {
      title: "Interrogated every time crossing UK Border as citizen",
      route: "/network3",
    },
    {
      title: "Low digit addition generator",
      route: "/network4",
    },
    {
      title: "What is an example of 3 numbers that do not make up a vector?",
      route: "/network5",
    },
  ],
  TAGS: [
    {
      title: "javascript",
      route: "/javascript",
      count: 9999,
    },
    {
      title: "reactjs",
      route: "/reactjs",
      count: 9999,
    },
    {
      title: "python",
      route: "/python",
      count: 9999,
    },
    {
      title: "nodejs",
      route: "/nodejs",
      count: 9999,
    },
    {
      title: "typescript",
      route: "/typescript",
      count: 9999,
    },
  ],
} as const;
