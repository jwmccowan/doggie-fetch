import invariant from "tiny-invariant";

export async function fetchDogApi<T>(url: string): Promise<T> {
  const slashedUrl = url.charAt(0) === "/" ? url : `/${url}`;
  const fullUrl = `${import.meta.env.VITE_DOG_API_URL}${slashedUrl}`;
  const apiKey = import.meta.env.VITE_DOG_API_KEY;
  invariant(apiKey, "API key must be set in environment");

  const res = await fetch(fullUrl, {
    method: "GET",
    // mode: "cors", // this will break?
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
  });
  return res.json();
}
