export async function fetchAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  if (!res.ok) {
    throw new Error("Error");
  }
  return await res.json();
}
