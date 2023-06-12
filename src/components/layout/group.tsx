import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const variants = tv({
  base: "flex flex-col mx-auto px-4",
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

export const Group = forwardRef(
  (props: {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    /* 縦の配置 (align-items) */
    align?: "start" | "center" | "end";
    /* 横の配置 (justify-content) */
    position: "left" | "center" | "right";
    /* 要素間の間隔 */
    gap?: number;
  }) => {
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
Group.displayName = "Group";
