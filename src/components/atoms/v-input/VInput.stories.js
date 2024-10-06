import VInput from './VInput.vue';

export default {
  title: 'components/VInput',
  component: VInput,
  tags: ['autodocs'],
  argTypes: {
    isWide: { control: 'boolean' },
    LogoText: { control: { type:'text' }},
  }
};

export const Input = {
  args: {
    isWide: false, 
    LogoText: 'Продолжить',
  },
};
