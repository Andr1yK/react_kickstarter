import { Action } from './Action';
import { Store } from './Store';

export type Reducer = (state: Store, action: Action) => Store;
