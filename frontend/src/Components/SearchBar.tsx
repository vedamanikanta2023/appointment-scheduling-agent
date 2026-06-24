import { useMemo } from "react";

const debounce = (cb: Function, d = 200) => {
  let timeout: any;
  return function (...args: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

export default function DebounsedSearchBar() {
  const debounce2 = useMemo(
    () =>
      debounce(function (searchstring: string) {
        fetch("/search-products?id=" + searchstring);
      }, 300),
    [],
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounce2(e.target.value);
  };
  return <input onChange={handleSearch} />;
}
