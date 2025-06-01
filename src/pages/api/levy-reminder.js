export const config = {
  runtime: 'edge',
};

export default async function handler() {
  return new Response(
    JSON.stringify({
      message: 'Reminder sent to all owners with pending levies.',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
