import './mylabel.css';

export interface MyLabelProps {
	/**
	 * Text to be displayed
	 */
	label: string;
	/**
	 * Size of the text
	 */
	size: 'normal' | 'h1' | 'h2' | 'h3';
	/**
	 * Capitalized text
	 */
	allCaps?: boolean;
	/**
	 * Text color
	 */
	color?: 'primary' | 'secondary' | 'tertiary';
	/**
	 * Customizable font color
	 */
	fontColor?: string;
}

/**
 * MyLabel sample component
 */
export const MyLabel = ({
	label = 'No Label',
	size = 'normal',
	allCaps = false,
	color = 'primary',
	fontColor,
}: MyLabelProps) => {
	return (
		<span style={{ color: fontColor }} className={`label ${size} text-${color}`}>
			{' '}
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
