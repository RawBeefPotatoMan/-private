/** @jsxRuntime classic */
/** @jsx createElement */
import { CalendarBase, MbscCalendarOptions } from '../../../preact/../core/components/calendar/calendar';
import { InstanceServiceBase } from '../../../preact/../core/shared/instance-service';
import { CalendarNav, CalendarNext, CalendarPrev, CalendarToday } from '../../../preact/shared/calendar-header';
import './calendar.scss';
export { CalendarNext, CalendarPrev, CalendarToday, CalendarNav };
export declare function template(s: MbscCalendarOptions, inst: CalendarBase): any;
/**
 * The Calendar component.
 *
 * Usage:
 *
 * ```
 * <Calendar />
 * ```
 */
export declare class Calendar extends CalendarBase {
    _instanceService: InstanceServiceBase;
    protected _template(s: MbscCalendarOptions): any;
}
