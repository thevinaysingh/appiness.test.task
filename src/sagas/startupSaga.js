import { NetInfo } from 'react-native';

const handleFirstConnectivityChange = () => {
  NetInfo.removeEventListener('connectionChange', handleFirstConnectivityChange);
};

const watchNetStatusChange = () => {
  NetInfo.getConnectionInfo().then((connectionInfo) => {
    console.log(`Initial, type: ${connectionInfo.type}, effectiveType: ${connectionInfo.effectiveType}`);
    NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);
  });
};

export default function* () {
  yield watchNetStatusChange();
}

