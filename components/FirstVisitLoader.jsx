"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function FirstVisitLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const visited = localStorage.getItem("__visited_site");
      if (!visited) {
        setShow(true);
        localStorage.setItem("__visited_site", "1");
        const t = setTimeout(() => setShow(false), 1700);
        return () => clearTimeout(t);
      }
    } catch (e) {
      // ignore (SSR safety)
    }
  }, []);

  if (!show) return null;
  return <Loading />;
}
