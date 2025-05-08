// This is a simplified version of the cn utility function
export function cn(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  