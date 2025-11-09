import { postData } from "./strapiService";

type TContact = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function postContact(data: TContact) {
  return await postData("/api/contact-infos", data);
}
