import React, { FC, useState } from 'react';

type TreeNodeProps = {
  id: string;
  name: string;
  children?: TreeNodeProps[];
};

type Props = {
  data: TreeNodeProps[];
};

const TreeNode: FC<TreeNodeProps> = ({ id, name, children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <span onClick={handleCollapse}>
        {collapsed ? '+' : '-'}
      </span>
      <span>{name}</span>
      {children && !collapsed && (
        <div>
          {children.map((child) => (
            <TreeNode key={child.id} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Tree: FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((node) => (
        <TreeNode key={node.id} {...node} />
      ))}
    </div>
  );
};

export default Tree;
