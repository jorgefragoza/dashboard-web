export class session {
    constructor() {

    }

    getSession(): any {
        return localStorage['dashboard.session'];
    }

    signIn(user: string, token: string) {
        localStorage['dashboard.session'] = JSON.stringify({
            "user": user,
            "token": token
        });
    }

    signOut() {
        localStorage['dashboard.session'] = null;
    }

    isAuthenticated(): boolean {
        return localStorage['dashboard.session'] !== 'null' && localStorage['dashboard.session'] !== undefined;
    }
}