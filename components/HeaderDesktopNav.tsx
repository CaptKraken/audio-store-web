import React from "react";
import links from "../lib/links";
import Link from "next/link";
import { useRouter } from "next/router";

export const HeaderDesktopNav = () => {
  const router = useRouter();
  const navigationLinks = links.navigationLinks;
  return (
    <div className={"hidden mt-4 md:flex justify-between items-center"}>
      <div className={"flex gap-4"}>
        {navigationLinks &&
          navigationLinks.map((item, i) => {
            const active: boolean = router.asPath === item.link;
            return (
              <Link key={i} href={`${item.link}`} passHref>
                <a
                  className={`cursor-pointer border-b-2 border-transparent ${
                    active ? "border-green-400" : "hover:border-green-400"
                  } transition-all`}
                >
                  {item.text}
                </a>
              </Link>
            );
          })}
      </div>
      <p>📞 +855 12 366 486</p>
    </div>
  );
};
