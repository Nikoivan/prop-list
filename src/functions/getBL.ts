export default function getBL(arg: number) {
  switch (true) {
    case arg > 20:
      return "level-high";
    case arg <= 20 && arg > 10:
      return "level-medium";
    case arg <= 10:
      return "level-low";
  }
}
