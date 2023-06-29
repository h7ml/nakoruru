import ReactFlow, { Background, BackgroundVariant, Controls, MiniMap } from 'react-flow-renderer'
import PropTypes from 'prop-types'
import type { ReactFlowNodeProps } from '@/types'

export const ReactFlowNode: React.FC<ReactFlowNodeProps> = function ({
  initialNodes = [],
  initialEdges = [],
  onNodesChange = () => {},
  onEdgesChange = () => {},
}) {
  return (
    <div className="w-full h-[calc(100vh-134px)]">
      <ReactFlow
        defaultNodes={initialNodes}
        className="react-flow-node-resizer-example"
        minZoom={0.2}
        maxZoom={4}
        nodes={initialNodes}
        edges={initialEdges}
        onNodesChange={(e) => {
          console.log('%c [ e ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', e)
          onNodesChange(e)
        }}
        onEdgesChange={(e) => {
          console.log('%c [ e ]-19', 'font-size:13px; background:pink; color:#bf2c9f;', e)
          onEdgesChange(e)
        }}
        fitView
      >
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} />
        <Controls />
      </ReactFlow>
    </div>
  )
}

ReactFlowNode.propTypes = {
  initialNodes: PropTypes.arrayOf(PropTypes.object),
  initialEdges: PropTypes.arrayOf(PropTypes.object),
  onNodesChange: PropTypes.func,
  onEdgesChange: PropTypes.func,
}

export default ReactFlowNode
