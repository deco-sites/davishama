export interface Props {
  title: string;
  /** @format textarea */
  text: string;
  dividerColor: string;
}

export default function ProjectHighlight({ title, text, dividerColor }: Props) {
  return (
    <div class="mx-auto pt-[100px] pb-[160px] md:(pt-[200px] pb-[300px]) text-center max-w-[914px]">
      <div class="text-subdued text-xl leading-[1.5] mb-4 md:mb-7">{title}</div>
      <div class="font-medium text-2xl px-4 md:(px-0 text-[40px]) leading-[1.4] tracking-[-0.5%] mb-12 md:mb-20">
        {text}
      </div>
      <div class={`bg-[${dividerColor}] h-[6px] mx-auto w-1/2 md:w-[682px]`}>
      </div>
    </div>
  );
}
