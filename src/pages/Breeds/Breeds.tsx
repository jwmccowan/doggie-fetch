import { createResource, For, JSX, Suspense } from "solid-js";
import { fetchDogApi } from "../../api/fetchDogApi";
import { BreedCard } from "../../components/BreedCard/BreedCard";
import { Container } from "../../components/Container";
import { Breed } from "../../types/breed";

const [breeds, { mutate, refetch }] = createResource<Breed[]>(() =>
  fetchDogApi("breeds?limit=5")
);

export default function Breeds(): JSX.Element {
  return (
    <div>
      <Container>
        <h1 class="text-6xl mt-12 mb-16 font-bold">Breeds</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ul class="grid grid-cols-3 gap-4">
            <For each={breeds()}>{(breed) => <BreedCard breed={breed} />}</For>
          </ul>
        </Suspense>
      </Container>
    </div>
  );
}
