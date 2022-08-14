//? Object comuns Date

const past = new Date('May 1 2020 7:47:00');
const present = new Date();
console.log('🚀 ', typeof present, present);

console.log('🚀 getFullYear ', present.getFullYear());
console.log('🚀 getMonth ', present.getMonth());
console.log('🚀 getDate ', present.getDate());
console.log('🚀 getDay ', present.getDay());

console.log('🚀 getHours ', present.getHours());
console.log('🚀 getMinutes ', present.getMinutes());
console.log('🚀 getSeconds ', present.getSeconds());

console.log('🚀 timestamp ', present.getTime());

console.log('🚀 toDateString: ', present.toDateString());
console.log('🚀 toTimeString: ', present.toTimeString());
console.log('🚀 toLocaleString: ', present.toLocaleString());

console.log('🚀 timestamp ', present.getTime(), past.getTime());

const difference = present.getTime() - past.getTime();
console.log('🚀 difference', difference);

const seconds = Math.round(difference / 1000);
console.log('🚀 seconds', { seconds });

const minutes = Math.round(seconds / 60);
console.log('🚀 minutes', { minutes });

const hours = Math.round(minutes / 60);
console.log('🚀 hours', { hours });

const days = Math.round(hours / 24);
console.log('🚀 days', { days });

const timestamp = 1660508473253;
console.log(new Date(timestamp));
