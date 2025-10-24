export interface Props {
  height: string;
}

export default function Spacer({ height }: Props) {
  return <div class={`h-[${height}] w-full`}></div>;
}
