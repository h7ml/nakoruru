import OverviewFlow from '@/components/OverviewFlow';
import { FlowJson } from '@/store';
import { useSetRecoilState } from 'recoil';

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


export default function Home() {
  const setNodes = useSetRecoilState(FlowJson)
  setNodes(initialNodes)
  return <OverviewFlow />
}
