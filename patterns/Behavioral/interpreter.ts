// Context
class Context {
  private variables: { [key: string]: boolean };

  constructor() {
    this.variables = {};
  }

  setVariable(name: string, value: boolean): void {
    this.variables[name] = value;
  }

  getVariable(name: string): boolean {
    return this.variables[name];
  }
}

// Abstract Expression
abstract class AbstractExpression {
  abstract interpret(context: Context): boolean;
}

// Terminal Expression
class TerminalExpression extends AbstractExpression {
  private variable: string;

  constructor(variable: string) {
    super();
    this.variable = variable;
  }

  interpret(context: Context): boolean {
    return context.getVariable(this.variable);
  }
}

// And Expression
class AndExpression extends AbstractExpression {
  private expression1: AbstractExpression;
  private expression2: AbstractExpression;

  constructor(expression1: AbstractExpression, expression2: AbstractExpression) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context: Context): boolean {
    return this.expression1.interpret(context) && this.expression2.interpret(context);
  }
}

// Or Expression
class OrExpression extends AbstractExpression {
  private expression1: AbstractExpression;
  private expression2: AbstractExpression;

  constructor(expression1: AbstractExpression, expression2: AbstractExpression) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context: Context): boolean {
    return this.expression1.interpret(context) || this.expression2.interpret(context);
  }
}

// Usage
const context = new Context();
context.setVariable('A', true);
context.setVariable('B', false);

const expression = new OrExpression(
  new AndExpression(new TerminalExpression('A'), new TerminalExpression('B')),
  new TerminalExpression('A')
);

const result = expression.interpret(context);
console.log(`Result: ${result}`); // Output: Result: true
