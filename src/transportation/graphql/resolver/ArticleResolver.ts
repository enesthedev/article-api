import { UnmarshalledArticle } from '@domain/article';
import { AppContext } from '@transportation/graphql/AppContext';
import { ArgsValue } from 'nexus/dist-esm/typegenTypeHelpers';

export const ArticlesResolver = async (
  event: Event,
  args: ArgsValue<any, any>,
  context: AppContext
): Promise<UnmarshalledArticle[]> => {
  const articles = await context.articleService.all();
  return articles;
};
