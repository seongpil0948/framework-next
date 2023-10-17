"use client";
import React, { useState } from "react";
import { Button, ButtonProps } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import Icon from "@mdi/react";
import { mdilPlus } from "@mdi/light-js";
// import { Checkbox } from "@nextui-org/checkbox";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { InputEmail } from "./input/field";
// import { useAppDispatch } from "@/app/store";

export const RouteButton = (
  props: { href: string; children: ReactNode } & ButtonProps
) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(props.href)} {...props}>
      {props.children}
    </Button>
  );
};

export const PlusButton = (props: {
  children: ReactNode;
  btnProps: ButtonProps;
}) => {
  return (
    <div className="flex gap-4 items-center">
      <Button
        color="danger"
        variant="bordered"
        startContent={<Icon path={mdilPlus} size={1} />}
        {...props.btnProps}
      >
        {props.children}
      </Button>
    </div>
  );
};

export function ForgetPasswordBtn() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  // const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    console.log("handleSubmit");
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" size="sm" variant="bordered">
        Forgot password?
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Find </ModalHeader>
            <ModalBody>
              <p> "Sending password reset email..." </p>
              <form>
                <InputEmail email={email} setEmail={setEmail} />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={handleSubmit}>
                Submit
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
