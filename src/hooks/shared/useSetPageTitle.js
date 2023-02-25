import { useEffect } from "react";

export default function useSetPageTitle(title) {
  useEffect(() => {
    window.document.title = `Crown Dental | ${title}`;
  }, [title]);
}
