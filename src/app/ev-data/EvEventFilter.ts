import { Pipe, PipeTransform } from '@angular/core';
import { EvEventType } from './EvEventType';

@Pipe({
    name: 'eventfilter',
    pure: false
})
export class EvEventFilter implements PipeTransform {
    transform(items: any[], filter: EvEventType[]): any {
        if (!items || filter.length == 0) {
            return items;
        }

        // Filter the "items" array.
        // Items which match the filter and return true will be kept; false wil be filtered out.
        return items.filter(item => filter.includes(item.type));
    }   
}