import { BaseEntity } from '@domain/BaseEntity';

export interface IArticle {
  id?: number;
  title: string;
  content: string;
  active: boolean;
}

export class Article extends BaseEntity<IArticle> {
  private constructor(props: IArticle) {
    const { id, ...otherProps } = props;
    super(otherProps, id);
  }

  public static create(props: IArticle) {
    return new Article(props);
  }

  get id(): number {
    return this.id;
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
