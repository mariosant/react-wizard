import React from 'react';
import useTimeout from 'use-timeout';
import {createWizard} from '../src';

const SceneA = ({index, next}) => (
	<div>
		SCENE {index}
		<br />
		<p>Click start to initiate long async process.</p>
		<button onClick={next}>Start</button>
	</div>
);

const SceneB = ({index, next, previous}) => {
	useTimeout(next, 3000);

	return (
		<div>
			SCENE {index}
			<br />
			<p>
				Doing an async process... <br />
				Please wait.
			</p>
			<button onClick={previous}>Cancel</button>
		</div>
	);
};

const SceneC = ({index, goTo}) => (
	<div>
		SCENE {index}
		<br />
		<p>Finished!</p>
		<button onClick={() => goTo(0)}>Start over</button>
	</div>
);

export default () => {
	const Wizard = createWizard(SceneA, SceneB, SceneC);

	return (
		<div
			style={{
				background: 'rgba(0,0,0,0.1)',
				padding: '1rem',
				width: 500,
			}}>
			<h3>Copy Dialog</h3>
			<Wizard />
		</div>
	);
};
