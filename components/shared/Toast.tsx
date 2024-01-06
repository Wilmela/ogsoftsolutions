import { ToastContainer } from "react-toastify";

type Props = {
    theme?: |'light' | 'dark' | 'colored';
    duration?: number;
    position?: |'top-right'|'top-right'|'top-center'|'bottom-left'|'bottom-right'|'bottom-center';
}

const Toast = ({ theme, duration, position }: Props) => {
  return (
    <ToastContainer
      position={position || 'top-right'}
      autoClose={duration || 500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme || 'colored'}
    />
  );
};

export default Toast;
