import 'jest-dom/extend-expect'; // eslint-disable-line import/no-unassigned-import
import React from 'react';
import {render, cleanup, fireEvent} from 'react-testing-library';
import {SceneA, SceneB, SceneC} from '../fixtures/components';
import {createWizard, Wizard} from '.';

beforeEach(cleanup);

describe('#createWizard', () => {
	test('next works as expected', () => {
		const WizardComponent = createWizard(SceneA, SceneB, SceneC);

		const wrapper = render(<WizardComponent />);

		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneA');

		fireEvent.click(wrapper.getByTestId('button-next'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneB');

		fireEvent.click(wrapper.getByTestId('button-next'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneC');
	});

	test('previous works as expected', () => {
		const WizardComponent = createWizard(SceneA, SceneB, SceneC);

		const wrapper = render(<WizardComponent />);

		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneA');

		fireEvent.click(wrapper.getByTestId('button-next'));

		fireEvent.click(wrapper.getByTestId('button-previous'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneA');
	});

	test('goTo works as expected', () => {
		const WizardComponent = createWizard(SceneA, SceneB, SceneC);

		const wrapper = render(<WizardComponent />);

		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneA');

		fireEvent.click(wrapper.getByTestId('button-next'));
		fireEvent.click(wrapper.getByTestId('button-next'));

		fireEvent.click(wrapper.getByTestId('button-restart'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneA');
	});

	test('index works as expected', () => {
		const WizardComponent = createWizard(SceneA, SceneB, SceneC);

		const wrapper = render(<WizardComponent />);

		expect(wrapper.getByTestId('body')).toHaveTextContent('| 0');

		fireEvent.click(wrapper.getByTestId('button-next'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('| 1');

		fireEvent.click(wrapper.getByTestId('button-next'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('| 2');
	});
});

describe('Wizard', () => {
	test('next works as expected', () => {
		const WizardComponent = () => (
			<Wizard>
				{SceneA}
				{SceneB}
				{SceneC}
			</Wizard>
		);

		const wrapper = render(<WizardComponent />);

		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneA');

		fireEvent.click(wrapper.getByTestId('button-next'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneB');

		fireEvent.click(wrapper.getByTestId('button-next'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneC');
	});

	test('previous works as expected', () => {
		const WizardComponent = () => (
			<Wizard>
				{SceneA}
				{SceneB}
				{SceneC}
			</Wizard>
		);

		const wrapper = render(<WizardComponent />);

		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneA');

		fireEvent.click(wrapper.getByTestId('button-next'));

		fireEvent.click(wrapper.getByTestId('button-previous'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneA');
	});

	test('goTo works as expected', () => {
		const WizardComponent = () => (
			<Wizard>
				{SceneA}
				{SceneB}
				{SceneC}
			</Wizard>
		);

		const wrapper = render(<WizardComponent />);

		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneA');

		fireEvent.click(wrapper.getByTestId('button-next'));
		fireEvent.click(wrapper.getByTestId('button-next'));

		fireEvent.click(wrapper.getByTestId('button-restart'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('SceneA');
	});

	test('index works as expected', () => {
		const WizardComponent = () => (
			<Wizard>
				{SceneA}
				{SceneB}
				{SceneC}
			</Wizard>
		);

		const wrapper = render(<WizardComponent />);

		expect(wrapper.getByTestId('body')).toHaveTextContent('| 0');

		fireEvent.click(wrapper.getByTestId('button-next'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('| 1');

		fireEvent.click(wrapper.getByTestId('button-next'));
		expect(wrapper.getByTestId('body')).toHaveTextContent('| 2');
	});
});
