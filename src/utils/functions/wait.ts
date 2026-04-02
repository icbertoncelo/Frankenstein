export async function waitMs(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}