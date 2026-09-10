import { useRegisterSW } from "virtual:pwa-register/react";

export function PwaRegister() {
  useRegisterSW({ immediate: true });
  return null;
}
