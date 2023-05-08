import ReactFlow, { MiniMap, Background, BackgroundVariant, Controls } from 'react-flow-renderer';
import { ReactFlowNodeProps } from '@/types';

export const ReactFlowNode: React.FC<ReactFlowNodeProps> = function ({ initialNodes }) {
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