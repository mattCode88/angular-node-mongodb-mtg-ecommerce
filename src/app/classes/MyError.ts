export default class MyError {

  status: boolean;
  message: string;

  constructor() {
    this.status = false;
    this.message = '';
  }

  resetError(): void {
    this.status = false;
    this.message = '';
  }

  setError(val: boolean, mex: string): void {
    this.status = val;
    this.message = mex;
  }

}
