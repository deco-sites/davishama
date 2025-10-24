export interface Props {
  path: string;
}

export default function ActiveLink({
  path,
}: Props) {
  return (
    <div>
      {window?.location?.pathname == path && (
        <svg
          class="absolute block mt-2"
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="2" r="2" fill="black" />
        </svg>
      )}
    </div>
  );
}
