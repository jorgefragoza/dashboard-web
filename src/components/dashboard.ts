import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';

@autoinject
export class dashboard {
    private message: string = 'dashboard component';

    constructor(private ea: EventAggregator) {
    }

    signOut() {
        let payload: any = {
            event: 'signOut'
        };
        this.ea.publish('session-event', payload);
    }
}