const countdown = () => {
  const endDate = new Date("March 30, 2024 00:00:00").getTime();
  const now = new Date().getTime();

  const difference = endDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const timeDays = Math.floor(difference / days);
  const timeHours = Math.floor((difference % days) / hours);
  console.log(timeDays);
};

countdown();
