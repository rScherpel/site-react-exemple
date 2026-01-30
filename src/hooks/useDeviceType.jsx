import { useEffect, useState } from "react";

export default function useDeviceType() {
  const getType = () => {
    const width = window.innerWidth;

    if (width <= 576) return "celular";
    if (width <= 992) return "tablet";
    return "notebook";
  };

  const [device, setDevice] = useState(getType());

  useEffect(() => {
    const handleResize = () => setDevice(getType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}
