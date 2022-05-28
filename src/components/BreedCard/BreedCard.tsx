import { ErrorBoundary, JSXElement } from "solid-js";
import { Breed } from "../../types/breed";

interface BreedFactProps {
  factName: string;
  fact?: string;
  showNoData?: boolean;
}

function BreedFact(props: BreedFactProps): JSXElement {
  console.log("eggs", props.factName, props.fact);
  const rand = Math.random() * 100;
  if (rand < 5) {
    throw new Error("Uh oh, random crash!");
  }
  if (!props.fact && !props.showNoData) {
    return undefined;
  }
  return (
    <p>
      <span class="font-bold">{props.factName}:&nbsp;</span>
      <span class="">{props.fact}</span>
    </p>
  );
}

export interface BreedCardProps {
  breed: Breed;
}

export function BreedCard(props: BreedCardProps): JSXElement {
  return (
    <div class="bg-white shadow-md rounded p-8">
      <div class="flex flex-col items-center gap-4">
        <ErrorBoundary
          fallback={() => <div>Sorry, something went wrong :(</div>}
        >
          <img
            class="w-32 h-32 rounded-full m-4"
            src={props.breed.image.url}
            alt={props.breed.name}
          />
          <div>
            <h2 class="text-3xl font-semibold mb-2">{props.breed.name}</h2>
            <p class="text-gray-500 text-sm mb-2">{props.breed.temperament}</p>
            <BreedFact factName="Life span" fact={props.breed.life_span} />
            <BreedFact factName="Breed group" fact={props.breed.breed_group} />
            <BreedFact factName="Origin" fact={props.breed.origin} />
            <BreedFact factName="Bred for" fact={props.breed.bred_for} />
            <BreedFact factName="Height" fact={props.breed.height.metric} />
            <BreedFact factName="Weight" fact={props.breed.weight.metric} />
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}
