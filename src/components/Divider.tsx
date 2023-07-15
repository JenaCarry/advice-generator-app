import Image from "next/image";

export function Divider() {
  return (
    <picture className="flex justify-center">
      <source
        media="(min-width: 481px)"
        srcSet="/pattern-divider-desktop.svg"
        type="image/svg+xml"
        width="444"
        height="16"
      />
      <Image
        src="/pattern-divider-mobile.svg"
        alt="Pattern Divider"
        width="295"
        height="16"
      />
    </picture>
  );
}
