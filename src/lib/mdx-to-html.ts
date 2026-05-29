import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import type { Root } from "mdast"
import { visit } from "unist-util-visit"

function remarkKeyTakeaways() {
  let inKeyTakeaways = false

  return (tree: Root) => {
    visit(tree, (node, index, parent) => {
      if (node.type === "heading") {
        const heading = node as any
        const text = heading.children
          .map((c: any) => c.value || "")
          .join("")
          .toLowerCase()
        if (text.includes("key takeaways")) {
          inKeyTakeaways = true
          heading.children = [{ type: "text", value: "Key Takeaways" }]
          heading.data = {
            hProperties: { className: "key-takeaways-heading" },
          }
        } else {
          inKeyTakeaways = false
        }
        return
      }

      if (inKeyTakeaways && node.type === "list" && parent) {
        node.data = {
          hProperties: { className: "key-takeaways-list" },
        }
        inKeyTakeaways = false
        return
      }
    })
  }
}

export async function renderMdxToHtml(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkKeyTakeaways)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content)

  return String(result)
}
