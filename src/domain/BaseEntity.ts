export abstract class BaseEntity<T> {
  private readonly _id: number;

  protected get id(): number {
    return this._id;
  }

  protected props: T;

  protected constructor(props: T, id: number) {
    this._id = id;
    this.props = props;
  }

  public equals(object?: BaseEntity<T>): boolean {
    if (object == null || object === undefined || this === object) return true;
    return this.id === object.id;
  }
}
