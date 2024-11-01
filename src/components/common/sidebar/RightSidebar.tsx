import Image from "next/image";
import Link from "next/link";

const RightSidebar = () => {
  return (
    <div className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen min-h-screen flex-col gap-14 overflow-y-auto border-l px-6 pb-8 pt-36 text-dark-500 shadow-light-300 dark:text-light-700 dark:shadow-none max-lg:max-w-[340px] max-sm:hidden lg:w-[340px]">
      <div>
        <h3 className="h3-bold mb-6">Hot Network</h3>
        <div className="flex flex-col">
          {TEST_DATA.NETWORK_LINKS.map((link) => (
            <Link
              className="mb-7 flex items-start"
              key={link.route}
              href={link.route}
            >
              <p>{link.title}</p>
              <Image
                alt={link.title}
                height={20}
                src={"/assets/icons/chevron-right.svg"}
                width={20}
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="h3-bold mb-6">Popular Tags</h3>
        <div className="flex flex-col">
          {TEST_DATA.TAGS.map((tag) => (
            <Link
              className="mb-7 flex items-center justify-between"
              href={tag.route}
              key={tag.route}
            >
              <p className="background-light800_dark300 rounded-md px-4 py-2 text-light-400 dark:text-light-500">
                {tag.title}
              </p>
              <p className="text-dark-500 dark:text-light-700">{tag.count}+</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
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
