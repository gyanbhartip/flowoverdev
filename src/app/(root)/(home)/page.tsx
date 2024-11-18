import LocalSearch from "_/components/common/search/LocalSearch";
import { Button } from "_/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row">
        <h1 className="h1-bold text-dark100_light900">All questions</h1>
        <Link className="flex justify-end max-sm:w-full" href="/ask-question">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          placeholder="Search for questions"
          otherClasses="flex-1"
          route="/"
        />
        <span>Filters</span>
      </div>
    </>
  );
}
