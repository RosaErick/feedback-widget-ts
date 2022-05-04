import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export default function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar formulário"
    >
      <X />
    </Popover.Button>
  );
}
