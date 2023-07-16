// Mediator interface
interface Mediator {
  notify(sender: Colleague, event: string): void;
}

// Colleague abstract class
abstract class Colleague {
  protected mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  abstract send(event: string): void;

  abstract receive(event: string): void;
}

// Concrete Colleague A
class ConcreteColleagueA extends Colleague {
  send(event: string): void {
    console.log('ConcreteColleagueA sends event:', event);
    this.mediator.notify(this, event);
  }

  receive(event: string): void {
    console.log('ConcreteColleagueA receives event:', event);
  }
}

// Concrete Colleague B
class ConcreteColleagueB extends Colleague {
  send(event: string): void {
    console.log('ConcreteColleagueB sends event:', event);
    this.mediator.notify(this, event);
  }

  receive(event: string): void {
    console.log('ConcreteColleagueB receives event:', event);
  }
}

// Concrete Mediator
class ConcreteMediator implements Mediator {
  private colleagueA: ConcreteColleagueA;
  private colleagueB: ConcreteColleagueB;

  setColleagueA(colleagueA: ConcreteColleagueA): void {
    this.colleagueA = colleagueA;
  }

  setColleagueB(colleagueB: ConcreteColleagueB): void {
    this.colleagueB = colleagueB;
  }

  notify(sender: Colleague, event: string): void {
    if (sender instanceof ConcreteColleagueA) {
      this.colleagueB.receive(event);
    } else if (sender instanceof ConcreteColleagueB) {
      this.colleagueA.receive(event);
    }
  }
}

// Usage
const mediator = new ConcreteMediator();

const colleagueA = new ConcreteColleagueA(mediator);
const colleagueB = new ConcreteColleagueB(mediator);

mediator.setColleagueA(colleagueA);
mediator.setColleagueB(colleagueB);

colleagueA.send('Event from Colleague A'); // Output: ConcreteColleagueA sends event: Event from Colleague A
//ConcreteColleagueB receives event: Event from Colleague A

colleagueB.send('Event from Colleague B'); // Output: ConcreteColleagueB sends event: Event from Colleague B
//ConcreteColleagueA receives event: Event from Colleague B
