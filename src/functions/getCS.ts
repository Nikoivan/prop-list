export default function getCS(arg: string) {
  switch (arg) {
    case "USD":
      return "$ ";
    case "EUR":
      return "€ ";
    default:
      return `${arg} `;
  }
}
