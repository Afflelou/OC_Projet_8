import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Slideshow from './Slideshow';

describe('Slideshow', () => {
    test('renders nothing when pictures is undefined', () => {
        const { container } = render(<Slideshow />);
        expect(container).toBeEmptyDOMElement();
    });

    test('renders nothing when pictures is an empty array', () => {
        const { container } = render(<Slideshow pictures={[]} />);
        expect(container).toBeEmptyDOMElement();
    });

    test('renders the image without navigation for a single picture', () => {
        const { container } = render(<Slideshow pictures={['img1.jpg']} />);
        expect(container.querySelector('#slideshow-img')).toHaveAttribute('src', 'img1.jpg');
        expect(container.querySelector('#slideshow-prev')).not.toBeInTheDocument();
        expect(container.querySelector('#slideshow-next')).not.toBeInTheDocument();
        expect(container.querySelector('#slideshow-counter')).not.toBeInTheDocument();
    });

    test('renders arrows and counter for multiple pictures', () => {
        const { container } = render(<Slideshow pictures={['img1.jpg', 'img2.jpg']} />);
        expect(container.querySelector('#slideshow-prev')).toBeInTheDocument();
        expect(container.querySelector('#slideshow-next')).toBeInTheDocument();
        expect(container.querySelector('#slideshow-counter')).toHaveTextContent('1 / 2');
    });

    test('clicking prev/next', async () => {
        const user = userEvent.setup();
        const { container } = render(<Slideshow pictures={['img1.jpg', 'img2.jpg', 'img3.jpg']} />);
        await user.click(container.querySelector('#slideshow-next'));
        expect(container.querySelector('#slideshow-counter')).toHaveTextContent('2 / 3');
        await user.click(container.querySelector('#slideshow-prev'));
        expect(container.querySelector('#slideshow-counter')).toHaveTextContent('1 / 3');
    });

    test('clicking prev from 1st picture', async () => {
        const user = userEvent.setup();
        const { container } = render(<Slideshow pictures={['img1.jpg', 'img2.jpg', 'img3.jpg']} />);
        await user.click(container.querySelector('#slideshow-prev'));
        expect(container.querySelector('#slideshow-counter')).toHaveTextContent('3 / 3');
    });

    test('clicking next from last picture', async () => {
        const user = userEvent.setup();
        const { container } = render(<Slideshow pictures={['img1.jpg', 'img2.jpg', 'img3.jpg']} />);
        await user.click(container.querySelector('#slideshow-next'));
        await user.click(container.querySelector('#slideshow-next'));
        expect(container.querySelector('#slideshow-counter')).toHaveTextContent('3 / 3');
        await user.click(container.querySelector('#slideshow-next'));
        expect(container.querySelector('#slideshow-counter')).toHaveTextContent('1 / 3');
    });
});
