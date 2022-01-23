import { Eventer } from '@townland-project/eventer'

export const Event: Eventer<TEvents> = new Eventer()

export type TEvents = 'form-footer-tab-change'