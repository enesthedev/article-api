import { extendType, objectType } from 'nexus';
import { AppContext } from '@transportation/graphql/AppContext';

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
      async resolve(root, args, context: AppContext) {
        const articles = await context.articleService.all();
        return articles;
      },
    });
  },
});
