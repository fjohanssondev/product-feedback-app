'use client'

import React from "react"
import { trpc } from "@/app/_trpc/client"

import Suggestion from "./Suggestion"

const SuggestionList = () => {

  const suggestions = trpc.getFeedback.useQuery()

  return (
    <>
      {suggestions.data?.map((suggestion) => (
        <div style={{ marginBottom: '1rem' }} key={suggestion.id}>
          <Suggestion {...suggestion} />
        </div>
      ))}
    </>
  )

}

export default SuggestionList