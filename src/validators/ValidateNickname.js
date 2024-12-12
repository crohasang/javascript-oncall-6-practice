import { INPUT_ERROR_MESSAGES } from "../constants/errorMessages.js";

export function validateNicknameOverFive(nickname) {
  if (nickname.length > 5) {
    throw new Error(INPUT_ERROR_MESSAGES.NICKNAME_OVER_FIVE);
  }
}

export function validateNicknameDuplicatedOrOverFive(nicknames) {
  const tempArray = nicknames.split(",");
  const uniqueArray = [...new Set(tempArray)];

  uniqueArray.forEach((element) => {
    validateNicknameOverFive(element);
  });

  if (tempArray.length !== uniqueArray.length) {
    throw new Error(INPUT_ERROR_MESSAGES.DUPLICATE_NICKNAME);
  }
}
