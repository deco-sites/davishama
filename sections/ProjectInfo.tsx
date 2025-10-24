import { Picture, Source } from "apps/website/components/Picture.tsx"
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Animate from "../islands/Animate.tsx";

export interface Props {
  title: string;
  titleLine2?: string;
  /**
   * @format textarea
   */
  text?: Array<Paragraph>;
  removeGap?: boolean;
  extraContent?: {
    image?: LiveImage;
    title?: string;
    text?: Array<Paragraph>;
  };
  metrics?: Array<Metric>;
  backedBy?: Array<Brand>;
  hasBorder?: boolean;
}

export interface Paragraph {
  /**
   * @format textarea
   */
  text: string;
}

export interface Metric {
  number: string;
  text: string;
}

export interface Brand {
  image: LiveImage;
  alt: string;
}

export default function ProjectInfo({
  title,
  titleLine2,
  text,
  removeGap,
  extraContent,
  metrics,
  backedBy,
  hasBorder,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1";
  const elementId = `element${Math.floor(Math.random() * Date.now())}`;

  return (
    <div
      id={elementId}
      class={`${classes} py-12 md:py-20 lg:flex mx-5 md:(mx-auto max-w-[600px]) lg:(container px-0 py-[100px]) ${
        hasBorder && "border-b border-b-subdued delay-[300ms]"
      }`}
    >
      <Animate
        id={[elementId]}
        remove={["opacity-0", "translate-y-5", "skew-y-1"]}
        event="elementVisible"
        threshold={0.5}
      />
      <div class="flex-none font-medium text-2xl leadint-[1.4] mb-5 md:mb-7 lg:(pl-[126px] w-[375px])">
        <div class="flex flex-row gap-2 lg:(gap-0 flex-col w-[170px])">
          <span>{title}</span>
          {titleLine2 && <span>{titleLine2}</span>}
        </div>
      </div>
      <div class="flex flex-col gap-8 md:gap-12 lg:w-[724px]">
        {text?.length > 0 && (
          <div
            class={`${
              removeGap ? "" : "gap-6"
            } flex-none text-xl  text-subdued flex flex-col leading-[1.7]`}
          >
            {text.map((p) => {
              return <p>{p.text}</p>;
            })}
          </div>
        )}
        {extraContent && (
          <div class="flex-none text-xl gap-5 text-subdued flex flex-col leading-[1.7]">
            {extraContent.image && (
              <div class="mt-3 mb-11">
                <Picture>
                  <Source
                    src={extraContent.image}
                  />
                  <img
                    src={extraContent.image}
                    alt={extraContent.title}
                    decoding="async"
                    loading="lazy"
                    srcset={`${extraContent.image} 2x`}
                  />
                </Picture>
              </div>
            )}
            {extraContent.title && (
              <div class="font-medium text-black">{extraContent.title}</div>
            )}
            {extraContent?.text?.length > 0 && (
              <div class="flex-none text-xl gap-6 text-subdued flex flex-col leading-[1.7]">
                {extraContent?.text.map((p) => {
                  return <p>{p.text}</p>;
                })}
              </div>
            )}
          </div>
        )}
        {metrics?.length > 0 && (
          <div
            class={`${
              removeGap ? "" : "gap-x-6 gap-y-10 md:gap-y-12"
            } -mt-1 flex-none text-xl grid grid-cols-1 md:grid-cols-2`}
          >
            {metrics.map((m) => {
              return (
                <div>
                  <div class="font-medium text-[72px] leading-[1.16] tracking-[-0.015em] flex">
                    <span>{m.number}</span>
                    <span class="text-[44px] pt-[1px]">%</span>
                  </div>
                  <div class="text-xl text-subdued leading-[1.7]">{m.text}</div>
                </div>
              );
            })}
          </div>
        )}
        {backedBy?.length > 0 && (
          <div class="flex flex-col gap-3">
            <div class="text-subsubdued leading-[1.7]">Backed by</div>
            <div class="flex flex-col gap-6 md:(flex-row gap-16 items-center)">
              {backedBy.map((brand) => {
                return (
                  <div>
                    <Picture>
                      <Source
                        media="(min-width: 768px)"
                        src={brand.image}
                      />
                      <img
                        src={brand.image}
                        alt={brand.alt}
                        decoding="async"
                        loading="lazy"
                        srcset={`${brand.image} 2x`}
                      />
                    </Picture>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
