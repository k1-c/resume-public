import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const variants = tv({
  base: "flex flex-col",
  variants: {
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    position: {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    },
  },
});

export const Stack = forwardRef(
  (
    props: {
      children: React.ReactNode;
      as?: keyof JSX.IntrinsicElements;
      /* 縦の配置 (align-items) */
      align?: "start" | "center" | "end";
      /* 横の配置 (justify-content) */
      position: "left" | "center" | "right";
      /* 要素間の間隔 */
      gap?: number;
    } & JSX.IntrinsicElements[keyof JSX.IntrinsicElements]
  ) => {
    const Tag = props.as || "div";
    return (
      <Tag
        className={variants({
          align: props.align,
          position: props.position,
        })}
      >
        {props.children}
      </Tag>
    );
  }
);
Stack.displayName = "Stack";
