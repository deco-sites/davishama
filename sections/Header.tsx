import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Animate from "../islands/Animate.tsx";

export interface Link {
  label: string;
  href: string;
}

export interface Props {
  avatar: LiveImage;
  links?: Link[];
  hasColorBar?: boolean;
  animateHeader?: boolean;
}

export default function Header({
  avatar,
  links,
  hasColorBar,
  animateHeader,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1";

  return (
    <div>
      {animateHeader && (
        <Animate
          id={["logo", "menuLink"]}
          remove={["opacity-0", "translate-y-5", "skew-y-1"]}
        />
      )}
      <header
        class={`flex items-center justify-between px-5 fixed ${
          hasColorBar ? "top-6" : "top-5"
        } w-full z-30 md:px-6 lg:(px-8 ${hasColorBar ? "top-6" : "top-3"})`}
      >
        <div id="logo" class={`${animateHeader && classes} delay-[1200ms]`}>
          <a
            href="/"
            class={`flex gap-2 items-center hover:text-smooth duration-200`}
          >
            Davi Shamá
          </a>
        </div>
        <div class="flex gap-3">
          {links?.map(({ label, href }) => (
            <div
              id="menuLink"
              class={`${animateHeader && classes} delay-[1300ms]`}
            >
              <a
                class={`flex items-center py-2 hover:text-smooth hover:duration-200`}
                href={href}
              >
                {label}
                <img
                  src={avatar}
                  height="24"
                  width="24"
                  alt="Davi Shamá"
                  decoding="async"
                  loading="lazy"
                  class={`ml-3 -mt-1`}
                />
              </a>
            </div>
          ))}
        </div>
      </header>
      <div class="h-16 md:h-14"></div>
    </div>
  );
}
