import CryptoJS from "crypto-js";

export const encrypt = (text) => {
  const crypt = CryptoJS.AES.encrypt(text, "Secret").toString();
  const encrypted = crypt
    .toString()
    .replace("+", "xMl3Jk")
    .replace("/", "Por21Ld")
    .replace("=", "Ml32");
  return encrypted;
};
export const decrypt = (text) => {
  const decrypted = text
    .toString()
    .replace("xMl3Jk", "+")
    .replace("Por21Ld", "/")
    .replace("Ml32", "=");

  const crypt = CryptoJS.AES.decrypt(decrypted, "Secret");
  console.log(crypt.toString(CryptoJS.enc.Utf8));

  return crypt.toString(CryptoJS.enc.Utf8);
};
