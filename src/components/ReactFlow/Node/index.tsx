import ReactFlow, { MiniMap, Background, BackgroundVariant, Controls } from 'react-flow-renderer';


const initialNodes = [
  {
    id: '1',
    type: 'ResizableNode',
    data: { label: 'NodeResizer' },
    position: { x: 0, y: 50 },
    style: { background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12 },
  },
  {
    id: '2',
    type: 'ResizableNodeSelected',
    data: { label: 'NodeResizer when selected' },
    position: { x: 100, y: 300 },
    style: { background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12 },
  },
  {
    id: '3',
    type: 'CustomResizerNode',
    data: { label: 'Custom Resize Icon' },
    position: { x: 150, y: 150 },
    style: {
      background: '#fff',
      fontSize: 12,
      border: '1px solid black',
      padding: 5,
      borderRadius: 15,
      height: 100,
    },
  },
];


export const ReactFlowNode = () => {
  return (
    <div className='w-full h-100vh'>
      <ReactFlow
        defaultNodes={initialNodes}
        className="react-flow-node-resizer-example"
        minZoom={0.2}
        maxZoom={4}
        fitView
      >
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowNode;