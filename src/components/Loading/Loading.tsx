import { JSXElement } from "solid-js";
import { SiDatadog } from "solid-icons/si";

export default function Loading(): JSXElement {
  return (
    <div class="w-full flex justify-center">
      <div class="h-32 w-32 bg-purple-400 border-4 border-white rounded-full text-white text-7xl flex items-center justify-center animate-spin-slow">
        <SiDatadog />
      </div>
    </div>
  );
}
