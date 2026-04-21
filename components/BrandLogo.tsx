import Image from "next/image";
import Link from "next/link";
import { cn } from "@/components/cn";

type BrandLogoProps = {
  href?: string;
  variant?: "compact" | "full";
  tone?: "transparent" | "colored";
  className?: string;
  compactWidth?: number;
  compactHeight?: number;
  fullWidth?: number;
  fullHeight?: number;
};

export function BrandLogo({
  href = "/",
  variant = "compact",
  tone = "transparent",
  className,
  compactWidth = 132,
  compactHeight = 48,
  fullWidth = 186,
  fullHeight = 68
}: BrandLogoProps) {
  const isFull = variant === "full";
  const fullSrc = tone === "colored" ? "/brand/colored-logo.svg" : "/brand/transparent-logo.svg";

  return (
    <Link href={href} className={cn("inline-flex items-center", className)} aria-label="ARRIVIO homepage">
      {isFull ? (
        <Image
          src={fullSrc}
          alt="ARRIVIO logo"
          width={fullWidth}
          height={fullHeight}
          className="h-auto w-[150px] object-contain sm:w-[170px]"
          priority
        />
      ) : (
        <Image
          src={fullSrc}
          alt="ARRIVIO logo"
          width={compactWidth}
          height={compactHeight}
          className="h-auto w-[112px] object-contain sm:w-[122px]"
          priority
        />
      )}
    </Link>
  );
}
