import { BaseEntity } from '@domain/BaseEntity';

export interface UnmarshalledArticle {
  id?: string;
  title: string;
  content: string;
  active?: boolean;
}

export class Article extends BaseEntity<UnmarshalledArticle> {
  private constructor(props: UnmarshalledArticle) {
    const { id, ...data } = props;
    super(data, id);
  }

  public static create(props: UnmarshalledArticle): Article {
    const instance = new Article(props);
    return instance;
  }

  public static unmarshal(article: UnmarshalledArticle): UnmarshalledArticle {
    return {
      id: article.id,
      title: article.title,
      content: article.content,
      active: article.active,
    };
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this.props.title;
  }

  get content(): string {
    return this.props.content;
  }

  get active(): boolean {
    return this.props.active;
  }
}
