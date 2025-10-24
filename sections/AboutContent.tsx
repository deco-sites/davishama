import { Picture, Source } from "apps/website/components/Picture.tsx"
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Animate from "../islands/Animate.tsx";

export interface Paragraph {
  /**
   * @format textarea
   */
  text: string;
}

export interface LinkGroup {
  label: string;
  links: Link[];
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface Props {
  picture: LiveImage;
  title: string;
  paragraphs: Paragraph[];
  button: {
    label: string;
    /**
     * @format url
     */
    href: string;
  };
  linkGroups: LinkGroup[];
}

export default function AboutContent({
  picture,
  title,
  paragraphs,
  button,
  linkGroups,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1";

  return (
    <div class="mx-auto px-5 mt-16 md:(mt-20 w-[600px]) lg:(container px-[212px] flex px-24 mt-[138px]) 2xl:(mt-[120px] mb-[40px])">
      <div class="flex-none flex justify-center mb-16 lg:(block w-[425px])">
        <div id="profilePic" class={`${classes} delay-100`}>
          <Animate
            id={["profilePic"]}
            remove={["opacity-0", "translate-y-5", "skew-y-1"]}
            event="imageLoad"
            type="img"
          />
          <Picture>
            <Source
              media="(max-width: 767px)"
              src={picture}
              width={212}
              height={212}
            />
            <Source
              src={picture}
              width={260}
              height={260}
            />
            <img
              src={picture}
              alt={title}
              decoding="async"
              loading="lazy"
              srcset={`${picture} 2x`}
            />
          </Picture>
        </div>
      </div>
      <div class="flex-auto">
        <Animate
          id={["aboutTitle", "aboutText", "aboutButton"]}
          remove={["opacity-0", "translate-y-5", "skew-y-1"]}
        />
        <h1
          id="aboutTitle"
          class={`${classes} text-3xl leading-[1.18] font-medium mb-4 md:(mb-7 text-5xl) delay-100`}
        >
          {title}
        </h1>
        <div id="aboutText" class={`${classes} delay-[300ms]`}>
          {paragraphs.map((paragraph) => (
            <p class="mb-10 text-xl text-subdued leading-[1.7]">
              {paragraph.text}
            </p>
          ))}
        </div>
        <div id="aboutButton" class={`${classes} pt-2 delay-[500ms]`}>
          <a
            href={button.href}
            target="_blank"
            class="inline-block bg-black text-white px-[25px] py-[13px] font-medium border-[3px] border-black hover:(text-black bg-transparent) duration-200"
          >
            {button.label}
          </a>
        </div>
        <div class="flex flex-col text-xl mt-20 gap-12 md:(gap-0 mt-28 flex-row)">
          {linkGroups.map((group, i) => (
            <div class={`flex-none ${i % 2 == 0 && "md:w-[344px]"}`}>
              <h2 class="font-medium pb-1">{group.label}</h2>
              {group.links.map((link) => (
                <a
                  class="flex items-baseline gap-2 mt-3 text-subdued hover:text-subsubdued hover:duration-200"
                  href={link.href}
                  target={link.external ? "_blank" : ""}
                >
                  <div>{link.label}</div>
                  {link.external && (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7019 3.358L2.39151 11.6767L1.334 10.6133L9.64704 2.29838L10.0737 1.87163H9.47024L3.94088 1.87163V0.249535L12.7505 0.249535V9.06594H11.1288V3.53469V2.93071L10.7019 3.358Z"
                        fill="currentColor"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
