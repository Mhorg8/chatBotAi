import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Props {
  placeholder: string;
  label: string;
  type: string;
  name: string;
}

const CustomInput = ({ type, label, placeholder, name }: Props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} id={name} name={name} placeholder={placeholder} />
    </div>
  );
};

export default CustomInput;
