# My-App: Eine App zur Verwaltung von Schuhen mit Vue, Electron, und API-Integration

## Projektbeschreibung

Dies ist eine Desktop-Anwendung, die mit **Vue.js**, **Electron**, **JavaScript**, **HTML** und **CSS** entwickelt wurde. Die App ermöglicht Benutzern, sich zu registrieren, sich anzumelden und verschiedene Ansichten je nach Berechtigung zu sehen. Die Kernfunktion der App ist die Verwaltung von Schuhen – Nutzer können Schuhe hinzufügen, bearbeiten und löschen. Zusätzlich werden API-Integrationen sowie eine mögliche Verbindung zu einer Datenbank unterstützt. Außerdem kann ein Kryptowallet in die App integriert werden.

## Features

- Benutzerregistrierung und Authentifizierung
- Verwaltung von Schuhen (Anlegen, Bearbeiten, Löschen)
- API-Integration zur Kommunikation mit externen Diensten
- Unterstützung für eine Datenbank zur Speicherung von Benutzerdaten
- Kryptowallet-Integration zur Verbindung mit Wallets

## Projektstruktur

Die Ordnerstruktur der App ist so gestaltet, dass sie einfach erweiterbar und wartbar ist. 

### Erklärung der Ordnerstruktur

- **`/src`**: Das Hauptverzeichnis für den Quellcode der App.
    - **`/components`**: Wiederverwendbare Vue-Komponenten (z.B. Buttons, Formulare).
    - **`/views`**: Seiten der App, die über Vue Router erreichbar sind (z.B. Login, Dashboard, Schuhverwaltung).
    - **`/services`**: Enthält die API- und Authentifizierungslogik sowie die Integration für das Kryptowallet.
    - **`/router`**: Konfiguration des Vue Routers für die Navigation innerhalb der App.
    - **`/store`**: Optionaler Vuex Store für das State Management.
    - **`/assets`**: Statische Ressourcen wie Bilder, Icons und CSS-Dateien.
    - **`/electron`**: Enthält Dateien für den Electron-Prozess, inklusive Main-Prozess und Preload-Skripte.
- **`/public`**: Statische Dateien wie `index.html`.
- **`/build`**: Konfigurationsdateien für den Build-Prozess der Electron-App.
- **`/tests`**: Testverzeichnisse für Unit- und End-to-End-Tests.
- **`/config`**: Umgebungsvariablen und Vue-spezifische Konfigurationsdateien.
- **`/dist`**: Hier wird der Produktions-Build der Anwendung abgelegt.
- **`/node_modules`**: Enthält alle Node.js Abhängigkeiten des Projekts.
