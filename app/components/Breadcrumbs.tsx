import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  items: {
    title: string | undefined;
    path: string;
  }[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <Link
              href={item.path}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              {item.path === "/" ? (
                <HomeIcon className="w-4 h-4 mr-4" />
              ) : (
                <ChevronRightIcon className="w-4 h-4 mr-4" />
              )}

              {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
