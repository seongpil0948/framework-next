export interface ICommonId {
  readonly id: string
}
export interface IUserId {
  readonly userId: string
}

export type TDetailMode = 'read' | 'edit' | 'create' | 'delete' | 'cancel'
