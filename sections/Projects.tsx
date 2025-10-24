import { Picture, Source } from "apps/website/components/Picture.tsx"
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Animate from "../islands/Animate.tsx";

export interface Project {
  /**
   * @description Project title
   */
  label: string;
  company?: string;
  companyColor?: string;
  year?: string;
  comingSoon?: boolean;
  /**
   * @description Page link
   */
  href?: string;
  /**
   * @description Preview image
   */
  image?: LiveImage;
}

export interface Props {
  sectionTitle: string;
  projects: Project[];
}

export default function Projects({
  sectionTitle,
  projects,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1";
  const elementId = `element${Math.floor(Math.random() * Date.now())}`;

  return (
    <div
      id="projects"
      //class={`${classes} mt-20 container mx-auto md:mt-[124px] 2xl:(mt-[144px] mb-[20px]) lg:max-w-full delay-[800ms]`}
    >
      <div
        class={`container mx-auto md:w-[724px] lg:w-[825px] xl:w-[972px] md:mb-[80px]`}
      >
        {projects.map((item, index) => (
          <>
            {!item.comingSoon && (
              <div id={`project-${index}`} class={classes}>
                <Animate
                  id={[`project-${index}`]}
                  remove={["opacity-0", "translate-y-5", "skew-y-1"]}
                  event="elementVisible"
                  threshold={0.5}
                />
                <div
                  class={`${
                    index % 2 == 0 ? "items-start" : "items-end"
                  } mt-[80px] md:mt-[220px] flex flex-col`}
                >
                  <a href={item.href}>
                    <Picture>
                      <Source
                        src={item.image}
                        width={724}
                        height={408}
                      />
                      <img
                        src={item.image}
                        alt={item.label}
                        decoding="async"
                        srcset={`${item.image}`}
                      />
                    </Picture>
                  </a>
                </div>
                <div
                  class={`${
                    index % 2 == 0 ? "items-start" : "items-end"
                  } flex flex-col`}
                >
                  <a href={item.href}>
                    <h1
                      id={["projectCompany"]}
                      class="text-2xl md:mt-[25px] block md:w-[724px]"
                    >
                      <span
                        class={`font-medium block md:inline mr-4 pl-[20px] sm:pl-0 pt-[16px] sm:pt-0`}
                        style={{ color: item.companyColor ?? '' }}
                      >
                        {item.company}
                      </span>
                      <span
                        class={`font-medium block md:inline pl-[20px] sm:pl-0 pt-[4px] sm:pt-0`}
                      >
                        {item.label}
                      </span>
                    </h1>
                  </a>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
