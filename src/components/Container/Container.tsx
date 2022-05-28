import type { JSX, ParentProps } from "solid-js";

export interface ContainerProps extends ParentProps {}

export function Container(props: ContainerProps): JSX.Element {
  return <div class="container mx-auto px-4">{props.children}</div>;
}
