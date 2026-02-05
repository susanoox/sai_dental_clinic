"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import React from "react"

const components = {
  h2: (props: any) => (
    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-700 leading-relaxed mb-6" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 space-y-2 mb-6" {...props} />
  ),
  li: (props: any) => <li className="text-gray-700" {...props} />,
  hr: () => <div className="my-12 border-t border-gray-200" />,
}

interface MDXClientRendererProps {
  source: MDXRemoteSerializeResult
}

export default function MDXClientRenderer({ source }: MDXClientRendererProps) {
  return <MDXRemote {...source} components={components} />
}
