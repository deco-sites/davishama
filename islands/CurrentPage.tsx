import Animate from "./Animate.tsx";
import Marquee from "./Marquee.tsx";

export interface Props {
  pages: string[];
}

export default function CurrentPage({
  pages,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1";

  let next = pages[0];
  pages?.forEach((page, i) => {
    if (page === window?.location?.pathname && i < pages.length - 1) {
      next = pages[i + 1];
    }
  });
  return (
    <div class="border-y border-[#D9D9D9] mt-10 py-[94px] md:(mt-[100px] py-[112px]) lg:(mt-[90px])">
      <div
        id="navText"
        class={`whitespace-nowrap flex w-full overflow-hidden text-[40px] md:text-[64px]`}
      >
        <div class="">
          go to next project &nbsp;— &nbsp;go to next project &nbsp;— &nbsp;
        </div>
      </div>
      <div
        id="navButton"
        class={`${classes} mt-8 flex justify-center delay-[100ms]`}
      >
        <a
          href={next}
          class="inline-block bg-black text-white px-[25px] py-[13px] font-medium border-[3px] border-black md:hover:(text-black bg-transparent) duration-200"
        >
          Next Project
        </a>
      </div>
      <Animate
        id={["navButton"]}
        remove={["opacity-0", "translate-y-5", "skew-y-1"]}
        event="elementVisible"
        threshold={0.5}
      />
      <Marquee id={["navText"]} />
    </div>
  );
}
