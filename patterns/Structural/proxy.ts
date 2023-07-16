// Subject interface
interface Subject {
  request(): void;
}

// RealSubject
class RealSubject implements Subject {
  request(): void {
    console.log('RealSubject: Handling request');
  }
}

// Proxy
class Proxy1 implements Subject {
  private realSubject: RealSubject;

  request(): void {
    if (!this.realSubject) {
      this.realSubject = new RealSubject();
    }
    console.log('Proxy: Logging before the request');
    this.realSubject.request();
    console.log('Proxy: Logging after the request');
  }
}

// Usage
const proxy: Subject = new Proxy1();
proxy.request();
