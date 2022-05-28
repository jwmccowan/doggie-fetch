import { Link } from "solid-app-router";
import { SiDatadog } from "solid-icons/si";
import type { JSX } from "solid-js";
import { Container } from "../Container";

export function Header(): JSX.Element {
  return (
    <nav class="py-4 bg-purple-500">
      <Container>
        <div class="flex items-center text-white">
          <Link class="flex items-center" href="/">
            <SiDatadog class="text-5xl" />
            <h2 class="text-3xl font-bold ml-4">Doggie Fetch</h2>
          </Link>
          <ul class="ml-auto flex items-center">
            <li class="ml-4">
              <Link class="py-3 font-medium" href="/breeds">
                Breeds
              </Link>
            </li>
            <li class="ml-4">
              <Link class="py-3 font-medium" href="/categories">
                Categories
              </Link>
            </li>
            <li class="ml-4">
              <Link class="py-3 font-medium" href="my-favorites">
                My Favorites
              </Link>
            </li>
            <li class="ml-4">
              <Link
                class="px-4 py-2 font-semibold bg-white text-purple-500 rounded hover:shadow hover:text-purple-700"
                href="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
