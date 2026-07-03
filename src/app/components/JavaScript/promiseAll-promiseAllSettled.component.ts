import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'js-promise-all-settled',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './promiseAll-promiseAllSettled.component.html',
  styleUrls: ['../CSS/dashboard.component.css'],
})
export class PromiseAllSettled {
    codeSnippet1 = `
        const fetchUser = new Promise((resolve) => {
            setTimeout(() => resolve({ id: 1, name: 'Alice' }), 1000);
        });

        function fetchOrders() {
            return new Promise((resolve) => {
                setTimeout(() => resolve([{ id: 101, item: 'Book' }]), 1500);
            });
        }

        function fetchCart() {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve({ id: 120, item: 'Pen' }), 1200);
            });
        }`;

    codeSnippet2 = `
        Promise.all([fetchUser, fetchOrders(), fetchCart()])
            .then(([user, orders, cart]) => {
                let combinedResult = { user, orders, cart };
                console.log('Combined Result:', combinedResult);
            })
            .catch((error) => {
                console.error('At least one request failed:', error.message);
        });`;

    codeSnippet3 = `
        Combined Result: {
            user: { id: 1, name: 'Alice' },
            orders: [ { id: 101, item: 'Book' } ],
            cart: { id: 120, item: 'Pen' }
        }`;

    codeSnippet4 = `
        function fetchCart() {
            return new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('Cart service failed')), 1200);
            });
        }
    `;

    codeSnippet5 = `
        Promise.allSettled([fetchUser, fetchOrders(), fetchCart()])
            .then(([user, orders, cart]) => {
                let combinedResult = { user, orders, cart };
                console.log('Combined Result:', combinedResult);
            })
            .catch((error) => {
                console.error('At least one request failed:', error.message);
            });
    `;

    codeSnippet6 = `
        Combined Result: {
            user: { status: 'fulfilled', value: { id: 1, name: 'Alice' } },
            orders: { status: 'fulfilled', value: [ [Object] ] },
            cart: {
                status: 'rejected',
                reason: Error: Cart service failed
                    at Timeout._onTimeout (/usr/src/app/main.js:12:29)
                    at listOnTimeout (node:internal/timers:588:17)
                    at process.processTimers (node:internal/timers:523:7)
            }
        }
    `;

    codeSnippet7 = `
        Combined Result: {
            user: { status: 'fulfilled', value: { id: 1, name: 'Alice' } },
            orders: { status: 'fulfilled', value: [ [Object] ] },
            cart: { status: 'fulfilled', value: { id: 120, item: 'Pen' } }
        }
    `;

    codeSnippet8 = `
        const P1 = new Promise(resolve => {
                resolve("Promise 1 resolved");
            }
        );
        const P2 = new Promise(reject => {
                reject("Promise 2 rejected");
            }
        );

        async function allF () {
            const [R1, R2] = await Promise.all([P1, P2]);
            console.log(R1);
            console.log(R2);
        }

        allF();
    `;
}
