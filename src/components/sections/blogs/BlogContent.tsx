"use client"

import { useState, use } from "react"
import MDXRenderer from "@/components/mdx/MDXRenderer"
import { serialize } from "next-mdx-remote/serialize"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

interface BlogContentProps {
    content: string
    excerpt: string
}

async function serializeMdx(content: string): Promise<MDXRemoteSerializeResult> {
    return serialize(content)
}

export default function BlogContent({ content, excerpt }: BlogContentProps) {
    const mdxSourcePromise = serializeMdx(content)
    
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

                <MDXRendererWrapper sourcePromise={mdxSourcePromise} />
            </div>
        </div>
    )
}

function MDXRendererWrapper({ sourcePromise }: { sourcePromise: Promise<MDXRemoteSerializeResult> }) {
    const mdxSource = use(sourcePromise)
    return <MDXRenderer source={mdxSource} />
}
