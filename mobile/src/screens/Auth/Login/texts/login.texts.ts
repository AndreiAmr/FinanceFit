import { ModalProps } from '@/src/atomic/atoms/Modal';

export const loginTexts = {
  title: 'Entrar no app',
  subtitle: 'Informe seus dados para entrar no app',

  emailPlaceholder: 'Email',
  passwordPlaceholder: 'Senha',

  emailRequired: 'Email é obrigatório',
  passwordRequired: 'Senha é obrigatória',
  invalidEmail: 'Email inválido',
};

export const loginModalMessages: ModalProps = {
  headerTitle: 'Oppss...',
  description: 'Verifique o campo e tente novamente.',
};
