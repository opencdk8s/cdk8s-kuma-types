# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CircuitBreaker <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreaker"></a>

CircuitBreaker is the Schema for the circuitbreaker API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreaker.Initializer"></a>

```typescript
import { CircuitBreaker } from '@opencdk8s/cdk8s-kuma-types'

new CircuitBreaker(scope: Construct, id: string, props?: CircuitBreakerProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreaker.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreaker.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreaker.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.CircuitBreakerProps`](#@opencdk8s/cdk8s-kuma-types.CircuitBreakerProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreaker.manifest"></a>

```typescript
import { CircuitBreaker } from '@opencdk8s/cdk8s-kuma-types'

CircuitBreaker.manifest(props?: CircuitBreakerProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreaker.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.CircuitBreakerProps`](#@opencdk8s/cdk8s-kuma-types.CircuitBreakerProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreaker.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "CircuitBreaker".

---

### Dataplane <a name="@opencdk8s/cdk8s-kuma-types.Dataplane"></a>

Dataplane is the Schema for the dataplanes API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.Dataplane.Initializer"></a>

```typescript
import { Dataplane } from '@opencdk8s/cdk8s-kuma-types'

new Dataplane(scope: Construct, id: string, props?: DataplaneProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Dataplane.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Dataplane.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.Dataplane.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.DataplaneProps`](#@opencdk8s/cdk8s-kuma-types.DataplaneProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.Dataplane.manifest"></a>

```typescript
import { Dataplane } from '@opencdk8s/cdk8s-kuma-types'

Dataplane.manifest(props?: DataplaneProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.Dataplane.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.DataplaneProps`](#@opencdk8s/cdk8s-kuma-types.DataplaneProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.Dataplane.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "Dataplane".

---

### DataplaneInsight <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsight"></a>

DataplaneInsight is the Schema for the dataplane insights API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsight.Initializer"></a>

```typescript
import { DataplaneInsight } from '@opencdk8s/cdk8s-kuma-types'

new DataplaneInsight(scope: Construct, id: string, props?: DataplaneInsightProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsight.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsight.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsight.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.DataplaneInsightProps`](#@opencdk8s/cdk8s-kuma-types.DataplaneInsightProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsight.manifest"></a>

```typescript
import { DataplaneInsight } from '@opencdk8s/cdk8s-kuma-types'

DataplaneInsight.manifest(props?: DataplaneInsightProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsight.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.DataplaneInsightProps`](#@opencdk8s/cdk8s-kuma-types.DataplaneInsightProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsight.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "DataplaneInsight".

---

### ExternalService <a name="@opencdk8s/cdk8s-kuma-types.ExternalService"></a>

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.ExternalService.Initializer"></a>

```typescript
import { ExternalService } from '@opencdk8s/cdk8s-kuma-types'

new ExternalService(scope: Construct, id: string, props?: ExternalServiceProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ExternalService.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ExternalService.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ExternalService.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ExternalServiceProps`](#@opencdk8s/cdk8s-kuma-types.ExternalServiceProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.ExternalService.manifest"></a>

```typescript
import { ExternalService } from '@opencdk8s/cdk8s-kuma-types'

ExternalService.manifest(props?: ExternalServiceProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ExternalService.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ExternalServiceProps`](#@opencdk8s/cdk8s-kuma-types.ExternalServiceProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.ExternalService.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "ExternalService".

---

### FaultInjection <a name="@opencdk8s/cdk8s-kuma-types.FaultInjection"></a>

FaultInjection is the Schema for the faultinjections API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.FaultInjection.Initializer"></a>

```typescript
import { FaultInjection } from '@opencdk8s/cdk8s-kuma-types'

new FaultInjection(scope: Construct, id: string, props?: FaultInjectionProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.FaultInjection.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.FaultInjection.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.FaultInjection.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.FaultInjectionProps`](#@opencdk8s/cdk8s-kuma-types.FaultInjectionProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.FaultInjection.manifest"></a>

```typescript
import { FaultInjection } from '@opencdk8s/cdk8s-kuma-types'

FaultInjection.manifest(props?: FaultInjectionProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.FaultInjection.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.FaultInjectionProps`](#@opencdk8s/cdk8s-kuma-types.FaultInjectionProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.FaultInjection.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "FaultInjection".

---

### HealthCheck <a name="@opencdk8s/cdk8s-kuma-types.HealthCheck"></a>

HealthCheck is the Schema for the healthchecks API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.HealthCheck.Initializer"></a>

```typescript
import { HealthCheck } from '@opencdk8s/cdk8s-kuma-types'

new HealthCheck(scope: Construct, id: string, props?: HealthCheckProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.HealthCheck.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.HealthCheck.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.HealthCheck.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.HealthCheckProps`](#@opencdk8s/cdk8s-kuma-types.HealthCheckProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.HealthCheck.manifest"></a>

```typescript
import { HealthCheck } from '@opencdk8s/cdk8s-kuma-types'

HealthCheck.manifest(props?: HealthCheckProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.HealthCheck.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.HealthCheckProps`](#@opencdk8s/cdk8s-kuma-types.HealthCheckProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.HealthCheck.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "HealthCheck".

---

### Kuma <a name="@opencdk8s/cdk8s-kuma-types.Kuma"></a>

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.Kuma.Initializer"></a>

```typescript
import { Kuma } from '@opencdk8s/cdk8s-kuma-types'

new Kuma(scope: Construct, name: string, opts: KumaOptions)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Kuma.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `name`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Kuma.parameter.name"></a>

- *Type:* `string`

---

##### `opts`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Kuma.parameter.opts"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.KumaOptions`](#@opencdk8s/cdk8s-kuma-types.KumaOptions)

---





### Mesh <a name="@opencdk8s/cdk8s-kuma-types.Mesh"></a>

Mesh is the Schema for the meshes API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.Mesh.Initializer"></a>

```typescript
import { Mesh } from '@opencdk8s/cdk8s-kuma-types'

new Mesh(scope: Construct, id: string, props?: MeshProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Mesh.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Mesh.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.Mesh.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.MeshProps`](#@opencdk8s/cdk8s-kuma-types.MeshProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.Mesh.manifest"></a>

```typescript
import { Mesh } from '@opencdk8s/cdk8s-kuma-types'

Mesh.manifest(props?: MeshProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.Mesh.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.MeshProps`](#@opencdk8s/cdk8s-kuma-types.MeshProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.Mesh.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "Mesh".

---

### MeshInsight <a name="@opencdk8s/cdk8s-kuma-types.MeshInsight"></a>

MeshInsight is the Schema for the meshes insights API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.MeshInsight.Initializer"></a>

```typescript
import { MeshInsight } from '@opencdk8s/cdk8s-kuma-types'

new MeshInsight(scope: Construct, id: string, props?: MeshInsightProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.MeshInsight.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.MeshInsight.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.MeshInsight.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.MeshInsightProps`](#@opencdk8s/cdk8s-kuma-types.MeshInsightProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.MeshInsight.manifest"></a>

```typescript
import { MeshInsight } from '@opencdk8s/cdk8s-kuma-types'

MeshInsight.manifest(props?: MeshInsightProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.MeshInsight.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.MeshInsightProps`](#@opencdk8s/cdk8s-kuma-types.MeshInsightProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.MeshInsight.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "MeshInsight".

---

### ProxyTemplate <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplate"></a>

ProxyTemplate is the Schema for the proxytemplates API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplate.Initializer"></a>

```typescript
import { ProxyTemplate } from '@opencdk8s/cdk8s-kuma-types'

new ProxyTemplate(scope: Construct, id: string, props?: ProxyTemplateProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplate.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplate.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplate.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ProxyTemplateProps`](#@opencdk8s/cdk8s-kuma-types.ProxyTemplateProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplate.manifest"></a>

```typescript
import { ProxyTemplate } from '@opencdk8s/cdk8s-kuma-types'

ProxyTemplate.manifest(props?: ProxyTemplateProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplate.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ProxyTemplateProps`](#@opencdk8s/cdk8s-kuma-types.ProxyTemplateProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplate.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "ProxyTemplate".

---

### RateLimit <a name="@opencdk8s/cdk8s-kuma-types.RateLimit"></a>

RateLimit is the Schema for the ratelimits API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.RateLimit.Initializer"></a>

```typescript
import { RateLimit } from '@opencdk8s/cdk8s-kuma-types'

new RateLimit(scope: Construct, id: string, props?: RateLimitProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.RateLimit.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.RateLimit.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.RateLimit.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.RateLimitProps`](#@opencdk8s/cdk8s-kuma-types.RateLimitProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.RateLimit.manifest"></a>

```typescript
import { RateLimit } from '@opencdk8s/cdk8s-kuma-types'

RateLimit.manifest(props?: RateLimitProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.RateLimit.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.RateLimitProps`](#@opencdk8s/cdk8s-kuma-types.RateLimitProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.RateLimit.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "RateLimit".

---

### Retry <a name="@opencdk8s/cdk8s-kuma-types.Retry"></a>

Retry is the Schema for the retries API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.Retry.Initializer"></a>

```typescript
import { Retry } from '@opencdk8s/cdk8s-kuma-types'

new Retry(scope: Construct, id: string, props?: RetryProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Retry.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Retry.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.Retry.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.RetryProps`](#@opencdk8s/cdk8s-kuma-types.RetryProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.Retry.manifest"></a>

```typescript
import { Retry } from '@opencdk8s/cdk8s-kuma-types'

Retry.manifest(props?: RetryProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.Retry.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.RetryProps`](#@opencdk8s/cdk8s-kuma-types.RetryProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.Retry.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "Retry".

---

### ServiceInsight <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsight"></a>

ServiceInsight is the Schema for the services insights API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsight.Initializer"></a>

```typescript
import { ServiceInsight } from '@opencdk8s/cdk8s-kuma-types'

new ServiceInsight(scope: Construct, id: string, props?: ServiceInsightProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsight.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsight.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsight.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ServiceInsightProps`](#@opencdk8s/cdk8s-kuma-types.ServiceInsightProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsight.manifest"></a>

```typescript
import { ServiceInsight } from '@opencdk8s/cdk8s-kuma-types'

ServiceInsight.manifest(props?: ServiceInsightProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsight.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ServiceInsightProps`](#@opencdk8s/cdk8s-kuma-types.ServiceInsightProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsight.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "ServiceInsight".

---

### Timeout <a name="@opencdk8s/cdk8s-kuma-types.Timeout"></a>

Timeout is the Schema for the timeout API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.Timeout.Initializer"></a>

```typescript
import { Timeout } from '@opencdk8s/cdk8s-kuma-types'

new Timeout(scope: Construct, id: string, props?: TimeoutProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Timeout.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Timeout.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.Timeout.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TimeoutProps`](#@opencdk8s/cdk8s-kuma-types.TimeoutProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.Timeout.manifest"></a>

```typescript
import { Timeout } from '@opencdk8s/cdk8s-kuma-types'

Timeout.manifest(props?: TimeoutProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.Timeout.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TimeoutProps`](#@opencdk8s/cdk8s-kuma-types.TimeoutProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.Timeout.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "Timeout".

---

### TrafficLog <a name="@opencdk8s/cdk8s-kuma-types.TrafficLog"></a>

TrafficLog is the Schema for the trafficlogs API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.TrafficLog.Initializer"></a>

```typescript
import { TrafficLog } from '@opencdk8s/cdk8s-kuma-types'

new TrafficLog(scope: Construct, id: string, props?: TrafficLogProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficLog.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficLog.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficLog.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TrafficLogProps`](#@opencdk8s/cdk8s-kuma-types.TrafficLogProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.TrafficLog.manifest"></a>

```typescript
import { TrafficLog } from '@opencdk8s/cdk8s-kuma-types'

TrafficLog.manifest(props?: TrafficLogProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficLog.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TrafficLogProps`](#@opencdk8s/cdk8s-kuma-types.TrafficLogProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.TrafficLog.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "TrafficLog".

---

### TrafficPermission <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermission"></a>

TrafficPermission is the Schema for the trafficpermissions API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermission.Initializer"></a>

```typescript
import { TrafficPermission } from '@opencdk8s/cdk8s-kuma-types'

new TrafficPermission(scope: Construct, id: string, props?: TrafficPermissionProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermission.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermission.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermission.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TrafficPermissionProps`](#@opencdk8s/cdk8s-kuma-types.TrafficPermissionProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermission.manifest"></a>

```typescript
import { TrafficPermission } from '@opencdk8s/cdk8s-kuma-types'

TrafficPermission.manifest(props?: TrafficPermissionProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermission.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TrafficPermissionProps`](#@opencdk8s/cdk8s-kuma-types.TrafficPermissionProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermission.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "TrafficPermission".

---

### TrafficRoute <a name="@opencdk8s/cdk8s-kuma-types.TrafficRoute"></a>

TrafficRoute is the Schema for the trafficroutes API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.TrafficRoute.Initializer"></a>

```typescript
import { TrafficRoute } from '@opencdk8s/cdk8s-kuma-types'

new TrafficRoute(scope: Construct, id: string, props?: TrafficRouteProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficRoute.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficRoute.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficRoute.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TrafficRouteProps`](#@opencdk8s/cdk8s-kuma-types.TrafficRouteProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.TrafficRoute.manifest"></a>

```typescript
import { TrafficRoute } from '@opencdk8s/cdk8s-kuma-types'

TrafficRoute.manifest(props?: TrafficRouteProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficRoute.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TrafficRouteProps`](#@opencdk8s/cdk8s-kuma-types.TrafficRouteProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.TrafficRoute.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "TrafficRoute".

---

### TrafficTrace <a name="@opencdk8s/cdk8s-kuma-types.TrafficTrace"></a>

TrafficTrace is the Schema for the traffictraces API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.TrafficTrace.Initializer"></a>

```typescript
import { TrafficTrace } from '@opencdk8s/cdk8s-kuma-types'

new TrafficTrace(scope: Construct, id: string, props?: TrafficTraceProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficTrace.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficTrace.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficTrace.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TrafficTraceProps`](#@opencdk8s/cdk8s-kuma-types.TrafficTraceProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.TrafficTrace.manifest"></a>

```typescript
import { TrafficTrace } from '@opencdk8s/cdk8s-kuma-types'

TrafficTrace.manifest(props?: TrafficTraceProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficTrace.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TrafficTraceProps`](#@opencdk8s/cdk8s-kuma-types.TrafficTraceProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.TrafficTrace.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "TrafficTrace".

---

### TypedKumaExternalService <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaExternalService"></a>

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaExternalService.Initializer"></a>

```typescript
import { TypedKumaExternalService } from '@opencdk8s/cdk8s-kuma-types'

new TypedKumaExternalService(scope: Construct, name: string, opts: TypedKumaExternalServiceOptions)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaExternalService.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `name`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaExternalService.parameter.name"></a>

- *Type:* `string`

---

##### `opts`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaExternalService.parameter.opts"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TypedKumaExternalServiceOptions`](#@opencdk8s/cdk8s-kuma-types.TypedKumaExternalServiceOptions)

---





### TypedTrafficPermission <a name="@opencdk8s/cdk8s-kuma-types.TypedTrafficPermission"></a>

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.TypedTrafficPermission.Initializer"></a>

```typescript
import { TypedTrafficPermission } from '@opencdk8s/cdk8s-kuma-types'

new TypedTrafficPermission(scope: Construct, name: string, opts: TypedKumaTrafficPermission)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedTrafficPermission.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `name`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedTrafficPermission.parameter.name"></a>

- *Type:* `string`

---

##### `opts`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedTrafficPermission.parameter.opts"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.TypedKumaTrafficPermission`](#@opencdk8s/cdk8s-kuma-types.TypedKumaTrafficPermission)

---





### VirtualOutbound <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutbound"></a>

VirtualOutbound is the Schema for the virtualoutbounds API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutbound.Initializer"></a>

```typescript
import { VirtualOutbound } from '@opencdk8s/cdk8s-kuma-types'

new VirtualOutbound(scope: Construct, id: string, props?: VirtualOutboundProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutbound.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutbound.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutbound.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.VirtualOutboundProps`](#@opencdk8s/cdk8s-kuma-types.VirtualOutboundProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutbound.manifest"></a>

```typescript
import { VirtualOutbound } from '@opencdk8s/cdk8s-kuma-types'

VirtualOutbound.manifest(props?: VirtualOutboundProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutbound.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.VirtualOutboundProps`](#@opencdk8s/cdk8s-kuma-types.VirtualOutboundProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutbound.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "VirtualOutbound".

---

### Zone <a name="@opencdk8s/cdk8s-kuma-types.Zone"></a>

Zone is the Schema for the zone API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.Zone.Initializer"></a>

```typescript
import { Zone } from '@opencdk8s/cdk8s-kuma-types'

new Zone(scope: Construct, id: string, props?: ZoneProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Zone.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.Zone.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.Zone.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ZoneProps`](#@opencdk8s/cdk8s-kuma-types.ZoneProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.Zone.manifest"></a>

```typescript
import { Zone } from '@opencdk8s/cdk8s-kuma-types'

Zone.manifest(props?: ZoneProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.Zone.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ZoneProps`](#@opencdk8s/cdk8s-kuma-types.ZoneProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.Zone.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "Zone".

---

### ZoneIngress <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngress"></a>

ZoneIngress is the Schema for the zone ingress API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngress.Initializer"></a>

```typescript
import { ZoneIngress } from '@opencdk8s/cdk8s-kuma-types'

new ZoneIngress(scope: Construct, id: string, props?: ZoneIngressProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngress.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngress.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngress.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ZoneIngressProps`](#@opencdk8s/cdk8s-kuma-types.ZoneIngressProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngress.manifest"></a>

```typescript
import { ZoneIngress } from '@opencdk8s/cdk8s-kuma-types'

ZoneIngress.manifest(props?: ZoneIngressProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngress.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ZoneIngressProps`](#@opencdk8s/cdk8s-kuma-types.ZoneIngressProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngress.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "ZoneIngress".

---

### ZoneIngressInsight <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsight"></a>

ZoneIngressInsight is the Schema for the zone ingress insight API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsight.Initializer"></a>

```typescript
import { ZoneIngressInsight } from '@opencdk8s/cdk8s-kuma-types'

new ZoneIngressInsight(scope: Construct, id: string, props?: ZoneIngressInsightProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsight.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsight.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsight.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ZoneIngressInsightProps`](#@opencdk8s/cdk8s-kuma-types.ZoneIngressInsightProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsight.manifest"></a>

```typescript
import { ZoneIngressInsight } from '@opencdk8s/cdk8s-kuma-types'

ZoneIngressInsight.manifest(props?: ZoneIngressInsightProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsight.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ZoneIngressInsightProps`](#@opencdk8s/cdk8s-kuma-types.ZoneIngressInsightProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsight.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "ZoneIngressInsight".

---

### ZoneInsight <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsight"></a>

ZoneInsight is the Schema for the zone insight API.

#### Initializers <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsight.Initializer"></a>

```typescript
import { ZoneInsight } from '@opencdk8s/cdk8s-kuma-types'

new ZoneInsight(scope: Construct, id: string, props?: ZoneInsightProps)
```

##### `scope`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsight.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsight.parameter.id"></a>

- *Type:* `string`

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsight.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ZoneInsightProps`](#@opencdk8s/cdk8s-kuma-types.ZoneInsightProps)

initialization props.

---


#### Static Functions <a name="Static Functions"></a>

##### `manifest` <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsight.manifest"></a>

```typescript
import { ZoneInsight } from '@opencdk8s/cdk8s-kuma-types'

ZoneInsight.manifest(props?: ZoneInsightProps)
```

###### `props`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsight.parameter.props"></a>

- *Type:* [`@opencdk8s/cdk8s-kuma-types.ZoneInsightProps`](#@opencdk8s/cdk8s-kuma-types.ZoneInsightProps)

initialization props.

---


#### Constants <a name="Constants"></a>

##### `GVK` <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsight.property.GVK"></a>

- *Type:* [`cdk8s.GroupVersionKind`](#cdk8s.GroupVersionKind)

Returns the apiVersion and kind for "ZoneInsight".

---

## Structs <a name="Structs"></a>

### CircuitBreakerProps <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreakerProps"></a>

CircuitBreaker is the Schema for the circuitbreaker API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CircuitBreakerProps } from '@opencdk8s/cdk8s-kuma-types'

const circuitBreakerProps: CircuitBreakerProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreakerProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreakerProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.CircuitBreakerProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### DataplaneInsightProps <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsightProps"></a>

DataplaneInsight is the Schema for the dataplane insights API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataplaneInsightProps } from '@opencdk8s/cdk8s-kuma-types'

const dataplaneInsightProps: DataplaneInsightProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsightProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.DataplaneInsightProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

### DataplaneProps <a name="@opencdk8s/cdk8s-kuma-types.DataplaneProps"></a>

Dataplane is the Schema for the dataplanes API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataplaneProps } from '@opencdk8s/cdk8s-kuma-types'

const dataplaneProps: DataplaneProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.DataplaneProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.DataplaneProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.DataplaneProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### ExternalServiceProps <a name="@opencdk8s/cdk8s-kuma-types.ExternalServiceProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ExternalServiceProps } from '@opencdk8s/cdk8s-kuma-types'

const externalServiceProps: ExternalServiceProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ExternalServiceProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ExternalServiceProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ExternalServiceProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### FaultInjectionProps <a name="@opencdk8s/cdk8s-kuma-types.FaultInjectionProps"></a>

FaultInjection is the Schema for the faultinjections API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FaultInjectionProps } from '@opencdk8s/cdk8s-kuma-types'

const faultInjectionProps: FaultInjectionProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.FaultInjectionProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.FaultInjectionProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.FaultInjectionProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### HealthCheckProps <a name="@opencdk8s/cdk8s-kuma-types.HealthCheckProps"></a>

HealthCheck is the Schema for the healthchecks API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { HealthCheckProps } from '@opencdk8s/cdk8s-kuma-types'

const healthCheckProps: HealthCheckProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.HealthCheckProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.HealthCheckProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.HealthCheckProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### KumaOptions <a name="@opencdk8s/cdk8s-kuma-types.KumaOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { KumaOptions } from '@opencdk8s/cdk8s-kuma-types'

const kumaOptions: KumaOptions = { ... }
```

##### `gatewayWhitelist`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.KumaOptions.property.gatewayWhitelist"></a>

```typescript
public readonly gatewayWhitelist: string[];
```

- *Type:* `string`[]

---

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.KumaOptions.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `serviceWhitelist`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.KumaOptions.property.serviceWhitelist"></a>

```typescript
public readonly serviceWhitelist: string[];
```

- *Type:* `string`[]

---

### MeshInsightProps <a name="@opencdk8s/cdk8s-kuma-types.MeshInsightProps"></a>

MeshInsight is the Schema for the meshes insights API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { MeshInsightProps } from '@opencdk8s/cdk8s-kuma-types'

const meshInsightProps: MeshInsightProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.MeshInsightProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.MeshInsightProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.MeshInsightProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### MeshProps <a name="@opencdk8s/cdk8s-kuma-types.MeshProps"></a>

Mesh is the Schema for the meshes API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { MeshProps } from '@opencdk8s/cdk8s-kuma-types'

const meshProps: MeshProps = { ... }
```

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.MeshProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.MeshProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### ProxyTemplateProps <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplateProps"></a>

ProxyTemplate is the Schema for the proxytemplates API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ProxyTemplateProps } from '@opencdk8s/cdk8s-kuma-types'

const proxyTemplateProps: ProxyTemplateProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplateProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplateProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ProxyTemplateProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### RateLimitProps <a name="@opencdk8s/cdk8s-kuma-types.RateLimitProps"></a>

RateLimit is the Schema for the ratelimits API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RateLimitProps } from '@opencdk8s/cdk8s-kuma-types'

const rateLimitProps: RateLimitProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.RateLimitProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.RateLimitProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.RateLimitProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### RetryProps <a name="@opencdk8s/cdk8s-kuma-types.RetryProps"></a>

Retry is the Schema for the retries API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RetryProps } from '@opencdk8s/cdk8s-kuma-types'

const retryProps: RetryProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.RetryProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.RetryProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.RetryProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### ServiceInsightProps <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsightProps"></a>

ServiceInsight is the Schema for the services insights API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceInsightProps } from '@opencdk8s/cdk8s-kuma-types'

const serviceInsightProps: ServiceInsightProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsightProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsightProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ServiceInsightProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### TimeoutProps <a name="@opencdk8s/cdk8s-kuma-types.TimeoutProps"></a>

Timeout is the Schema for the timeout API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TimeoutProps } from '@opencdk8s/cdk8s-kuma-types'

const timeoutProps: TimeoutProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TimeoutProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TimeoutProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TimeoutProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### TrafficLogProps <a name="@opencdk8s/cdk8s-kuma-types.TrafficLogProps"></a>

TrafficLog is the Schema for the trafficlogs API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TrafficLogProps } from '@opencdk8s/cdk8s-kuma-types'

const trafficLogProps: TrafficLogProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficLogProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficLogProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficLogProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### TrafficPermissionProps <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermissionProps"></a>

TrafficPermission is the Schema for the trafficpermissions API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TrafficPermissionProps } from '@opencdk8s/cdk8s-kuma-types'

const trafficPermissionProps: TrafficPermissionProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermissionProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermissionProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficPermissionProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### TrafficRouteProps <a name="@opencdk8s/cdk8s-kuma-types.TrafficRouteProps"></a>

TrafficRoute is the Schema for the trafficroutes API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TrafficRouteProps } from '@opencdk8s/cdk8s-kuma-types'

const trafficRouteProps: TrafficRouteProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficRouteProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficRouteProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficRouteProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### TrafficTraceProps <a name="@opencdk8s/cdk8s-kuma-types.TrafficTraceProps"></a>

TrafficTrace is the Schema for the traffictraces API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TrafficTraceProps } from '@opencdk8s/cdk8s-kuma-types'

const trafficTraceProps: TrafficTraceProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficTraceProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficTraceProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TrafficTraceProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### TypedKumaExternalServiceOptions <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaExternalServiceOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TypedKumaExternalServiceOptions } from '@opencdk8s/cdk8s-kuma-types'

const typedKumaExternalServiceOptions: TypedKumaExternalServiceOptions = { ... }
```

##### `mesh`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaExternalServiceOptions.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `serviceAddress`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaExternalServiceOptions.property.serviceAddress"></a>

```typescript
public readonly serviceAddress: string;
```

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaExternalServiceOptions.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* `string`

---

##### `serviceProtocol`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaExternalServiceOptions.property.serviceProtocol"></a>

```typescript
public readonly serviceProtocol: string;
```

- *Type:* `string`

---

### TypedKumaTrafficPermission <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaTrafficPermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TypedKumaTrafficPermission } from '@opencdk8s/cdk8s-kuma-types'

const typedKumaTrafficPermission: TypedKumaTrafficPermission = { ... }
```

##### `destination`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaTrafficPermission.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* `string`

---

##### `mesh`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaTrafficPermission.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `sources`<sup>Required</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaTrafficPermission.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* `string`[]

---

##### `destinationLabel`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.TypedKumaTrafficPermission.property.destinationLabel"></a>

```typescript
public readonly destinationLabel: string;
```

- *Type:* `string`

---

### VirtualOutboundProps <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutboundProps"></a>

VirtualOutbound is the Schema for the virtualoutbounds API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { VirtualOutboundProps } from '@opencdk8s/cdk8s-kuma-types'

const virtualOutboundProps: VirtualOutboundProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutboundProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutboundProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.VirtualOutboundProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### ZoneIngressInsightProps <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsightProps"></a>

ZoneIngressInsight is the Schema for the zone ingress insight API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ZoneIngressInsightProps } from '@opencdk8s/cdk8s-kuma-types'

const zoneIngressInsightProps: ZoneIngressInsightProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsightProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsightProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressInsightProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### ZoneIngressProps <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressProps"></a>

ZoneIngress is the Schema for the zone ingress API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ZoneIngressProps } from '@opencdk8s/cdk8s-kuma-types'

const zoneIngressProps: ZoneIngressProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneIngressProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### ZoneInsightProps <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsightProps"></a>

ZoneInsight is the Schema for the zone insight API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ZoneInsightProps } from '@opencdk8s/cdk8s-kuma-types'

const zoneInsightProps: ZoneInsightProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsightProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsightProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneInsightProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---

### ZoneProps <a name="@opencdk8s/cdk8s-kuma-types.ZoneProps"></a>

Zone is the Schema for the zone API.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ZoneProps } from '@opencdk8s/cdk8s-kuma-types'

const zoneProps: ZoneProps = { ... }
```

##### `mesh`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneProps.property.mesh"></a>

```typescript
public readonly mesh: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* [`cdk8s.ApiObjectMetadata`](#cdk8s.ApiObjectMetadata)

---

##### `spec`<sup>Optional</sup> <a name="@opencdk8s/cdk8s-kuma-types.ZoneProps.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* `any`

---



