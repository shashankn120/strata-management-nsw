export const config = {
  runtime: 'vercel/edge@2.0.0',
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
