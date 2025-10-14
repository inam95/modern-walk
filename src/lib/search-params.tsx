import { createLoader, parseAsString } from "nuqs/server";

export const shopSearchParamsLoader = createLoader({
  category: parseAsString.withDefault("new-arrivals"),
});
