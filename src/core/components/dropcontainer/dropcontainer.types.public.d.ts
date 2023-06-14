import { IBaseProps } from '../../base';
export interface MbscDropcontainerOptions extends IBaseProps {
    element?: HTMLElement | null;
    onItemDrop(args: any): void;
    onItemDragEnter?(args: any): void;
    onItemDragLeave?(args: any): void;
    onEventDragEnter?(args: any): void;
}
