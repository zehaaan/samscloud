self.addEventListener('fetch', event => {
    if (event.request.url.endsWith('/api/state') || event.request.url.endsWith('/api/toggle')) {
        event.respondWith(handleRequest(event.request));
    }
});

async function handleRequest(request) {
    if (request.url.endsWith('/api/state')) {
        const state = localStorage.getItem('buttonState') === 'true';
        return new Response(JSON.stringify({ state }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } else if (request.url.endsWith('/api/toggle')) {
        const currentState = localStorage.getItem('buttonState') === 'true';
        const newState = !currentState;
        localStorage.setItem('buttonState', newState);
        return new Response(JSON.stringify({ state: newState }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
    return new Response('Not Found', { status: 404 });
} 