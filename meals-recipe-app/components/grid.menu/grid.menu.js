import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import styles from "./grid.menu.css";

export default function Search() {
    const [results, setResults] = useState()

    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={async (e) => {
            const { value } = e.currentTarget
            // Dynamically load fuse.js
            const Fuse = (await import('fuse.js')).default
            const fuse = new Fuse(names)
  
            setResults(fuse.search(value))
          }}
        />
        <pre>Results: {JSON.stringify(results, null, 2)}</pre>
      </div>
    )
}
