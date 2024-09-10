import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";
import { SubmitHandler } from "react-hook-form";

interface Props {
  _onSubmit(): void;
}

const SaveButton = ({ _onSubmit }: Props) => {
  return (
    <button
      className="flex gap-2 items-center hover:text-green-600"
      onClick={_onSubmit}
    >
      <Icon path={mdiCheck} size={0.8} className="text-green-600" />
      <p className="text-sm">SAVE</p>
    </button>
  );
};

export default SaveButton;
