export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { name, email, message } = await req.json();

  return new Response(
    JSON.stringify({ success: true, message: `Thanks for reaching out, ${name}.` }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
