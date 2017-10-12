export class SaDate {

  private innerDate: Date;

  constructor(d?: Date) {
    this.innerDate = d || new Date();
  }

  addYears(year: number) {
    let newYear = this.innerDate.getFullYear() + year;
    this.innerDate.setFullYear(newYear);
    return this;
  }

  addMonths(month: number) {
    let newMonth = this.innerDate.getMonth() + month;
    let changeYear = Math.floor(newMonth / 12);
    if (changeYear !== 0) {
      this.addYears(changeYear);
    }
    this.innerDate.setMonth(newMonth - changeYear * 12);
    return this;
  }

  addDays(days: number) {
    let daysMs = days * 1000 * 3600 * 24;
    this.innerDate = new Date(this.toNumber() + daysMs);
    return this;
  }

  toNumber() {
    return this.innerDate.valueOf();
  }

  get() {
    return this.innerDate;
  }

  format(format: string) {
    return this.innerDate.getFullYear() + '/' + this._fixedZero(this.innerDate.getMonth() + 1) + '/' + this._fixedZero(this.innerDate.getDate());
  }

  _fixedZero(v: number | string): string {
    v = '00' + v;
    return v.substring(v.length - 2);
  }
}
