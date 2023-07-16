// Handler interface
interface Handler {
  setNext(handler: Handler): void;
  handle(request: string): void;
}

// Base Handler
abstract class BaseHandler implements Handler {
  private nextHandler: Handler | null;

  setNext(handler: Handler): void {
    this.nextHandler = handler;
  }

  handle(request: string): void {
    this.doHandle(request);
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }

  protected abstract doHandle(request: string): void;
}

// Concrete Handler A
class ConcreteHandlerA extends BaseHandler {
  protected doHandle(request: string): void {
    if (request === 'A') {
      console.log('ConcreteHandlerA: Handling request A');
    }
  }
}

// Concrete Handler B
class ConcreteHandlerB extends BaseHandler {
  protected doHandle(request: string): void {
    if (request === 'B') {
      console.log('ConcreteHandlerB: Handling request B');
    }
  }
}

// Concrete Handler C
class ConcreteHandlerC extends BaseHandler {
  protected doHandle(request: string): void {
    if (request === 'C') {
      console.log('ConcreteHandlerC: Handling request C');
    }
  }
}

// Usage
const handlerA: Handler = new ConcreteHandlerA();
const handlerB: Handler = new ConcreteHandlerB();
const handlerC: Handler = new ConcreteHandlerC();

handlerA.setNext(handlerB);
handlerB.setNext(handlerC);

handlerA.handle('A'); // Output: ConcreteHandlerA: Handling request A
handlerA.handle('B'); // Output: ConcreteHandlerB: Handling request B
handlerA.handle('C'); // Output: ConcreteHandlerC: Handling request C
