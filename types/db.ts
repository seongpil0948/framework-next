export type OtherDB = {
  host: string
  user: string
  password: string
}

export interface PaginateParam<T> {
  readonly pageSize?: number
  // readonly lastData?: QueryDocumentSnapshot<T | null, DocumentData>;
  readonly orderBy?: keyof T
}

// export type AdminFirestore = ReturnType<typeof admin.firestore>;
// export type AvailDb = Firestore | OtherDB | AdminFirestore;

export interface ICrudDB<DB, T> {
  create(db: DB, arg: T): Promise<void>
  get(db: DB, id: string): Promise<T | undefined>
  list(
    db: DB,
    d: PaginateParam<T>,
  ): Promise<{
    data: T[]
    noMore: boolean
    // lastDoc?: QueryDocumentSnapshot<T | null, DocumentData>;
  }>
  listByIds(db: DB, ids: string[]): Promise<T[]>
  update(db: DB, arg: T): Promise<void>
  delete(db: DB, id: string): Promise<void>
}

export interface CrudBatchDB<DB extends OtherDB, T> extends ICrudDB<DB, T> {
  batchCreate(db: DB, args: T[]): Promise<void>
}
