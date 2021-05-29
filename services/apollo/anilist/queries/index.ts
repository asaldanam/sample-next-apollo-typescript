import { gql, useQuery } from "@apollo/client";
import { ParamsOf } from "utils/typescript";
import anilistClient from "../client";
import { ANILIST_QUERY } from "./_api";
import { AnilistSchema } from "./_schema";

/** Exposes all Anilist service queries as a Hook extending Apollo useQuery hook options */
export function useAnilistQuery(
  queryKey: keyof typeof ANILIST_QUERY,
  options?: ParamsOf<typeof useQuery>[1] & { variables: AnilistSchema[typeof queryKey]['vars'] },
) {
  return useQuery<AnilistSchema[typeof queryKey]['data'], typeof options.variables>
  (
    ANILIST_QUERY[queryKey],
    {
      client: anilistClient,
      ...(options || {})
    }
  );
}