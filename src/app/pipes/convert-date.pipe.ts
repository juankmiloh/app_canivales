import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(date: any) {
    // console.log('pipe date -> ', date.substr(0, 10));
    moment.locale('es');
    return `${moment(date.substr(0, 10)).format('dddd')}, ${moment(date.substr(0, 10)).format('LL')}`;
  }

}
