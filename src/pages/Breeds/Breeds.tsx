import { createResource, For, JSX, Suspense } from "solid-js";
import { fetchDogApi } from "../../api/fetchDogApi";
import { BreedCard } from "../../components/BreedCard/BreedCard";
import Card from "../../components/Card";
import { Container } from "../../components/Container";
import Loading from "../../components/Loading";
import { Breed } from "../../types/breed";

const [breeds, { mutate, refetch }] = createResource<Breed[]>(() =>
  fetchDogApi("breeds?limit=5")
);

export default function Breeds(): JSX.Element {
  return (
    <div class="py-12">
      <Container>
        <h1 class="text-6xl mb-16 font-bold">Breeds</h1>
        <ul class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Suspense
            fallback={
              <For each={[1, 2, 3]}>
                {() => (
                  <Card>
                    <Loading />
                    <div class="h-48" />
                    Loading (using a generic suspense, how cool is that!)...
                  </Card>
                )}
              </For>
            }
          >
            <For each={breeds()}>{(breed) => <BreedCard breed={breed} />}</For>
          </Suspense>
        </ul>
      </Container>
    </div>
  );
}
