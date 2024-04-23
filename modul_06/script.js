
//                Zrozumienie słowa kluczowego this w JavaScript

// Słowo kluczowe this w JavaScript jest bardzo dynamiczne i odnosi się do kontekstu, w którym zostało wywołane. 
// W programowaniu obiektowym, this jest używane do odwołania się do bieżącego obiektu, w ramach którego jest wywoływane. 
// W zależności od tego, jak i gdzie funkcja z this jest wywoływana, może ono wskazywać na różne obiekty 
// (np. globalny obiekt, konkretny obiekt, a w przypadku funkcji strzałkowych - na kontekst zewnętrznej funkcji).

//                Przykłady użycia this:

// Metoda obiektu:

const osoba = {
  imie: "Jan",
  powitanie: function() {
    console.log(`Cześć, mam na imię ${this.imie}`);
  }
};
osoba.powitanie(); // "Cześć, mam na imię Jan"

// W tym przypadku this w metodzie powitanie odnosi się do obiektu osoba, co umożliwia dostęp do jego właściwości imie.

// Globalny kontekst:

function pokazThis() {
  console.log(this);
}
pokazThis(); // W przeglądarce: Window

// Tutaj this w funkcji pokazThis wywołanej w kontekście globalnym odnosi się do globalnego obiektu Window.

//                  Zastosowanie praktyczne

// Implementacja obiektu osoby

const osobab = {
  username: "Maciej",
  showName: function() {
    console.log(`Username: ${this.username}`);
  }
};

// Testowanie metody showName
osobab.showName(); // "Username: Maciej"

// Implementacja obiektu półki na książki

const polkaNaKsiazki = {
  authors: [],
  getAuthors: function() {
    return this.authors;
  },
  addAuthor: function(authorName) {
    this.authors.push(authorName);
  }
};

// Dodawanie autorów i testowanie
polkaNaKsiazki.addAuthor("J.K. Rowling");
polkaNaKsiazki.addAuthor("George Orwell");

// Wyświetlanie listy autorów
console.log(polkaNaKsiazki.getAuthors()); // ["J.K. Rowling", "George Orwell"]

// Przegląd kodu i dokumentacja

// Kod przedstawiony powyżej zawiera implementacje dwóch obiektów: osoba i polkaNaKsiazki. 
// W obu przypadkach, metody tych obiektów używają słowa kluczowego this do odwoływania się do właściwości tego samego obiektu,
// z którego są wywoływane.

// Metoda showName w obiekcie osoba używa this do odwołania się do właściwości username tego obiektu.
// Metody getAuthors i addAuthor w obiekcie polkaNaKsiazki używają this do pracy z tablicą authors, 
// która jest własnością tego obiektu.
// Każdy przykład demonstruje, jak this pomaga w odwoływaniu się do kontekstu bieżącego obiektu, 
// co jest kluczowe w programowaniu obiektowym w JavaScript.