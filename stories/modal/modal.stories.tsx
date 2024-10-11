// CustomModal.stories.tsx
import { StoryFn } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../src/components/button';
import { CustomModalProps, Modal } from '../../src/components/modal';
import styles from './modal.stories.module.css';

export default {
  title: 'Modules/Modal',
  component: Modal,
};
const Template: StoryFn<CustomModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        {...args}
        open={isOpen}
        onOpenChange={handleOpenChange}
        footer={
          <>
            <Button onClick={() => handleOpenChange(false)}>Cancel</Button>
            <Button onClick={() => {}}>Confirm</Button>
          </>
        }
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'My Custom Modal',
  children: 'This is the content of the custom modal.',
  id: 'modal',
  'data-testid': 'modal',
};

export const CustomStyledModal = Template.bind({});
CustomStyledModal.args = {
  title: 'My Custom Styled Modal',
  children: 'This modal has custom styles.',
  className: styles['my-custom-class'],
};
