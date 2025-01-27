// Коды стран СНГ
const CIS_COUNTRY_CODES = {
  '+7': 'Россия/Казахстан',
  '+374': 'Армения',
  '+375': 'Беларусь',
  '+380': 'Украина',
  '+992': 'Таджикистан',
  '+993': 'Туркменистан',
  '+994': 'Азербайджан',
  '+995': 'Грузия',
  '+996': 'Киргизия',
  '+998': 'Узбекистан',
};

export function validatePhoneNumber(phone: string): { isValid: boolean; error?: string } {
  // Удаляем все, кроме цифр и плюса в начале
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  
  // Проверяем, начинается ли номер с плюса
  if (!cleanPhone.startsWith('+')) {
    return {
      isValid: false,
      error: 'Номер должен начинаться с +'
    };
  }

  // Проверяем длину (минимум код страны + 9 цифр)
  if (cleanPhone.length < 11) {
    return {
      isValid: false,
      error: 'Номер телефона слишком короткий'
    };
  }

  // Проверяем, соответствует ли код страны одной из стран СНГ
  const countryCode = Object.keys(CIS_COUNTRY_CODES).find(code => 
    cleanPhone.startsWith(code)
  );

  if (!countryCode) {
    return {
      isValid: false,
      error: 'Номер должен быть из страны СНГ'
    };
  }

  // Проверяем общую длину номера (код страны + номер)
  const expectedLengths: { [key: string]: number } = {
    '+7': 12,    // +7 XXX XXX XX XX
    '+374': 12,  // +374 XX XXX XXX
    '+375': 13,  // +375 XX XXX XX XX
    '+380': 13,  // +380 XX XXX XX XX
    '+992': 13,  // +992 XX XXX XX XX
    '+993': 12,  // +993 XX XXX XXXX
    '+994': 13,  // +994 XX XXX XX XX
    '+995': 13,  // +995 XXX XXX XXX
    '+996': 13,  // +996 XXX XXX XXX
    '+998': 13,  // +998 XX XXX XX XX
  };

  if (cleanPhone.length !== expectedLengths[countryCode]) {
    return {
      isValid: false,
      error: 'Неверная длина номера'
    };
  }

  return { isValid: true };
}

// Форматирует номер телефона в зависимости от страны
export function formatPhoneNumber(phone: string): string {
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  
  // Если номер пустой или содержит только +, возвращаем как есть
  if (!cleanPhone || cleanPhone === '+') {
    return cleanPhone;
  }

  // Определяем код страны
  const countryCode = Object.keys(CIS_COUNTRY_CODES).find(code => 
    cleanPhone.startsWith(code)
  );

  if (!countryCode) {
    return cleanPhone;
  }

  const numberWithoutCode = cleanPhone.slice(countryCode.length);
  
  // Форматируем в зависимости от страны
  switch(countryCode) {
    case '+7':
      return numberWithoutCode.length <= 3 
        ? `${countryCode} ${numberWithoutCode}`
        : numberWithoutCode.length <= 6
        ? `${countryCode} ${numberWithoutCode.slice(0, 3)} ${numberWithoutCode.slice(3)}`
        : numberWithoutCode.length <= 8
        ? `${countryCode} ${numberWithoutCode.slice(0, 3)} ${numberWithoutCode.slice(3, 6)} ${numberWithoutCode.slice(6)}`
        : `${countryCode} ${numberWithoutCode.slice(0, 3)} ${numberWithoutCode.slice(3, 6)} ${numberWithoutCode.slice(6, 8)} ${numberWithoutCode.slice(8)}`;
    
    // Добавляем форматирование для других стран по аналогии
    default:
      // Общий формат для остальных стран
      return numberWithoutCode.length <= 3
        ? `${countryCode} ${numberWithoutCode}`
        : numberWithoutCode.length <= 6
        ? `${countryCode} ${numberWithoutCode.slice(0, 3)} ${numberWithoutCode.slice(3)}`
        : `${countryCode} ${numberWithoutCode.slice(0, 3)} ${numberWithoutCode.slice(3, 6)} ${numberWithoutCode.slice(6)}`;
  }
}
