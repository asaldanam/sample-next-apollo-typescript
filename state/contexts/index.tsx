import { QueryResult, useQuery } from '@apollo/client';
import { createContext, ReactElement, useMemo } from 'react';
import {
  GetAnilistMediaList,
  GET_ANILIST_MEDIA_LIST,
} from 'services/apollo/anilist/queries/GetAnilistMediaList';

type ContextAnilistMediaList = QueryResult<
  GetAnilistMediaList['data'],
  GetAnilistMediaList['vars']
>;

export const contextAnilistMediaList = createContext<ContextAnilistMediaList | null>(null);

export function ProviderAnilistMediaList({
  children,
  variables,
}: {
  children: ReactElement;
  variables?: GetAnilistMediaList['vars'];
}) {
  const query: ContextAnilistMediaList = useQuery(GET_ANILIST_MEDIA_LIST, {
    fetchPolicy: 'network-only',
    variables,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const state = useMemo(() => query, [query.data]);

  return (
    <contextAnilistMediaList.Provider value={state}>{children}</contextAnilistMediaList.Provider>
  );
}
