export const config = {
  runtime: 'vercel/edge@2.0.0',
};

export default async function handler() {
  const mockData = [
    { id: 1, title: 'Lift repairs', status: 'In Progress' },
    { id: 2, title: 'Pool cleaning', status: 'Completed' },
  ];

  return new Response(JSON.stringify(mockData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
