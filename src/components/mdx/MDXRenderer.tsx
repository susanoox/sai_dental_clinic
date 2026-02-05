"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import React from "react"

let isKeyTakeawaySection = false

const components = {
  h2: (props: any) => {
    const text =
      typeof props.children === "string"
        ? props.children
        : Array.isArray(props.children)
        ? props.children.join("")
        : ""

    if (text.toLowerCase().includes("key takeaways")) {
      isKeyTakeawaySection = true
      return (
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Key Takeaways
        </h2>
      )
    }

    isKeyTakeawaySection = false
    return (
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4" {...props} />
    )
  },

  ul: (props: any) => {
    if (isKeyTakeawaySection) {
      return (
        <div className="mb-12 rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <ul className="space-y-3">
            {props.children}
          </ul>
        </div>
      )
    }

    return <ul className="list-disc pl-6 space-y-2 mb-6" {...props} />
  },

  li: (props: any) => {
    if (isKeyTakeawaySection) {
      return (
        <li className="flex gap-3 text-gray-700">
          <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
          <span>{props.children}</span>
        </li>
      )
    }

    return <li className="text-gray-700" {...props} />
  },

  h3: (props: any) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3" {...props} />
  ),

  p: (props: any) => (
    <p className="text-gray-700 leading-relaxed mb-6" {...props} />
  ),

  hr: () => <div className="my-12 border-t border-gray-200" />,
}

interface MDXClientRendererProps {
  source: MDXRemoteSerializeResult
}

export default function MDXClientRenderer({ source }: MDXClientRendererProps) {
  return <MDXRemote {...source} components={components} />
}
