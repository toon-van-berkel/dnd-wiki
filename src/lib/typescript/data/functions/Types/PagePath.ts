import type { Data } from './Data';
import type { DataPathOfType } from './DataPathOfType';
import type { PageData } from './PageData';

export type PagePath = DataPathOfType<Data, PageData>;