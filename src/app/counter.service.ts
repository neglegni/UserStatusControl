export class CounterService {
    counter = 0;

    logStatusChange() {
        this.counter++;
        console.log('It`s the ' + this.counter + '. time a status was changed');
    }
}
