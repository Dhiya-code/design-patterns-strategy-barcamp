// Strategy Interface (in JS: einfach eine gemeinsame Signatur)
class PaymentStrategy {
  pay(amount) {
    throw new Error("pay() muss implementiert werden");
  }
}

// Concrete Strategies
class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Bezahle ${amount}€ mit Kreditkarte`);
  }
}

class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Bezahle ${amount}€ mit PayPal`);
  }
}

class CryptoPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Bezahle ${amount}€ mit Kryptowährung`);
  }
}

// Context
class Checkout {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  processOrder(amount) {
    this.paymentMethod.pay(amount);
  }
}

// Beispiel: Nutzung
const order1 = new Checkout(new CreditCardPayment());
order1.processOrder(50);

const order2 = new Checkout(new PayPalPayment());
order2.processOrder(100);

const order3 = new Checkout(new CryptoPayment());
order3.processOrder(200);
