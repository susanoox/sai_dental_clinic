"use client"

import * as React from "react"
import { useMDXComponents } from "@mdx-js/react"

type Props = {
  code: string
}

export default function MDXContent({ code }: Props) {
  const components = useMDXComponents()

  const Component = React.useMemo(
    () =>
      new Function("React", "components", `${code}`)(
        React,
        components
      ),
    [code, components]
  )

  return <Component />
}
