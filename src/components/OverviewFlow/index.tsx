// index.js
import { useRef, useState } from 'react';
import { Node as Nodes } from "@/types";
import ReactFlow, {
  MiniMap,    // 缩略图
  Controls,   // 画布缩放大小控制
  Background,
} from 'react-flow-renderer';

const initialElements: Nodes[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'output',
    data: { label: 'Node 2' },
    position: { x: 500, y: 5 },
    style: { color: 'red', background: 'yellow' },
  },
  {
    id: '3',
    type: 'input',
    data: { label: 'Node 3' },
    position: { x: 250, y: 200 },
    style: { border: '1px solid black' },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Node 4' },
    position: { x: 500, y: 200 },
    style: { width: 100 },
  },
  {
    id: '5',
    type: 'default',
    data: { label: 'Node 5' },
    position: { x: 250, y: 400 },
  },
  {
    id: '6',
    type: 'default',
    data: { label: <div>Node 6 - React Element</div> },
    position: { x: 500, y: 400 },
    style: { color: 'blue', background: 'green' },
  },
  {
    id: '7',
    type: 'input',
    data: { label: 'Node 7' },
    position: { x: 50, y: 100 },
    style: { border: '2px solid purple' },
  },
  {
    id: '8',
    type: 'output',
    data: { label: 'Node 8' },
    position: { x: 50, y: 300 },
    style: { color: 'orange', background: 'pink', width: 150 },
  },
  {
    id: '9',
    type: 'default',
    data: { label: 'Node 9' },
    position: { x: 750, y: 100 },
    style: { border: '2px dashed black' },
  },
  {
    id: '10',
    type: 'default',
    data: { label: 'Node 10' },
    position: { x: 750, y: 300 },
    style: { color: 'white', background: 'gray', border: '2px dotted red', width: 200 },
  },
];

export const OverviewFlow = () => {
  const [elements] = useState(initialElements);
  const flowRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className='w-full h-full'>
      <ReactFlow
        ref={flowRef}
        nodes={elements}
      >
        {/* <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'output') return '#ff0072';
            if (n.type === 'default') return '#1a192b';

            return '#eee';
          }}
          nodeColor={(n) => {
            if (n.type === 'output') return '#ff0072';
            return '#fff';
          }}
        /> */}
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default OverviewFlow;