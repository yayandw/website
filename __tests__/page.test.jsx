import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import '@testing-library/jest-dom';

jest.mock('../src/components/header/header', () => () => <div data-testid="header">Header</div>);
jest.mock('../src/components/about/about', () => () => <div data-testid="about">About</div>);
jest.mock('../src/components/section/section', () => ({ title, children }) => (
    <div data-testid={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <h2>{title}</h2>
        {children}
    </div>
));
jest.mock('../src/components/itemtextimage/itemtextimage', () => ({ year, title }) => (
    <div data-testid={`item-${title.toLowerCase()}`}>{`${title} (${year})`}</div>
));
jest.mock('../src/components/itemtext/itemtext', () => ({ title }) => (
    <div data-testid={`contact-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</div>
));
jest.mock('../src/components/writing/writing', () => () => <div data-testid="writing">Writing</div>);
jest.mock('../src/components/footer/footer', () => () => <div data-testid="footer">Footer</div>);

describe('Home Component', () => {
    it('renders all major sections', () => {
        render(<Home />);

        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('about')).toBeInTheDocument();
        expect(screen.getByTestId('section-work-experience')).toBeInTheDocument();
        expect(screen.getByTestId('section-education')).toBeInTheDocument();
        expect(screen.getByTestId('section-contact')).toBeInTheDocument();
        expect(screen.getByTestId('writing')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('renders correct job titles', () => {
        render(<Home />);

        expect(screen.getByTestId('item-leader')).toHaveTextContent('Leader');
        expect(screen.getByTestId('item-programmer')).toHaveTextContent('Programmer');
        expect(screen.getByTestId('item-technical support')).toHaveTextContent('Technical Support');
    });
});
