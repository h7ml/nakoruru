import ImportedTree from '@/components/Tree'

export function Tree() {
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
  ]
  return (
    <div className="tree">
      <ImportedTree data={mockData}></ImportedTree>
    </div>
  )
}

export default Tree
