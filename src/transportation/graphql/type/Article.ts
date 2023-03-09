import { extendType, objectType } from 'nexus';
import { ArticlesResolver } from '@transportation/graphql/resolver/ArticleResolver';

export const Article = objectType({
  name: 'Article',
  definition(t) {
    t.string('id');
    t.string('title');
    t.string('content');
    t.boolean('active');
  },
});

export const ArticlesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('articles', {
      type: 'Article',
      resolve: ArticlesResolver,
    });
  },
});
