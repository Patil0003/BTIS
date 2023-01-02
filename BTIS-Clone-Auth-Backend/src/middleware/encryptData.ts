import CryptoJS from "crypto-js";

export const encryptData = (data: any) => {
  const checkData = CryptoJS.AES.encrypt(data, "secret key 123").toString();
  // console.log("ecrypt", checkData);
  return checkData;
};
export const decryptData = (data: any) => {
  var bytes = CryptoJS.AES.decrypt(data, "secret key 123");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log("decrypt :-", originalText);
  return originalText;
};
