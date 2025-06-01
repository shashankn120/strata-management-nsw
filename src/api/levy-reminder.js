export const config = {
  runtime: 'vercel/edge@2.0.0',
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
