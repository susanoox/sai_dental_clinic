import type { MDXComponents } from "mdx/types"

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="text-gray-700 leading-relaxed mb-5">
      {children}
    </p>
  ),

  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-3 my-6">
      {children}
    </ul>
  ),

  li: ({ children }) => (
    <li className="text-gray-700">
      {children}
    </li>
  ),

  blockquote: ({ children }) => (
    <div className="border-l-4 border-blue-500 bg-blue-50 p-5 my-8 rounded-lg">
      <p className="text-blue-900 font-medium">
        {children}
      </p>
    </div>
  ),
}
