import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const CONTAINER_SIZES = {
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
};

const variants = tv({
  base: "flex flex-col mx-auto px-4",
  variants: {
    size: {
      sm: `max-w-${CONTAINER_SIZES.sm}`,
      md: `max-w-${CONTAINER_SIZES.md}`,
      lg: `max-w-${CONTAINER_SIZES.lg}`,
      xl: `max-w-${CONTAINER_SIZES.xl}`,
    },
    fluid: {
      true: "w-full",
    },
  },
});

export const Contaienr = forwardRef(
  (props: {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    /* コンテナの横幅 */
    size: keyof typeof CONTAINER_SIZES;
    /* Trueの時、横幅いっぱいに広がる */
    fluid?: boolean;
  }) => {
    const { size, fluid } = props;
    const Tag = props.as || "div";
    return (
      <Tag
        className={variants({
          size: fluid ? size : undefined,
          fluid,
        })}
      >
        {props.children}
      </Tag>
    );
  }
);
Contaienr.displayName = "Contaienr";
