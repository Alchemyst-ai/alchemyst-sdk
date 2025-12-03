# V1

## Context

Types:

- <code><a href="./src/resources/v1/context/context.ts">ContextDeleteResponse</a></code>
- <code><a href="./src/resources/v1/context/context.ts">ContextAddResponse</a></code>
- <code><a href="./src/resources/v1/context/context.ts">ContextSearchResponse</a></code>

Methods:

- <code title="post /api/v1/context/delete">client.v1.context.<a href="./src/resources/v1/context/context.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /api/v1/context/add">client.v1.context.<a href="./src/resources/v1/context/context.ts">add</a>({ ...params }) -> unknown</code>
- <code title="post /api/v1/context/search">client.v1.context.<a href="./src/resources/v1/context/context.ts">search</a>({ ...params }) -> ContextSearchResponse</code>

### Traces

Types:

- <code><a href="./src/resources/v1/context/traces.ts">TraceListResponse</a></code>
- <code><a href="./src/resources/v1/context/traces.ts">TraceDeleteResponse</a></code>

Methods:

- <code title="get /api/v1/context/traces">client.v1.context.traces.<a href="./src/resources/v1/context/traces.ts">list</a>() -> TraceListResponse</code>
- <code title="delete /api/v1/context/traces/{traceId}/delete">client.v1.context.traces.<a href="./src/resources/v1/context/traces.ts">delete</a>(traceID) -> TraceDeleteResponse</code>

### View

Types:

- <code><a href="./src/resources/v1/context/view.ts">ViewRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/context/view.ts">ViewDocsResponse</a></code>

Methods:

- <code title="get /api/v1/context/view">client.v1.context.view.<a href="./src/resources/v1/context/view.ts">retrieve</a>() -> ViewRetrieveResponse</code>
- <code title="get /api/v1/context/view/docs">client.v1.context.view.<a href="./src/resources/v1/context/view.ts">docs</a>() -> unknown</code>

### Memory

Methods:

- <code title="post /api/v1/context/memory/update">client.v1.context.memory.<a href="./src/resources/v1/context/memory.ts">update</a>({ ...params }) -> void</code>
- <code title="post /api/v1/context/memory/delete">client.v1.context.memory.<a href="./src/resources/v1/context/memory.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /api/v1/context/memory/add">client.v1.context.memory.<a href="./src/resources/v1/context/memory.ts">add</a>({ ...params }) -> void</code>

## Org

### Context

Types:

- <code><a href="./src/resources/v1/org/context.ts">ContextViewResponse</a></code>

Methods:

- <code title="post /api/v1/org/context/view">client.v1.org.context.<a href="./src/resources/v1/org/context.ts">view</a>({ ...params }) -> ContextViewResponse</code>
