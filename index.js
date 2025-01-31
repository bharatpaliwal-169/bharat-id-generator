import { customAlphabet } from "nanoid";

//numeric only random gen
const nanoidDigits = customAlphabet('0123456789', 6);

const generateUID = (prefix = "") => {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  const timestamp = `${dd}${mm}${yyyy}${hh}${min}${ss}`; // ddmmyyyyhhmmss
  const randomPart = nanoidDigits(); // 6-digit unique number
  return `${prefix}-${timestamp}-${randomPart}`;
}

export default generateUID;