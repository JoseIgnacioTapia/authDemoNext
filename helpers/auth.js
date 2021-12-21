import { hash } from 'bcryptjs';

export async function hasPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}
