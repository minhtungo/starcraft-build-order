import Link from "next/link";
import React from "react";
import classNames from "classnames";

const Card = ({
  raceImageSrc,
  raceName,
  href,
  isOpponent,
}: {
  raceImageSrc: string;
  raceName: string;
  href: string;
  isOpponent?: boolean;
}) => {
  return (
    <div className="max-w-[15rem] rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <Link href="#">
        <img className="rounded-t-lg" src={raceImageSrc} alt="" />
      </Link>
      <div className="p-5">
        <Link
          href={href}
          className={classNames(
            "inline-flex items-center rounded-lg  px-3 py-2 text-center text-sm font-medium  text-white   focus:outline-none focus:ring-4 focus:ring-blue-800",
            isOpponent
              ? "bg-red-700 hover:bg-red-800"
              : "bg-blue-600 hover:bg-blue-700"
          )}
        >
          {raceName}
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
