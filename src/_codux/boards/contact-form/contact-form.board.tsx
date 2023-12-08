import { createBoard } from '@wixc3/react-board';
import { ContactForm } from '../../../components/contact-form/contact-form';

export default createBoard({
    name: 'ContactForm',
    Board: () => <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" />,
    environmentProps: {
        windowWidth: 1104,
        canvasWidth: 525,
        windowHeight: 729,
    },
});
