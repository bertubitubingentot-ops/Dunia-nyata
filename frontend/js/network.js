// network.js

class WebSocketClient {
    constructor(url) {
        this.url = url;
        this.socket = null;
        this.messageListeners = [];
    }

    connect() {
        this.socket = new WebSocket(this.url);
        this.socket.onopen = () => {
            console.log('WebSocket connection established.');
        };
        this.socket.onmessage = (event) => {
            this.handleMessage(event.data);
        };
        this.socket.onclose = () => {
            console.log('WebSocket connection closed.');
        };
    }

    sendMessage(message) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            console.error('WebSocket is not open.');
        }
    }

    addMessageListener(listener) {
        this.messageListeners.push(listener);
    }

    handleMessage(data) {
        this.messageListeners.forEach((listener) => listener(data));
    }
}

// Usage example
const wsClient = new WebSocketClient('ws://yourserver.com');
wsClient.connect();
wsClient.addMessageListener((message) => {
    console.log('Received message:', message);
});

// To send a message back to the server
// wsClient.sendMessage('Hello Server!');
