import React from 'react'

export const SceneA = ({index, next}) => (
	<div>
		<div data-testid="body">SceneA | {index}</div>
		<button data-testid="button-next" onClick={next}>
			Next
		</button>
	</div>
);

export const SceneB = ({index, previous, next}) => (
	<div>
		<div data-testid="body">SceneB | {index}</div>
		<button type="submit" data-testid="button-previous" onClick={previous}>
			Previous
		</button>
		<button type="submit" data-testid="button-next" onClick={next}>
			Next
		</button>
	</div>
);

export const SceneC = ({index, goTo}) => (
	<div>
		<div data-testid="body">SceneC | {index}</div>
		<button type="submit" data-testid="button-restart" onClick={() => goTo(0)}>
			Restart
		</button>
	</div>
);
