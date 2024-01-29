// Portfolio | Cyril Vergara | 301324609 | January 28, 2024
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useTheme = () => {
	return useContext(ThemeContext);
};