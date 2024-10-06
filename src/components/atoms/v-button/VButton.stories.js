import VButton from './VButton.vue';

export default {
  title: 'components/VButton',
  component: VButton,
  tags: ['autodocs'],
  argTypes: {
    isWide: { control: 'boolean' },
    buttonText: { control: { type:'text' }},
    onClick: { 
      action: 'clicked',
      description: 'Click event handler',  // Добавляем описание события
    },
  },

};

export const Vbutton = {
  args: {
    isWide: false, 
    buttonText: 'Продолжить',
  },
};
