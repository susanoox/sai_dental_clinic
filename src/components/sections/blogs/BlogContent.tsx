"use client"

import { useEffect, useState } from "react"
import MDXRenderer from "@/components/mdx/MDXRenderer"
import { serialize } from "next-mdx-remote/serialize"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

interface BlogContentProps {
    content: string
    excerpt: string
}

export default function BlogContent({ content, excerpt }: BlogContentProps) {
    const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null)

    useEffect(() => {
        serialize(content).then(setMdxSource)
    }, [content])

    if (!mdxSource) {
        return (
            <div className="max-w-4xl mx-auto">
                <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg md:prose-xl max-w-none mb-12
        prose-headings:font-semibold
        prose-headings:text-gray-900
        prose-p:text-gray-700
        prose-p:leading-relaxed
        prose-ul:space-y-2
        prose-li:marker:text-blue-500
        prose-a:text-blue-600
        prose-strong:text-gray-900
      ">
                <div className="mb-10">
                    <p className="text-xl font-medium text-gray-700 leading-relaxed">
                        {excerpt}
                    </p>
                </div>

                <MDXRenderer source={mdxSource} />
            </div>
        </div>
    )
}
