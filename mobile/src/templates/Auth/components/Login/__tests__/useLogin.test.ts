import Redux from 'react-redux';
import { act, renderHook } from '@testing-library/react-hooks';
import { loginActions } from '@/src/store/authenticationModule/modules/login/loginActions';
import { useLogin } from '../useLogin';

const dispatchMock = jest.fn();
jest.spyOn(Redux, 'useDispatch').mockReturnValue(dispatchMock);

console.error = jest.fn();

describe('UseLogin hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Deve preencher os values corretamente', () => {
    const { result } = renderHook(useLogin);
    const emailValue = 'email@testing.com';
    const passwordValue = 'any-password';

    act(() => {
      result.current.handleChange('email')(emailValue);
      result.current.handleChange('password')(passwordValue);
    });

    expect(result.current.values.email).toEqual(emailValue);
    expect(result.current.values.password).toEqual(passwordValue);
  });

  test('Deve chamar onSubmit corretamente', async () => {
    const { result } = renderHook(useLogin);
    const { current } = result;

    const submitSpy = jest.spyOn(current, 'handleSubmit');

    const emailValue = 'email@testing.com';
    const passwordValue = 'any-password';
    act(() => {
      current.handleChange('email')(emailValue);
      current.handleChange('password')(passwordValue);
    });

    await act(async () => {
      await current.handleSubmit();
    });

    expect(submitSpy).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledWith(
      loginActions.getLoginAsync({
        email: emailValue,
        password: passwordValue,
      })
    );
  });
});
