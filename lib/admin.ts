import { auth } from "@clerk/nextjs";

const adminIds = ["user_2f2is2HxlgsERHNaCO99o4zfLmk"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
