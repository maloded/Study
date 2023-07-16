// Receiver
class Receiver {
  action(): void {
    console.log('Receiver: Performing action');
  }
}

// Command interface
interface Command {
  execute(): void;
}

// Concrete Command
class ConcreteCommand implements Command {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute(): void {
    console.log('ConcreteCommand: Executing command');
    this.receiver.action();
  }
}

// Invoker
class Invoker {
  private command: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  executeCommand(): void {
    console.log('Invoker: Executing command');
    this.command.execute();
  }
}

// Usage
const receiver = new Receiver();
const command = new ConcreteCommand(receiver);

const invoker = new Invoker();
invoker.setCommand(command);
invoker.executeCommand();
