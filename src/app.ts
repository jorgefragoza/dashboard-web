import { session } from './services/session';
import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';

@autoinject
export class App {
  private signedIn:boolean = false;

  constructor(private ea: EventAggregator, private session: session) {
    this.signedIn = this.session.isAuthenticated();

    this.ea.subscribe('session-event', payload => {
      if(payload.event === 'signIn') {
        this.session.signIn(payload.user, payload.token);
        this.signedIn = true;
      } else {
        this.session.signOut();
        this.signedIn = false;
      }
  });
  }
}
