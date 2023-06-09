import type { FC } from 'react'
import React, { useState } from 'react'

interface TreeNodeProps {
  id: string
  name: string
  children?: TreeNodeProps[]
}

interface Props {
  data: TreeNodeProps[]
}

const TreeNode: FC<TreeNodeProps> = ({ id, name, children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div data-id={id}>
      <span onClick={handleCollapse}>{collapsed ? '+' : '-'}</span>
      <span>{name}</span>
      {children && !collapsed && (
        <div>
          {children.map((child) => (
            <TreeNode key={child.id} {...child} />
          ))}
        </div>
      )}
    </div>
  )
}

export const Tree: FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((node) => (
        <TreeNode key={node.id} {...node} />
      ))}
    </div>
  )
}

export default Tree
