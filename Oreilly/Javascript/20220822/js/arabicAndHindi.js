let arabic = Intl.NumberFormat("ar", {useGrouping: false}).format;
console.log(arabic(1234567890));

let hindi = Intl.NumberFormat("hi-IN-u-nu-dava").format;
console.log(hindi(1234567890));