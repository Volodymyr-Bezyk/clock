type Date = {
  hours: number;
  minutes: number;
  seconds: number;
  amOrPm: string;
};

export function getCurrentTime(): Date {
  const now = new Date();
  const currentHour = now.getHours();

  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hours =
    currentHour === 0 ? 12 : currentHour > 12 ? currentHour - 12 : currentHour;

  const amOrPm = currentHour >= 12 ? "PM" : "AM";

  return { hours, minutes, seconds, amOrPm };
}
