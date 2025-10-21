export function checkIsAnagram(str1: string, str2: string) {
  const normalize = (str: string) => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  
  return normalize(str1) === normalize(str2); 
}
