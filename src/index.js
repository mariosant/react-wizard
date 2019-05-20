import {createElement, useState} from 'react';

const useScene = scenesAmount => {
	const maxScene = Math.max(0, scenesAmount - 1);

	const [scene, setPage] = useState(0);

	const next = () => setPage(Math.min(maxScene, scene + 1));
	const previous = () => setPage(Math.max(0, scene - 1));
	const goTo = setPage; // TODO: Accept only within range

	return [scene, {next, previous, goTo}];
};

export const Wizard = ({children}) => {
	const [index, {next, previous, goTo}] = useScene(children.length);

	const activeChild = children[index];

	return activeChild({next, previous, goTo, index});
};

export const createWizard = (...components) => () => {
	const [index, {next, previous, goTo}] = useScene(components.length);

	const activeComponent = components[index];

	return createElement(activeComponent, {
		next,
		previous,
		goTo,
		index,
	});
};
