// TODO: Refaktorieren mit Strategy Pattern!
// Aktuell viele if-else Statements

class TextEditor {
  constructor(format) {
    this.format = format;
  }

  formatText(text) {
    if (this.format === "upper") {
      return text.toUpperCase();
    } else if (this.format === "lower") {
      return text.toLowerCase();
    } else if (this.format === "capitalize") {
      return text.replace(/\b\w/g, char => char.toUpperCase());
    } else {
      return text;
    }
  }
}

// Aufgabe für die Übung:
// 1. Erstelle eine Strategy-Schnittstelle (z. B. TextFormatStrategy)
// 2. Implementiere UpperCaseStrategy, LowerCaseStrategy, CapitalizeStrategy
// 3. Refaktor TextEditor, sodass er eine Strategy bekommt statt if-else
