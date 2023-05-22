import React, { useContext, useState } from "react"

type ContentContext = {
  content?: string,
  getContent?: () => void
}

export const ContentContext = React.createContext<ContentContext>({})

export const useInitContentContext = () => {
  const [content, setContent] = useState('Articles')

  const getContent = () => {
    if (content === "Articles") {
      setContent("News");
    } else {
      setContent("Articles");
    }
  }

  return {
    content: content,
    getContent: getContent
  }
}

export const useContentContext = () => useContext(ContentContext)
