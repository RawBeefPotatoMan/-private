import { BaseComponent } from '../../base';
import { MbscDropcontainerOptions } from './dropcontainer.types.public';
/** @hidden */
export declare class DropcontainerBase extends BaseComponent<MbscDropcontainerOptions, any> {
    protected static _name: string;
    private _unsubscribe?;
    private _elTop;
    private _elBottom;
    private _elLeft;
    private _elRight;
    private _isEventIn;
    _onExternalDrag: (args: any) => void;
    protected _updated(): void;
    protected _destroy(): void;
}
