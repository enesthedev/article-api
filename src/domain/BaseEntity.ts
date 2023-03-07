import { v4 as uuid } from 'uuid';

export abstract class BaseEntity<T> {
  protected readonly _id: string;

  protected props: T;

  protected constructor(props: T, id?: string) {
    this._id = id || uuid();
    this.props = props;
  }

  public equals(object?: BaseEntity<T>): boolean {
    if (object == null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    return this._id === object._id;
  }
}
