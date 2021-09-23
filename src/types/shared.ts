// ファクトリ用のタイプ
export type Factory<T> = (arg?: Partial<T>) => T;
