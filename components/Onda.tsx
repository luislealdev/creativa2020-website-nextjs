import Lottie from "react-lottie";
import animationData from "../assets/ondas.json";


export const Onda = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div key="avatar_animation" className="animation">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        key="avatar_animation_data"
      />
    </div>
  );
}
