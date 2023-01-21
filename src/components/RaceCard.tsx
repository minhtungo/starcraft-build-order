import Link from "next/link";
import React from "react";
import classNames from "classnames";
import Image from "next/image";

const Card = ({
  raceImageSrc,
  raceName,
  href,
  isOpponent,
  matchUp,
}: {
  raceImageSrc: string;
  raceName: string;
  href: string;
  isOpponent?: boolean;
  matchUp: string;
}) => {
  const raceImageMap: Record<string, string> = {
    z: "/zerg.webp",
    t: "/terran.webp",
    p: "/protoss.jpg",
  };

  const [yourRaceLetter, opponentRaceLetter] = matchUp.split("v") as [
    string,
    string
  ];

  const yourRaceImage = raceImageMap[yourRaceLetter]!;
  const opponentRaceImage = raceImageMap[opponentRaceLetter]!;

  return (
    <div className="max-w-[15rem] rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-2">
        <Image
          className="w-full rounded-t-lg"
          src={yourRaceImage}
          alt=""
          height={200}
          width={200}
        />
        vs
        <Image
          className="w-full rounded-t-lg"
          src={opponentRaceImage}
          alt=""
          height={200}
          width={200}
        />
      </div>

      <div className="flex items-center justify-center p-5">
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
        </Link>
      </div>
    </div>
  );
};

export default Card;
