import { SiDatadog } from "solid-icons/si";
import { createResource, For, JSX, Suspense } from "solid-js";
import { fetchDogApi } from "../../api/fetchDogApi";
import { BreedCard } from "../../components/BreedCard/BreedCard";
import Card from "../../components/Card";
import { Container } from "../../components/Container";
import Loading from "../../components/Loading";
import { Breed } from "../../types/breed";
import { createDebouncedValue } from "../../utils/create-debounced-value";

function LoadingCard(): JSX.Element {
  return (
    <Card>
      <Loading />
      <div class="h-48" />
      Loading (using a generic suspense, how cool is that!)...
    </Card>
  );
}

export default function Breeds(): JSX.Element {
  const [filterText, setFilterText] = createDebouncedValue("", 500);

  const [breeds, { mutate, refetch }] = createResource<Breed[], string>(
    () => filterText(),
    (search: string) => {
      return fetchDogApi(
        search.length > 2
          ? `/breeds/search?q=${search}&limit=10`
          : "/breeds?limit=10"
      );
    }
  );
  return (
    <div class="py-12">
      <Container>
        <h1 class="text-6xl mb-16 font-bold">Breeds</h1>
        <div class="mb-4">
          <label class="leading-loose" for="breed-filter-input">
            Filter results:
            <div class="flex items-center gap-4">
              <input
                id="breed-filter-input"
                class="block px-2 py-1 border border-purple-500 rounded"
                name="filter"
                placeholder="Filter breeds"
                type="text"
                oninput={(e) => setFilterText(e.currentTarget.value)}
              />
              {breeds.loading && breeds.latest && (
                <SiDatadog class="animate-spin-slow text-purple-500 text-4xl" />
              )}
            </div>
          </label>
        </div>
        <ul class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Suspense
            fallback={
              <For each={[1, 2, 3, 4, 5, 6]}>{() => <LoadingCard />}</For>
            }
          >
            <For each={breeds.latest}>
              {(breed) => <BreedCard breed={breed} />}
            </For>
          </Suspense>
        </ul>
      </Container>
    </div>
  );
}
