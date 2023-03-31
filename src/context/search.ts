import React, { useContext, useState } from "react"

type SearchContext = {
  value?: string;
  getValue?: (value :string) => void
}

export const SearchContext = React.createContext<SearchContext>({})

export const useInitSearchContext = () => {
  const [value, setValue] = useState('')

  const getValue = (value :string) => {
    setValue(value)
  }
  
  return {
    value: value,
    getValue: getValue
  }
}

export const useSearchContext = () => useContext(SearchContext)

