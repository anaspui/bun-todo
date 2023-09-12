console.log("Hello via Bun!");
Bun.serve({
    hostname: "localhost",
    port: 3000,
    fetch: fetchHandler
})
type Todo = { id: number, name: string}
const todos: Todo[] = []
function fetchHandler(request: Request): Response{
    const url = new URL(request.url)
    if (url.pathname === "" || url.pathname === "/") {
        return new Response(Bun.file("index.html"));
    }
    return new Response("404 not found", {status: 404})
}