import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from './banner';

describe('Banner', () => {
    test('renders the image with the given src', () => {
        const { container } = render(<Banner imgSrc="test.jpg" />);
        expect(container.querySelector('#banner-img')).toHaveAttribute('src', 'test.jpg');
        expect(container.querySelector('#banner-title')).not.toBeInTheDocument();
    });

    test('renders the title when provided', () => {
        const { container } = render(<Banner imgSrc="test.jpg" title="Chez vous, partout et ailleurs" />);
        expect(container.querySelector('#banner-img')).toHaveAttribute('src', 'test.jpg');
        expect(container.querySelector('#banner-title')).toHaveTextContent('Chez vous, partout et ailleurs');
    });
});
