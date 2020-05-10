class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`
  }
}

function aws(server) {
  server.isAWS = true;
  server.aswInfo = function() {
    return server.url;
  }
  return server
}

const s1 = aws(new Server('12.36.56.78', 8080));
console.log(sq.isAWS);
console.log(s1.aswInfo());