export const generatePassword = (
  length,
  uppercase,
  lowercase,
  numbers,
  symbols
) => {
  let charset = ""
  let password = ""

  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz"
  if (numbers) charset += "0123456789"
  if (symbols) charset += "!@#$%^&*()_+~`|}{[]?></"

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }

  return password
}
