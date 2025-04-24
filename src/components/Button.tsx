import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";

interface Props {
  text?: string;
  customStyle?: string;
  Icon?: IconType | null;
  click?: () => void;
  link?: boolean;
  path?: string;
}

const Button = ({ text, customStyle, Icon, click, link, path }: Props) => {
  if (path) {
    return (
      <Link
        to={path}
        onClick={click}
        className={`${
          customStyle ? customStyle : ""
        } bg-white text-green w-fit px-4 py-3 rounded-md text-center border border-light-green hover:bg-light-green hover:text-dark-green cursor-pointer `}
      >
        <p className="">{text}</p>
        {Icon && <Icon size={20} />}
      </Link>
    );
  }

  return (
    <button
      onClick={click}
      className={`${
        customStyle ? customStyle : ""
      } bg-white text-green w-fit px-4 py-3 rounded-md text-center border border-light-green hover:bg-light-green hover:text-dark-green cursor-pointer `}
    >
      <p className="">{text}</p>
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default Button;
