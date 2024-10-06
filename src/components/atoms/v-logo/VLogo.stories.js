import VLogo from './VLogo.vue';

export default {
  title: 'components/VLogo',
  component: VLogo,
  tags: ['autodocs'],
  argTypes: {
    isWide: { control: 'boolean' },
    LogoText: { control: { type:'text' }},
    onClick: { 
      action: 'clicked',
      description: 'Click event handler',  // Добавляем описание события
    },
  },

};

export const Logo = {
  args: {
    isWide: false, 
    LogoText: 'Продолжить',
  },
};
