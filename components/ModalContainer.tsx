import { useRouter } from "next/router";
import React, {
  Dispatch,
  ReactChildren,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";
type DataType = {
  clicks: Number;
};
type ModalData = {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  children: ReactElement;
};

export const ModalContainer = ({ setOpen, children }: ModalData) => {
  const { events } = useRouter();

  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    // subscribe to next/router event
    events.on("routeChangeStart", () => close());
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off("routeChangeStart", () => close());
    };
  }, [close, events]);

  const content = new Array(1).fill(
    <p>
      Edit the clicks below by clicking on the number input or typing in your
      own value.
    </p>
  );
  const portalDiv = document.getElementById("app-modal")!;
  return ReactDOM.createPortal(
    <div className={"w-screen h-screen t-0 l-0 relative"} onClick={close}>
      <div className={"absolute w-full h-full"}></div>
      <div className="absolute  w-full h-full z-50">{children}</div>
    </div>,
    portalDiv
  );
};
