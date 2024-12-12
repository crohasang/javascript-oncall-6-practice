import { validateNicknameDuplicatedOrOverFive, validateNicknameOverFive } from '../src/validators/ValidateNickname.js';
import { validateMonthAndDayOfWeek } from '../src/validators/ValidateMonthAndDayOfWeek.js';
import { INPUT_ERROR_MESSAGES } from '../src/constants/errorMessages.js';

describe('닉네임 유효성 검사', () => {
  test('닉네임이 5글자를 초과하면 에러가 발생한다', () => {
    expect(() => {
      validateNicknameOverFive('123456');
    }).toThrow(INPUT_ERROR_MESSAGES.NICKNAME_OVER_FIVE);
  });

  test('닉네임이 5글자 이하면 에러가 발생하지 않는다', () => {
    expect(() => {
      validateNicknameOverFive('12345');
    }).not.toThrow();
  });

  test('중복된 닉네임이 있으면 에러가 발생한다', () => {
    expect(() => {
      validateNicknameDuplicatedOrOverFive('준팍,도밥,준팍');
    }).toThrow(INPUT_ERROR_MESSAGES.DUPLICATE_NICKNAME);
  });

  test('중복된 닉네임이 없으면 에러가 발생하지 않는다', () => {
    expect(() => {
      validateNicknameDuplicatedOrOverFive('준팍,도밥,고니');
    }).not.toThrow();
  });
});

describe('월과 요일 유효성 검사', () => {
  test('월이 1~12 범위를 벗어나면 에러가 발생한다', () => {
    expect(() => {
      validateMonthAndDayOfWeek('13', '월');
    }).toThrow(INPUT_ERROR_MESSAGES.INVALID_INPUT);

    expect(() => {
      validateMonthAndDayOfWeek('0', '월');
    }).toThrow(INPUT_ERROR_MESSAGES.INVALID_INPUT);
  });

  test('올바르지 않은 요일을 입력하면 에러가 발생한다', () => {
    expect(() => {
      validateMonthAndDayOfWeek('5', '월요일');
    }).toThrow(INPUT_ERROR_MESSAGES.INVALID_INPUT);
  });

  test('올바른 월과 요일을 입력하면 에러가 발생하지 않는다', () => {
    expect(() => {
      validateMonthAndDayOfWeek('5', '월');
    }).not.toThrow();
  });
});