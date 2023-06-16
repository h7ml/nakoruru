import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  NODE: 'node',
};

const TreeNode = ({ node, index, moveNode }) => {
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.NODE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveNode(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.NODE, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {node.name}
      {node.children && (
        <div style={{ marginLeft: '20px' }}>
          {node.children.map((child, childIndex) => (
            <TreeNode key={child.id} node={child} index={childIndex} moveNode={moveNode} />
          ))}
        </div>
      )}
    </div>
  );
};

const About = () => {
  const mockData = [
    {
      id: 1,
      name: 'Node 1',
      children: [
        {
          id: 2,
          name: 'Node 1.1',
          children: [
            {
              id: 3,
              name: 'Node 1.1.1',
            },
            {
              id: 4,
              name: 'Node 1.1.2',
            },
          ],
        },
        {
          id: 5,
          name: 'Node 1.2',
        },
      ],
    },
    {
      id: 6,
      name: 'Node 2',
      children: [
        {
          id: 7,
          name: 'Node 2.1',
        },
        {
          id: 8,
          name: 'Node 2.2',
        },
      ],
    },
  ];

  const [treeData, setTreeData] = React.useState(mockData);

  const moveNode = (dragIndex, hoverIndex) => {
    const draggedNode = treeData[dragIndex];
    const updatedTreeData = [...treeData];
    updatedTreeData.splice(dragIndex, 1);
    updatedTreeData.splice(hoverIndex, 0, draggedNode);
    setTreeData(updatedTreeData);
  };

  return (
    <div className="tree">
      {treeData.map((node, index) => (
        <TreeNode key={node.id} node={node} index={index} moveNode={moveNode} />
      ))}
    </div>
  );
};

export default About;
