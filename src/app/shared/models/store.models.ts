import { ItemModel } from './services.models';

/**
 * State
 */
export interface ActionModel {
  type?: string;
  payload?: any;
  errors?: any;
}

export interface ItemsStateModel {
  readonly data: ItemModel[];
  readonly loading: boolean;
}

export interface CartItemModel extends ItemModel {
  count: number;
}

export interface CartState {
  readonly data: CartItemModel[];
  readonly loading: boolean;
}
