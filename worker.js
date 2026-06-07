export default {
  async fetch(request, env) {

    if (request.method === "GET") {
      return new Response("Beauty Restore AI is running ✨");
    }

    if (request.method === "POST") {
      const body = await request.json();

      const apiKey = env.OPENAI_API_KEY; // your secret

      return new Response(JSON.stringify({
        success: true,
        message: "received"
      }));
    }

    return new Response("Method not allowed", { status: 405 });
  }
}
