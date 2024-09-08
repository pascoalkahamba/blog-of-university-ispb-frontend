import { createStudentSchema, loginStudentSchema } from "@/schemas";
import { FormEventHandler } from "react";
import { z as zod } from "zod";

export type HandleChangePostProps =
  | FormEventHandler<HTMLDivElement>
  | undefined;
export type TCreateAccountProps = zod.infer<typeof createStudentSchema>;
export type TLoginStudentProps = zod.infer<typeof loginStudentSchema>;
export type TWhoPosted = "admin" | "coordinator" | "student";
export type TTypeInput = "title" | "departament";
export type TRole = "USER" | "ADMIN" | "COORDINATOR";
export type TEventType = "comment" | "reply" | "nothing";
export type TModal =
  | "deletePost"
  | "deleteAccountOnHeader"
  | "deleteAccount"
  | "deleteComment"
  | "deleteReply";

export type TTypeButton = "button" | "submit" | "reset" | undefined;
