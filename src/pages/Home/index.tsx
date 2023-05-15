import OverviewFlow from "@/components/OverviewFlow";
import { FlowJson, edgesJson } from "@/store";
import { MarkerType } from "react-flow-renderer";
import { useSetRecoilState } from "recoil";

const initialNodes = [
  {
    id: "1",
    type: "ResizableNode",
    data: { label: "NodeResizer" },
    position: { x: 0, y: 50 },
    style: {
      background: "#fff",
      border: "1px solid black",
      borderRadius: 15,
      fontSize: 12,
    },
  },
  {
    id: "2",
    type: "ResizableNodeSelected",
    data: { label: "NodeResizer when selected" },
    position: { x: 100, y: 300 },
    style: {
      background: "#fff",
      border: "1px solid black",
      borderRadius: 15,
      fontSize: 12,
    },
  },
  {
    id: "3",
    type: "CustomResizerNode",
    data: { label: "Custom Resize Icon" },
    position: { x: 150, y: 150 },
    style: {
      background: "#fff",
      fontSize: 12,
      border: "1px solid black",
      padding: 5,
      borderRadius: 15,
      height: 100,
    },
  },
];

const initEdge = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "bezier edge (default)",
    className: "normal-edge",
  },
  {
    id: "e2-2a",
    source: "2",
    target: "2a",
    type: "smoothstep",
    label: "smoothstep edge",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "step",
    label: "step edge",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "straight",
    label: "straight edge",
  },
  {
    id: "e3-3a",
    source: "3",
    target: "3a",
    type: "straight",
    label: "label only edge",
    style: { stroke: "none" },
  },
  {
    id: "e3-5",
    source: "4",
    target: "5",
    animated: true,
    label: "animated styled edge",
    style: { stroke: "red" },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    label: "styled label",
    labelStyle: { fill: "red", fontWeight: 700 },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "e5-7",
    source: "5",
    target: "7",
    label: "label with styled bg",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export default function Home() {
  const setNodes = useSetRecoilState(FlowJson);
  const setEdges = useSetRecoilState(edgesJson);
  setNodes(initialNodes);
  setEdges(initEdge);
  return <OverviewFlow />;
}
