"use server";

import { z } from "zod";
import { ContactFormSchema, type FormState } from "@/utils/validationForm";
import { postData } from "@/services/strapiService";
import { postContact } from "@/services/postData";

export async function sendInfo(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fields = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
  };

  const validatedFields = ContactFormSchema.safeParse(fields);

  if (!validatedFields.success) {
    const flattenedErrors = z.flattenError(validatedFields.error);
    //console.log("Validation failed:", flattenedErrors.fieldErrors);
    return {
      success: false,
      messageInfo: "Validation failed",
      strapiErrors: null,
      zodErrors: flattenedErrors.fieldErrors,
      data: {
        ...prevState.data,
        ...fields,
      },
    };
  }

  const responseData = await postContact(validatedFields.data);

  if (!responseData) {
    return {
      success: false,
      messageInfo: "Ops! Something went wrong. Please try again.",
      strapiErrors: null,
      zodErrors: null,
      data: {
        ...prevState.data,
        ...fields,
      },
    };
  }

  return {
    success: true,
    messageInfo: "Contact info sended",
    strapiErrors: null,
    zodErrors: null,
    data: {
      ...prevState.data,
      ...fields,
    },
  };
}
