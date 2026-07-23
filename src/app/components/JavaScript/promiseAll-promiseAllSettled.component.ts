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
        async function getDashboardData(userId) {
            const results = await Promise.allSettled([
                fetch(`/api/user/${userId}`).then(res => {
                    if (!res.ok) throw new Error(`User fetch failed: ${res.status}`);
                    return res.json();
                }),
                fetch(`/api/orders/${userId}`).then(res => {
                    if (!res.ok) throw new Error(`Order fetch failed: ${res.status}`);
                    return res.json();
                }),
                fetch(`/api/notifications/${userId}`).then(res => {
                    if (!res.ok) throw new Error(`Notification fetch failed: ${res.status}`);
                    return res.json();
                }),
            ]);

            const [userResult, ordersResult, notificationsResult] = results;
            return {
                user: userResult.status === 'fulfilled' ? userResult.value : null,
                orders: ordersResult.status === 'fulfilled' ? ordersResult.value : [],
                notifications: notificationsResult.status === 'fulfilled' ? notificationsResult.value : [],
                errors: results
                    .filter(r => r.status === 'rejected')
                    .map(r => r.reason),
                };
            }

            async function main() {
                const dashboardData = await getDashboardData(2);
                console.log(dashboardData);
            }
            main();
    `;
}
