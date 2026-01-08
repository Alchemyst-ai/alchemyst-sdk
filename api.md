# V1

## Context

Types:

- <code><a href="./src/resources/v1/context/context.ts">ContextDeleteResponse</a></code>
- <code><a href="./src/resources/v1/context/context.ts">ContextAddResponse</a></code>
- <code><a href="./src/resources/v1/context/context.ts">ContextSearchResponse</a></code>

Methods:

- <code title="post /api/v1/context/delete">client.v1.context.<a href="./src/resources/v1/context/context.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /api/v1/context/add">client.v1.context.<a href="./src/resources/v1/context/context.ts">add</a>({ ...params }) -> ContextAddResponse</code>
- <code title="post /api/v1/context/search">client.v1.context.<a href="./src/resources/v1/context/context.ts">search</a>({ ...params }) -> ContextSearchResponse</code>

### Traces

Types:

- <code><a href="./src/resources/v1/context/traces.ts">TraceListResponse</a></code>
- <code><a href="./src/resources/v1/context/traces.ts">TraceDeleteResponse</a></code>

Methods:

- <code title="get /api/v1/context/traces">client.v1.context.traces.<a href="./src/resources/v1/context/traces.ts">list</a>({ ...params }) -> TraceListResponse</code>
- <code title="delete /api/v1/context/traces/{traceId}/delete">client.v1.context.traces.<a href="./src/resources/v1/context/traces.ts">delete</a>(traceID) -> TraceDeleteResponse</code>

### View

Types:

- <code><a href="./src/resources/v1/context/view.ts">ViewRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/context/view.ts">ViewDocsResponse</a></code>

Methods:

- <code title="get /api/v1/context/view">client.v1.context.view.<a href="./src/resources/v1/context/view.ts">retrieve</a>({ ...params }) -> ViewRetrieveResponse</code>
- <code title="get /api/v1/context/view/docs">client.v1.context.view.<a href="./src/resources/v1/context/view.ts">docs</a>({ ...params }) -> ViewDocsResponse</code>

### Memory

Types:

- <code><a href="./src/resources/v1/context/memory.ts">MemoryUpdateResponse</a></code>

Methods:

- <code title="post /api/v1/context/memory/update">client.v1.context.memory.<a href="./src/resources/v1/context/memory.ts">update</a>({ ...params }) -> MemoryUpdateResponse</code>
- <code title="post /api/v1/context/memory/delete">client.v1.context.memory.<a href="./src/resources/v1/context/memory.ts">delete</a>({ ...params }) -> void</code>

### AddAsync

Types:

- <code><a href="./src/resources/v1/context/add-async/add-async.ts">AddAsyncCreateResponse</a></code>
- <code><a href="./src/resources/v1/context/add-async/add-async.ts">AddAsyncCancelResponse</a></code>

Methods:

- <code title="post /api/v1/context/add-async">client.v1.context.addAsync.<a href="./src/resources/v1/context/add-async/add-async.ts">create</a>({ ...params }) -> AddAsyncCreateResponse</code>
- <code title="delete /api/v1/context/add-async/{id}/cancel">client.v1.context.addAsync.<a href="./src/resources/v1/context/add-async/add-async.ts">cancel</a>(id) -> AddAsyncCancelResponse</code>

#### Status

Types:

- <code><a href="./src/resources/v1/context/add-async/status.ts">StatusRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/context/add-async/status.ts">StatusListResponse</a></code>

Methods:

- <code title="get /api/v1/context/add-async/{id}/status">client.v1.context.addAsync.status.<a href="./src/resources/v1/context/add-async/status.ts">retrieve</a>(id) -> StatusRetrieveResponse</code>
- <code title="get /api/v1/context/add-async/status">client.v1.context.addAsync.status.<a href="./src/resources/v1/context/add-async/status.ts">list</a>({ ...params }) -> StatusListResponse</code>

## Org

### Context

Types:

- <code><a href="./src/resources/v1/org/context.ts">ContextViewResponse</a></code>

Methods:

- <code title="post /api/v1/org/context/view">client.v1.org.context.<a href="./src/resources/v1/org/context.ts">view</a>({ ...params }) -> ContextViewResponse</code>
