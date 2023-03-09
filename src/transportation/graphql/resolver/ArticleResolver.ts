import { UnmarshalledArticle } from '@domain/article';
import { AppContext } from '@transportation/graphql/AppContext';
import { ArgsValue } from 'nexus/dist-esm/typegenTypeHelpers';

export const ArticlesResolver = async (
  event: Event,
  args: ArgsValue<never, never>,
  context: AppContext
): Promise<UnmarshalledArticle[]> => context.articleService.all();
