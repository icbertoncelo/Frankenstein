import { useOnlineStatus } from "../hooks/useOnlineStatus";

export function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}