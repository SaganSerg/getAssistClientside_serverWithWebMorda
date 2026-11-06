function validatePhoneNumber(phoneStr, countryTemplates) {
  for (const country in countryTemplates) {
    const template = countryTemplates[country].phonePlaceholder;
    const regexString =
      "^" + template.replace(/[+()]/g, "\\$&").replace(/X/g, "\\d") + "$";
    const regex = new RegExp(regexString);
    if (regex.test(phoneStr)) {
      return true;
    }
  }
  return false;
}
function normalizePhoneNumber(phone) {
    return phone.replace(/\D/g, '');
}
module.exports = { validatePhoneNumber, normalizePhoneNumber };