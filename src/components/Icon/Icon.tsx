import styles from "./Icon.module.scss";
import { ArrowUpRight } from "./components/ArrowUpRight";
import { Apple } from "./components/iilustrations/Apple";
import { GooglePlay } from "./components/iilustrations/GooglePlay";

const icons = {
  ["arrow-up-right"]: ArrowUpRight,
  Apple,
  GooglePlay,
};

export type TIconSizes = 1 | 2 | 3;

export type TIcons = keyof typeof icons;

const sizes = {
  1: 16,
  2: 20,
  3: 24,
};

type TIcon = {
  name: TIcons;
  size?: TIconSizes;
  className?: string;
};

export const Icon = ({ name, size = 3, className }: TIcon) => {
  const Icon = icons[name];
  const stylesIcon = [styles[`size-${size}`], className].join(" ");
  const calculatedStrokeWidth = (sizes[size] / 24) * 2;

  return (
    <figure className={stylesIcon}>
      <Icon strokeWidth={calculatedStrokeWidth} />
    </figure>
  );
};
