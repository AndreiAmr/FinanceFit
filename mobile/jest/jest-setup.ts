jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => jest.fn()),
  useSelector: jest.fn((fn) => fn()),
}));

jest.mock('@react-navigation/native-stack', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn().mockReturnValue({
      navigate: jest.fn,
      goBack: jest.fn,
    }),
    useRoute: jest.fn().mockReturnValue({
      params: jest.fn().mockReturnValue(undefined),
    }),
    getFocusedRouteNameFromRoute: jest.fn(),
    useFocusEffect: jest.fn(),
    useIsFocused: jest.fn().mockReturnValue(true),
    addListener: jest.fn(),
    createNativeStackNavigator: jest.fn(),
  };
});
