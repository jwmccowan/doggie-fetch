import { ErrorBoundary, JSXElement } from "solid-js";
import { Breed } from "../../types/breed";
import { BsHeartFill } from "solid-icons/bs";
import { BsCameraFill } from "solid-icons/bs";
import Card from "../Card";

interface BreedFactProps {
  factName: string;
  fact?: string;
  showNoData?: boolean;
}

function BreedFact(props: BreedFactProps): JSXElement {
  const rand = Math.random() * 100 + 1;
  if (rand < 3) {
    throw new Error("Uh oh, random crash!");
  }
  if (!props.fact && !props.showNoData) {
    return undefined;
  }
  return (
    <p class="mb-2">
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
    <Card>
      <div class="flex flex-col gap-8 h-full">
        <ErrorBoundary
          fallback={() => (
            <div>
              <h2 class="text-red-700 text-3xl text-medium mb-4">
                Sorry, something went wrong :(
              </h2>
              <div class="text-sm text-gray-500">
                <p class="mb-2">
                  Maybe I should be more clear. Every card rolls a d20, and this
                  one rolled a natural 1..
                </p>
                <p>
                  This error was caught by an error boundary.. Built right into
                  solidjs!
                </p>
              </div>
            </div>
          )}
        >
          <div class="flex flex-col items-center relative mb-12">
            <div class="h-48 w-48 bg-purple-200 rounded-full absolute top-auto bottom-auto right-auto left-auto ml-5" />
            <div class="h-12 w-12 bg-purple-400 rounded-full absolute top-auto bottom-auto right-auto left-auto ml-48" />
            <div class="h-40 w-40 bg-purple-700 rounded-full absolute top-auto bottom-auto right-auto left-auto mt-7 mr-6" />
            <img
              class="object-cover w-32 h-32 rounded-full z-10 border-8 border-white shadow mt-6"
              src={props.breed.image.url}
              alt={props.breed.name}
            />
          </div>
          <div>
            <h2 class="text-4xl font-bold mb-2 text-purple-600">
              {props.breed.name}
            </h2>
            <p class="text-gray-500 text-sm mb-6">{props.breed.temperament}</p>
            <h4 class="text-xl font-bold mb-4">Facts:</h4>
            <div class="bg-purple-50 border-l-4 border-purple-700 p-4 -mx-4">
              <BreedFact factName="Life span" fact={props.breed.life_span} />
              <BreedFact
                factName="Breed group"
                fact={props.breed.breed_group}
              />
              <BreedFact factName="Origin" fact={props.breed.origin} />
              <BreedFact factName="Bred for" fact={props.breed.bred_for} />
              <BreedFact factName="Height" fact={props.breed.height.metric} />
              <BreedFact factName="Weight" fact={props.breed.weight.metric} />
            </div>
          </div>
          <div class="flex gap-2 justify-end mt-auto">
            <button
              onClick={() => {}}
              class="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 text-lg"
            >
              <BsCameraFill />
            </button>
            <button
              onClick={() => {}}
              class="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 inline-flex items-center text-lg justify-center"
            >
              <BsHeartFill class="mr-3" />
              <span class="text-base">Favorite</span>
            </button>
          </div>
        </ErrorBoundary>
      </div>
    </Card>
  );
}
