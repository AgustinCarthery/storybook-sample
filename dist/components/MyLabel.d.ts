/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, }: MyLabelProps) => JSX.Element;
