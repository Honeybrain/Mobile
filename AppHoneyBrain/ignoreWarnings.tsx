import { LogBox } from "react-native";

if (__DEV__) {
  const ignoreWarns = [
    "ViewPropTypes will be removed from React Native",
    "Warning: Failed prop type: Invalid prop `defaultValue` of type `number` supplied to `ModalDropdown`, expected `string`.",
    "Possible Unhandled Promise Rejection (id: 0)",
    "Erreur lors de la mise à jour du mode nuit [RpcError: JWT_EXPIRED]",
    "Encountered two children with the same key, `-2024-01-18T23:03:30.870Z`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version."
  ];

  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };
  LogBox.ignoreLogs(ignoreWarns);
}