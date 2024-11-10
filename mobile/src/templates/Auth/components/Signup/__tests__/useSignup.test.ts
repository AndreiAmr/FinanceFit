import { act, renderHook } from '@testing-library/react-hooks';
import { useSignup } from '../useSignup';

console.error = jest.fn();

describe('useSignup hook', () => {
  it('Deve preencher corretamente os valores e chamar o handleSubmit', () => {
    const { result } = renderHook(useSignup);
    const nameValue = 'email@testing.com';
    const emailValue = 'email@testing.com';
    const passwordValue = 'any-password';
    const confirmPasswordValue = 'any-password';

    act(() => {
      result.current.handleChange('name')(nameValue);
      result.current.handleChange('email')(emailValue);
      result.current.handleChange('password')(passwordValue);
      result.current.handleChange('confirmPassword')(confirmPasswordValue);
    });

    expect(result.current.values.name).toEqual(nameValue);
    expect(result.current.values.email).toEqual(emailValue);
    expect(result.current.values.password).toEqual(passwordValue);
    expect(result.current.values.confirmPassword).toEqual(confirmPasswordValue);

    const handleSubmitSpy = jest.spyOn(result.current, 'handleSubmit');

    act(() => {
      result.current.handleSubmit();
    });

    expect(handleSubmitSpy).toHaveBeenCalled();
  });
});
