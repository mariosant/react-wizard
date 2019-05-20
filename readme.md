# React Wizard

> Multi step wizards in React - easy and painless.

[![NPM version](https://img.shields.io/npm/v/@mariosant/react-wizard.svg)](https://www.npmjs.com/package/@mariosant/react-wizard)
[![Build Status](https://travis-ci.org/mariosant/react-wizard.svg?branch=master)](https://travis-ci.org/mariosant/react-wizard)

## Installation

Add `@mariosant/react-wizard` to your `package.json`.

```bash
$ npm install @mariosant/react-wizard
```

You can now import the module and use it like

```javascript
import {createWizard} from '@mariosant/react-wizard';
// or
import {Wizard} from '@mariosant/react-wizard';
```

## Usage

The package exports two flavors of the same component.

A function that return a wizard component and a component that can be used directly within JSX scope.

```javascript
import {createWizard} from '@mariosant/react-wizard';
import {SceneA, SceneB, SceneC} from './scenes';
import Modal from './modal';


export default () => {
	const Wizard = createWizard(SceneA, SceneB, SceneC);

	return (
		<Modal>
			<Wizard />
		</Modal>
	);
}
```

or if you prefer the alternate syntax,

```javascript
import {Wizard} from '@mariosant/react-wizard';
import {SceneA, SceneB, SceneC} from './scenes';
import Modal from './modal';

export default () => {
	return (
		<Modal>
			<Wizard>
				{SceneA}
				{SceneB}
				{SceneC}
			</Wizard>
		</Modal>
	);
};
```

The following props are passed into every scene component.

```
next: function to call in order to advance
previous: function to call in order to go to previous
goTo: function to call with an index - goes right to that step (warning, first is 0)
index: the index number of current step
```

## Meta

Marios Antonoudiou – [@marios_ant](https://twitter.com/marios_ant) – mariosant@sent.com

Distributed under the MIT license.

[https://github.com/mariosant/react-wizard](https://github.com/mariosant/react-wizard)

## Contributing

1. Fork it (<https://github.com/mariosant/react-wizard/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes using a semantic commit message.
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
