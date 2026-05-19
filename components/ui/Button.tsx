import {type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef} from "react";
import Link from "next/link";
import {cn} from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "border-accent text-accent hover:bg-accent hover:text-black active:bg-accent/90",
  secondary:
    "border-line text-ink-2 hover:border-ink hover:text-ink",
  ghost: "border-transparent text-ink-2 hover:text-ink",
};

const BASE_CLASSES =
  "group inline-flex items-center justify-center gap-2 border px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

type CommonProps = {
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({variant = "primary", className, children, ...props}, ref) {
    const classes = cn(BASE_CLASSES, VARIANT_CLASSES[variant], className);

    if ("href" in props && props.href !== undefined) {
      const {href, ...anchorProps} = props;
      const isExternal = href.startsWith("http") || href.startsWith("mailto:");
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={classes}
          {...anchorProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);
