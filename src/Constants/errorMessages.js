const ERROR_PREFIX = "[ERROR]";

export const INPUT_ERROR_MESSAGES = {
  INVALID_INPUT: `${ERROR_PREFIX}유효하지 않은 입력 값입니다. 다시 입력해주세요.`,
  DUPLICATE_NICKNAME: `${ERROR_PREFIX}중복된 사원 닉네임이 있습니다. 다시 입력해주세요.`,
  NICKNAME_OVER_FIVE: `${ERROR_PREFIX}닉네임이 5자를 넘어갑니다. 다시 입력해주세요.`,
  WORKER_UNDER_FIVE: `${ERROR_PREFIX} 근무자는 5명 이상이 유지되어야 합니다. 다시 입력해주세요.`,
  WORKER_OVER_THIRTY_FIVE: `${ERROR_PREFIX} 근무자는 35명이 넘어서는 안됩니다. 다시 입력해주세요.`,
};
