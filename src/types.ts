export enum CarouselActionKind {
  LOOP = 'LOOP',
  AUTO_SLIDE = 'AUTOS_LIDE',
  VISIBLE_ITEMS_COUNT = 'VISIBLE_ITEMS_COUNT',
}

export type CarouselState = {
  loop: boolean;
  autoslide: boolean;
  visibleItemsCount: number;
};

export type CarouselAction =
  | {
      type: CarouselActionKind.AUTO_SLIDE | CarouselActionKind.LOOP;
      payload: boolean;
    }
  | {
      type: CarouselActionKind.VISIBLE_ITEMS_COUNT;
      payload: number;
    };
