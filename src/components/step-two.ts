import { autoinject, observable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { auth } from './../services/auth';
import { session } from './../services/session';

@autoinject
export class stepTwo {
    private user: string = '';
    @observable password: string = '';
    private message: string = '';
    private animated: string = '';

    constructor(private ea: EventAggregator, private auth: auth, private session: session) {
    }

    activate(model) {
        this.user = model;
    }

    passwordChanged() {
        this.message = '';
    }

    async onValidate() {
        let result = await this.auth.stepTwo(this.user, this.password);

        console.log(result);

        if(result.data.token)
            this.onSuccess(result.data);
        else
            this.onError(result.data);
    }


    private onError(data: any) {
        this.animated = 'animated shake';;
        this.message = data.messages;
    }
    

    private onSuccess(data: any) {
        let payload: any = {
            event: 'signIn',
            user: this.user,
            token: data.token
        };
        this.ea.publish('session-event', payload);
    }

    private onReturn() {
        let payload = {
            step: 2,
            to: 1,
            data: this.user
        };

        this.ea.publish('login-event', payload);
    }
}