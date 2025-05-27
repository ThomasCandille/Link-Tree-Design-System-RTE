import React from 'react';
import './App.css';

import figma from './figma.jpg';
import github from './github.jpg';
import storybook from './storybook-logo.jpeg';

import Card from './component/card/Card';

function App() {
  return (<>
    <header className="App-header">
      <h1>Design System RTE</h1>
      <p>
        Bienvenue dans le Design System de RTE ! Un design system est un ensemble de règles, de composants réutilisables, de styles et de ressources qui permettent d’assurer la cohérence visuelle et fonctionnelle des interfaces d’une application ou d’un site web. Il facilite la collaboration entre designers et développeurs, accélère la conception, et garantit une expérience utilisateur homogène sur l’ensemble des produits.
      </p>
      <p> Vous retrouverez ici les liens vers les différentes ressources du projet. Pour les designers, developpeurs et utilisateur ! </p>
    </header>
    <div className="App">
      <Card content='Le lien Figma ci-dessous donne accès au fichier du Design System de RTE, où vous pouvez retrouver tous les composants, styles et ressources utilisés pour la conception des composants.' imageUrl={figma} link='https://www.figma.com/files/1286209277947294704/team/1465630967482415013/Futur-Design-System?fuid=1376848747666177723' title='Figma'/>
      <Card content='Le lien GitHub ci-dessous donne accès au repo du Design System de RTE, où vous pouvez retrouver le code source, la documentation et contribuer au développement des composants.' imageUrl={github} link='https://github.com/rte-france/design-system-rte' title='GitHub'/>
      <Card content='Le lien Storybook ci-dessous donne accès à la documentation interactive du Design System de RTE, où vous pouvez explorer, tester et visualiser les différents composants disponibles.' imageUrl={storybook} link='https://opensource.rte-france.com/design-system-rte/?path=/docs/design-systems--docs' title='Storybook'/>
    </div>
    </>
  );
}

export default App;
