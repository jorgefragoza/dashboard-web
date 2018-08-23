import {autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@autoinject
export class loginContainer {
    private step: number = 1;
    user: string = '';

    constructor(private ea: EventAggregator) {
        this.ea.subscribe('login-event', payload => {
            this.user = payload.data;
            this.step = payload.to;
        });
    }
}