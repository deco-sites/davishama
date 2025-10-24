import { Picture, Source } from "apps/website/components/Picture.tsx"
import {
  ImageWidget as LiveImage,
  VideoWidget as LiveVideo,
} from "apps/admin/widgets.ts";
import Video from "apps/website/components/Video.tsx";
import Animate from "../islands/Animate.tsx";

export interface Banner {
  alt: string;
  image?: LiveImage;
  videoMp4?: {
    video?: LiveVideo;
  };
  videoWebm?: {
    video?: LiveVideo;
  };
  expand?: boolean;
  /**
   * @description Also adds a 30px mobile padding to x axis
   */
  padding?: {
    sm?: {
      top?: string;
      bottom?: string;
      xAxis?: string;
    };
    md?: {
      MdTop?: string;
      MdBottom?: string;
      xAxis?: string;
    };
    lg?: {
      LgTop?: string;
      LgBottom?: string;
      xAxis?: string;
    };
  };
  bgColor?: string;
  widthOnTablet?: string;
  animationTrigger?: "elementVisible" | "pageLoad" | "imageLoad";
  preload?: boolean;
}

export interface Props {
  banners: Banner[];
}

export default function Projects({
  banners,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1";
  const elementId = `element${Math.floor(Math.random() * Date.now())}`;

  return (
    <div class={`container mx-auto mb-5 flex flex-col gap-5 md:(flex-row)`}>
      {banners.map((banner, i) => (
        <div
          id={elementId + i}
          class={`${classes} delay-[300ms] md:(items-center justify-center flex w-full px-0)
            ${banner.bgColor ? `bg-[${banner.bgColor}]` : ""}
            ${banner.expand ? `flex-auto` : `flex-none`}
            ${banner.widthOnTablet ? `md:w-[${banner.widthOnTablet}]` : ""}
            ${`pt-[${banner.padding?.sm?.top ? banner.padding.sm.top : "0"}]`}
            ${`pb-[${
            banner.padding?.sm?.bottom ? banner.padding.sm.bottom : "0"
          }]`}
            ${`md:pt-[${
            banner.padding?.md?.MdTop ? banner.padding.md.MdTop : "0"
          }]`}
            ${`md:pb-[${
            banner.padding?.md?.MdBottom ? banner.padding.md.MdBottom : "0"
          }]`}
            ${`lg:pt-[${
            banner.padding?.lg?.LgTop ? banner.padding.lg.LgTop : "0"
          }]`}
            ${`lg:pb-[${
            banner.padding?.lg?.LgBottom ? banner.padding.lg.LgBottom : "0"
          }]`}
            ${`px-[${
            banner.padding?.sm?.xAxis ? banner.padding.sm.xAxis : "0"
          }]`}
            ${`md:px-[${
            banner.padding?.md?.xAxis ? banner.padding.md.xAxis : "0"
          }]`}
            ${`lg:px-[${
            banner.padding?.lg?.xAxis ? banner.padding.lg.xAxis : "0"
          }]`}
          `}
        >
          <Animate
            type={banner.videoMp4?.video ? "video" : "img"}
            id={[elementId + i]}
            remove={["opacity-0", "translate-y-5", "skew-y-1"]}
            event={banner.animationTrigger
              ? banner.animationTrigger
              : "elementVisible"}
          />
          {banner.videoMp4?.video &&
            (
              <Video
                src={banner.videoMp4.video}
                loop={true}
                playsInline={true}
                autoPlay={true}
                muted={true}
                class="w-full"
                loading="eager"
              >
                {banner.videoWebm?.video &&
                  (
                    <Source
                      id={elementId + "webm"}
                      src={banner.videoWebm.video}
                      type="video/webm"
                    />
                  )}
                <Source
                  id={elementId + "mp4"}
                  src={banner.videoMp4.video}
                  type="video/mp4"
                />
              </Video>
            )}
          {banner.image && !banner.videoMp4?.video &&
            (
              <Picture>
                <Source
                  src={banner.image}
                />
                <img
                  preload={banner.preload}
                  src={banner.image}
                  alt={banner.alt}
                  decoding="async"
                  srcset={`${banner.image} 2x`}
                />
              </Picture>
            )}
        </div>
      ))}
    </div>
  );
}
