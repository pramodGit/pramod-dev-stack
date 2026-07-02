import { Component, signal } from "@angular/core";

// --- State modeling ---
type Idle = {
    status: 'idle';
};

type Loading = {
    status: 'loading';
};

type Success<T> = {
    status: 'success';
    data: T;
};

type Error = {
    status: 'error';
    error: string;
};

type ApiState<T> = Idle | Loading | Success<T> | Error;

type User = {
    id: number;
    name: string;
};

@Component({
    selector: 'app-union-state-modeling',
    templateUrl: './unionStateModeling.html',
    standalone: true
})
export class UnionStateModeling {

    // Ab signal() ke through state maintain kar rahe hain
    state = signal<ApiState<User>>({ status: 'idle' });

    constructor() {}

    getUiMessage<T>(state: ApiState<T>): string {
        switch (state.status) {
            case 'idle':
                return 'Waiting to start…';
            case 'loading':
                return 'Loading…';
            case 'success':
                return `Success! Got: ${JSON.stringify(state.data)}`;
            case 'error':
                return `Something went wrong: ${state.error}`;
            default:
                const _exhaustiveCheck: never = state;
                return _exhaustiveCheck;
        }
    }

    fetchUser(shouldFail: boolean = false): void {
        this.state.set({ status: 'loading' });

        setTimeout(() => {
            if (shouldFail) {
                this.state.set({
                    status: 'error',
                    error: 'Failed to fetch user from server'
                });
            } else {
                this.state.set({
                    status: 'success',
                    data: { id: 1, name: 'Rahul Sharma' }
                });
            }
        }, 2000);
    }

    reset(): void {
        this.state.set({ status: 'idle' });
    }
}