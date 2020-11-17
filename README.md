# Opdrachtbeschrijving

## Inleiding
Deze opdracht hoort bij de eerste les over react. In de opdracht zullen zowel zaken die in de voorbereiding als zaken 
die in de les zelf zijn behandeld gebruikt worden. Om het gevoel van ‘de praktijk’ meer naar de opdracht te halen is 
de opzet zoals deze in een userstory gebruikt kan worden.

**"Als klant wil een kleine applicatie waarmee ik makkelijk klanten de winkel kan tellen, zodat we binnen de corona-regels blijven."**

## Context
Gezien de huidige situatie met COVID-19 is het belangrijk dat we weten hoeveel mensen er in de winkel zijn. Bij de deur staat een portier om 
bij te houden hoeveel mensen er in en uit de winkel komen. Dit doet hij echter uit zijn hoofd en gaat daarom ook wel eens niet goed. 
Deze tool moet het voor hem makkelijker maken om bij te houden hoeveel mensen er in de winkel zijn door enkel op een plus (`+`) of min (`-`)button te hoeven klikken. 
Als er aan het eind van de dag toch een verschil is, moet de waarde gereset kunnen worden.

## Acceptatie criteria
* De applicatie is gebouwd met `create-react-app` (mocht het opzetten van een eigen project niet lukken, mag je ook deze boilerplate gebruiken)
* De applicatie heeft 3 buttons:
    1. Één button verhoogd de teller
    2. Één button verlaagd de teller
    3. Één button maakt de log leeg
* Elke button-klik moet worden bijgehouden in een log. De complete log wordt op de pagina weergegeven
* De huidige waarde van de teller wordt op de pagina weergegeven (begint bij 0)

Je gaat gebruik maken van de useState hook van React, om zowel de waarde van de teller, als de log bij te houden en weer te geven op de pagina.

## De applicatie starten
Wanneer je zelf een nieuw project maakt, hoef je hem na de installatie alleen nog te runnen met:

`npm start`

Als je het project gecloned hebt naar jouw lokale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken. 
Begin met het maken van wijzigingen in src/App.js: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.

## Stappenplan (spoiler alert: alleen gebruiken als je er zelf niet uitkomt)
1. Gebruik de useState hook om een stukje state aan te maken voor de teller
2. Maak een `+` en een `-` button en zet hier een event listener op, zodat de state-setter funtie wordt aangeroepen bij een 
buttonklik. De nieuwe waarde van de teller is de _huidige waarde + 1 of -1_ (afhankelijk van de buttonklik)
3. Zorg ervoor dat de waarde van de teller wordt weergegeven op de pagina en check of de buttons werken!
4. Maak een stukje state aan voor de log. We willen een lijst van gebeurtenissen bijhouden. Wat voor soort data-type hebben we hiervoor nodig?
5. Maak twee event handler functies voor de `+` en `-` knoppen. Zorg ervoor dat er, naast het updaten van de teller, in deze functie ook een 
gebeurtenis in de log wordt geschreven.
6. Gebruik een console.log() om te checken of de waardes op de juiste manier in de log worden gezet
7. Zorg ervoor dat alle waardes uit de log worden weergegeven op de pagina. _Tip:_ dit heb je voorheen al eens gedaan met de tv opdracht of country-data opdracht!
8. Maak een reset knop die de log en de teller reset!











This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
