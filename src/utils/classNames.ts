// To add multiple classes to an element
interface ClassEntry {
  [className: string]: boolean;
}

export function classNames(
  ...classes: (string | ClassEntry | null | undefined)[]
): string {
  const finalClasses: string[] = [];

  classes.forEach((classEntry) => {
    if (typeof classEntry === "string") {
      finalClasses.push(classEntry);
    } else if (classEntry && typeof classEntry === "object") {
      for (const [className, condition] of Object.entries(classEntry)) {
        if (condition) {
          finalClasses.push(className);
        }
      }
    }
  });

  return finalClasses.join(" ");
}
