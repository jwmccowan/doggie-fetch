import { JSXElement, ParentProps } from "solid-js";

export default function Card(props: ParentProps): JSXElement {
  return <div class="bg-white shadow-md rounded p-8">{props.children}</div>;
}
