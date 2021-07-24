const protocol = location.protocol.replace(/^[^:]+:\s*/, val => val === 'http:' ? 'ws:' : 'wss:');
const host = window.location.host;

export const environment = {
  production: false,
  gameUrl: '',
  gameWsUrl: `${protocol}//${host}/`,
};
