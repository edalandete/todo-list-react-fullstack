/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App from './App';
import { render, screen } from './assets/test-utils';

describe('Given an App component', () => {
  describe('When it is rendered', () => {
    test('Then should render Todo List', () => {
      const initialState = { tasks: [] };
      render(<App />, { initialState });
      expect(screen.getByText(/Todo list/)).toBeInTheDocument();
    });
  });
});
